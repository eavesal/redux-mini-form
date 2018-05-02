// @flow

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import DialogRefluxActions from 'src/shared/actions/dialogRefluxActions';
import ErrorHeaderRefluxActions from 'src/shared/actions/errorHeaderRefluxActions';
import {connect} from 'react-redux';
import * as SharedActions from 'src/shared/actions/sharedActions';
import * as FormCacheActions from 'src/shared/actions/formCacheActions';
import {
  ERROR_HEADER,
  SIMPLE_ERROR_POPUP,
  API_ERROR_POPUP
} from 'src/shared/form/constants/validationErrorTypes';

import type {ComponentType} from 'react';
import type {
  FormData,
  FormValidationErrors
} from 'src/shared/form/flow-typed/form.types';

type Props = {
  formId: string,
  onSubmit: (*) => {},
  formData: ?FormData,
  formCache: ?FormData,
  clearFormCacheByIdFn: (formId: string) => void,
  updateFormFieldCacheValueFn: (formId: string, fieldName: string, fieldValue: *) => void,
  asyncActionStartFn: () => void,
  asyncActionFinishFn: () => void
};

type State = {
  errors: FormValidationErrors
};

type Options = {
  formValidator?: * => * => *,
  defaultValues?: (*) => {[fieldName: string]: *},
  disableFormCache?: boolean
};

const defaultOptions = {
  formValidator: () => () => {},
  defaultValues: () => ({}),
  disableFormCache: false
};

