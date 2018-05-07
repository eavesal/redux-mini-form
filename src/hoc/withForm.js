
import React from 'react'
import PropTypes from 'prop-types'
import {
  lt,
  pickBy,
  compose,
  mapObjIndexed,
  omit,
  isEmpty,
  identity,
  trim,
  keys,
} from 'ramda'

import formConnector from '../connector/formConnector'

const withForm = (options = {}) => (Component) => {
  const {
    formValidator = () => () => ({}),
    defaultValues: getDefaultValues = () => ({}),
    disableFormCache = false,
    asyncFormValidator,
  } = options
  class WithForm extends React.Component {
    static propTypes = {
      formId: PropTypes.string.isRequired,
      onSubmit: PropTypes.func.isRequired,
      formModelData: PropTypes.object,
      formViewData: PropTypes.object,
      deleteFormViewValueById: PropTypes.func.isRequired,
      updateFieldViewValue: PropTypes.func.isRequired,
      updateFormModelData: PropTypes.func.isRequired,
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
      formModelData: {},
      formViewData: {},
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
      return {
        ...this.getDefaultValues(),
        ...formModelData,
        ...formViewData,
      }
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
      const mapRegisteredFormDataWithDefaultValues = mapObjIndexed((count, fieldName) => {
        if (formData[fieldName] === undefined) {
          return defaultValues[fieldName] || ''
        }
        return formData[fieldName]
      })

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
      if (errors && !isEmpty(errors)) {
        onValidationFailed(errors)
        this.setState({
          errors,
        })
      }
      this.props.updateFormModelData(this.props.formId, formData)
      this.props.onSubmit(formData)
      this.props.deleteFormViewValueById(this.props.formId)
    }

    handleSubmit = () => {
      const shouldTrim = (fieldName, fieldValue) => typeof fieldValue === 'string' && !/.*password.*/i.test(fieldName)
      const formDataWithDefaultValue = this.getRegisteredFormDataWithDefaultValues()
      const formDataWithTrimmedValue = mapObjIndexed(
        (fieldValue, fieldName) => (shouldTrim(fieldName, fieldValue) ? trim(fieldValue) : fieldValue),
        formDataWithDefaultValue,
      )
      const {onAsyncValidationStart, onAsyncValidationEnd} = this.props

      const errors = formValidator(this.props)(formDataWithTrimmedValue)
      if (errors && !isEmpty(errors) && typeof asyncFormValidator === 'function') {
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
      const error = errors[fieldName]
      const hasError = error && !isEmpty(error)

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
          formId={this.props.formId}
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
