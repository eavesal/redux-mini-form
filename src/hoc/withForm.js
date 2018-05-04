
import React from 'react'
import PropTypes from 'prop-types'
import {
  merge,
  lt,
  pickBy,
  compose,
  map,
  omit,
  isEmpty,
  identity,
  trim,
  keys,
} from 'ramda'

import formConnector from '../connector/formConnector'

const defaultOptions = {
  formValidator: () => () => {},
  defaultValues: () => ({}),
  disableFormCache: false,
}

const withForm = (options) => (Component) => {
  const {
    formValidator,
    defaultValues: getDefaultValues,
    disableFormCache,
    asyncFormValidator,
  } = merge(defaultOptions, options)
  class WithForm extends React.Component {
    static propTypes = {
      formId: PropTypes.string.isRequired,
      onSubmit: PropTypes.func.isRequired,
      formModelData: PropTypes.object.isRequired,
      formViewData: PropTypes.object.isRequired,
      deleteFormViewValueById: PropTypes.func.isRequired,
      updateFieldViewValue: PropTypes.func.isRequired,
      onValidationFailed: PropTypes.func,
      onAsyncValidationStart: PropTypes.func,
      onAsyncValidationEnd: PropTypes.func,
    }

    static childContextTypes = {
      form: PropTypes.object,
    }

    static defaultProps = {
      onValidationFailed: identity,
      onAsyncValidationStart: identity,
      onAsyncValidationEnd: identity,
    }

    constructor(props) {
      super(props)
      this.state = {
        errors: {},
      }
      this.fields = {}
    }

    getChildContext() {
      const {errors} = this.state
      return {
        form: {
          onChange: this.handleChange,
          clearError: this.clearError,
          register: this.register,
          unregister: this.unregister,
          getDefaultValue: this.getDefaultValue,
          errors,
          formData: this.getFormData(),
        },
      }
    }

    componentWillUnmount() {
      if (disableFormCache) {
        this.props.deleteFormViewValueById(this.props.formId)
      }
    }

    getFormData = () => {
      const {formModelData, formViewData} = this.props
      return merge(this.getDefaultValues(), formModelData, formViewData)
    }

    getDefaultValues = () => ({
      ...getDefaultValues ? getDefaultValues(this.props) : {},
    })

    getDefaultValue = (fieldName) => {
      const defaultValue = this.getDefaultValues()[fieldName]
      return defaultValue === undefined ? '' : defaultValue
    }

    getRegisteredFormDataWithDefaultValues = () => {
      const formData = this.getFormData()
      const defaultValues = this.getDefaultValues()
      const pickFieldsThatGreaterThan0 = pickBy(lt(0))
      const mapRegisteredFormDataWithDefaultValues = map((count, fieldName) =>
        (formData[fieldName] === undefined ? (defaultValues[fieldName] || '') : formData[fieldName]))
      return compose(
        mapRegisteredFormDataWithDefaultValues,
        pickFieldsThatGreaterThan0,
      )(this.fields)
    }

    register = (fieldName) => {
      if (typeof this.fields[fieldName] === 'number') {
        this.fields[fieldName] += 1
      } else {
        this.fields[fieldName] = 1
      }
    }

    unregister = (fieldName) => {
      this.fields[fieldName] -= 1
    }

    handleChange = (fieldName, fieldValue) => {
      const {errors} = this.state
      this.props.updateFieldViewValue(this.props.formId, fieldName, fieldValue)
      this.setState({
        errors: omit([fieldName], errors),
      })
    }

    handleValidationErrors = (formData, errors) => {
      const {onValidationFailed} = this.props
      if (!isEmpty(errors)) {
        onValidationFailed(errors)
        this.setState({
          errors,
        })
      }
      this.props.onSubmit(formData)
      this.props.deleteFormViewValueById(this.props.formId)
    }

    handleSubmit = () => {
      const shouldTrim = (fieldName, fieldValue) => typeof fieldValue === 'string' && !/.*password.*/i.test(fieldName)
      const formDataWithDefaultValue = this.getRegisteredFormDataWithDefaultValues()
      const formDataWithTrimmedValue = map(
        formDataWithDefaultValue,
        (fieldValue, fieldName) => (shouldTrim(fieldName, fieldValue) ? trim(fieldValue) : fieldValue),
      )
      const {onAsyncValidationStart, onAsyncValidationEnd} = this.props

      const errors = formValidator(this.props)(formDataWithTrimmedValue)
      if (!isEmpty(errors) && typeof asyncFormValidator === 'function') {
        onAsyncValidationStart()
        asyncFormValidator(this.props)(formDataWithTrimmedValue, errors)
          .then((asyncErrors) =>
            this.handleValidationErrors(formDataWithTrimmedValue, {...errors, ...asyncErrors}))
          .finally(onAsyncValidationEnd)
      } else {
        this.handleValidationErrors(formDataWithTrimmedValue, errors)
      }
    }

    clearError = (fieldName, clearValue = true) => {
      const {errors} = this.state
      const hasError = !isEmpty(errors[fieldName])

      if (hasError) {
        if (clearValue) {
          this.props.updateFieldViewValue(this.props.formId, fieldName, this.getDefaultValue(fieldName))
        }

        this.setState({
          errors: omit(fieldName, errors),
        })
      }
    }

    render() {
      return (
        <Component
          formData={this.getFormData()}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          {...omit(keys(WithForm.propTypes), this.props)}
        />
      )
    }
  }

  return formConnector(WithForm)
}

export default withForm