const withForm = (
  options: Options
) =>
  (Component: *): ComponentType<*> => {
    const {formValidator, defaultValues, disableFormCache} = _.merge({}, defaultOptions, options);
    class WithForm extends React.Component<Props, State> {
      static childContextTypes = {
        form: PropTypes.object
      }

      constructor(props) {
        super(props);
        this.state = {
          errors: {}
        };
        this.fields = {};
      }

      getChildContext() {
        const {errors} = this.state;
        return {
          form: {
            onChange: this._onChange,
            clearError: this._clearError,
            register: this.register,
            unregister: this.unregister,
            getDefaultValue: this._getDefaultValue,
            errors,
            formData: this._getFormData()
          }
        };
      }

      componentWillUnmount() {
        this._hideHeaderError();
        if (disableFormCache) {
          this.props.clearFormCacheByIdFn(this.props.formId);
        }
      }

      fields: {
        [fieldName: string]: number}

      register = (fieldName: string) => {
        if (_.isNumber(this.fields[fieldName])) {
          this.fields[fieldName] += 1;
        } else {
          this.fields[fieldName] = 1;
        }
      }

      unregister = (fieldName: string) => {
        this.fields[fieldName] -= 1;
      }

      _getFormData = () => {
        const {formData, formCache} = this.props;
        return _.merge({}, this._getDefaultValues(), formData, formCache);
      }

      _getDefaultValues = () => {
        return defaultValues ? defaultValues(this.props) : {};
      }

      _getDefaultValue = (fieldName: string) => {
        const defaultValue = this._getDefaultValues()[fieldName];
        return _.isUndefined(defaultValue) ? '' : defaultValue;
      }

      _getRegisteredFormDataWithDefaultValues = () => {
        const formData = this._getFormData();
        const defaultValues = this._getDefaultValues();
        return _.chain(this.fields)
          .pickBy((count) => count > 0)
          .mapValues((count, fieldName) =>
            _.isUndefined(formData[fieldName]) ? (defaultValues[fieldName] || '') : formData[fieldName]
          ).value();
      }

      _onChange = (fieldName: string, fieldValue: *) => {
        const {errors} = this.state;
        this.props.updateFormFieldCacheValueFn(this.props.formId, fieldName, fieldValue);
        this.setState({
          errors: _.omit(errors, fieldName)
        });
      }

      _getFirstErrorByType(errors, type: string) {
        return _.chain(errors)
          .pickBy((error) => error.type === type)
          .toPairs()
          .first()
          .thru((error) => error ? {key: error[0], error: error[1]} : null)
          .value();
      }

      _handleValidationErrors = (formData, errors) => {
        if (!_.isEmpty(errors)) {
          const headerError = this._getFirstErrorByType(errors, ERROR_HEADER);
          const simplePopupError = this._getFirstErrorByType(errors, SIMPLE_ERROR_POPUP);
          const apiPopupError = this._getFirstErrorByType(errors, API_ERROR_POPUP);
          if (headerError) {
            ErrorHeaderRefluxActions.showMessage(headerError.error.msg);
          } else if (simplePopupError) {
            this._showSimpleErrorPopup(simplePopupError.key, simplePopupError.error);
          } else if (apiPopupError) {
            this._showApiErrorPopup(apiPopupError.key, apiPopupError.error);
          }
          return this.setState({
            errors
          });
        }
        this.props.onSubmit(formData);
        this.props.clearFormCacheByIdFn(this.props.formId);
      }

      _onSubmit = () => {
        const {asyncActionStartFn, asyncActionFinishFn} = this.props;
        this._hideHeaderError();
        const formDataWithDefaultValue = this._getRegisteredFormDataWithDefaultValues();
        const formDataWithTrimmedValue = _.mapValues(
          formDataWithDefaultValue,
          (fieldValue, fieldName) => (_.isString(fieldValue) && !/.*password.*/i.test(fieldName)) ? _.trim(fieldValue) : fieldValue
        );

        const validatorResult = formValidator(this.props)(formDataWithTrimmedValue);

        if (_.isPromise(validatorResult)) {
          asyncActionStartFn();
          validatorResult
            .then((errors) => this._handleValidationErrors(formDataWithTrimmedValue, errors))
            .finally(() => {
              asyncActionFinishFn();
            });
        } else {
          this._handleValidationErrors(formDataWithTrimmedValue, validatorResult);
        }
      }

      _showSimpleErrorPopup(key: string, error: {type: string, msg: *}) {
        DialogRefluxActions.show({
          name: key,
          title: error.msg
        });
      }

      _showApiErrorPopup(key: string, error: {type: string, msg: *}) {
        DialogRefluxActions.show({
          name: key,
          title: error.msg.message,
          className: 'check-our-work-dialog',
          contentView: (<div><br/><p>Error {error.msg.code}</p><p>({error.msg.requestId})</p></div>),
          buttons: [
            {
              label: 'OK',
              onClick: () => DialogRefluxActions.hide()
            }
          ]
        });
      }

      _clearError = (fieldName: string, clearValue: boolean = true) => {
        const {errors} = this.state;
        const hasError = !_.isEmpty(errors[fieldName]);

        if (hasError) {
          if (clearValue) {
            this.props.updateFormFieldCacheValueFn(this.props.formId, fieldName, this._getDefaultValue(fieldName));
          }

          this.setState({
            errors: _.omit(errors, fieldName)
          });
        }
      }

      _hideHeaderError() {
        ErrorHeaderRefluxActions.hide();
      }

      render() {
        return (
          <Component
            formData={this._getFormData()}
            onSubmit={this._onSubmit}
            onChange={this._onChange}
            {..._.omit(this.props, 'onSubmit', 'formData', 'updateFormFieldCacheValueFn')}
          />
        );
      }
    }

    const mapStateToProps = (state, props) => {
      const {formId} = props;
      return {
        formCache: _.get(state.app.formCache, `${formId}.data`)
      };
    };

    const mapDispatchToProps = {
      clearFormCacheByIdFn: FormCacheActions.clearFormCacheById,
      updateFormFieldCacheValueFn: FormCacheActions.updateFormFieldCacheValue,
      asyncActionStartFn: SharedActions.asyncActionStart,
      asyncActionFinishFn: SharedActions.asyncActionFinish
    };

    return connect(mapStateToProps, mapDispatchToProps)(WithForm);
  };

export default withForm;
