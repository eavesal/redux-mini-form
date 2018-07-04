import { omit } from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'

const withField = ({ format = value => value, parse = value => value } = {}) => Input => {
  class WithField extends React.Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
    }

    static contextTypes = {
      form: PropTypes.shape({
        onChange: PropTypes.func.isRequired,
        clearError: PropTypes.func.isRequired,
        register: PropTypes.func.isRequired,
        unregister: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        formData: PropTypes.object.isRequired,
        getDefaultValue: PropTypes.func.isRequired,
      }),
    }

    componentWillMount() {
      const { name } = this.props
      this.context.form.register(name)
    }

    componentWillUnmount() {
      const { name } = this.props
      this.context.form.unregister(name)
    }

    handleChange = (...args) => {
      const { name } = this.props
      const { onChange } = this.context.form
      const value = parse(...args)
      onChange(name, value)
    }

    render() {
      const { formData, errors, clearError, getDefaultValue } = this.context.form
      const { name, ...restProps } = this.props
      const value = formData[name] === undefined ? getDefaultValue(name) : formData[name]
      const error = errors[name]

      return (
        <Input
          onChange={this.handleChange}
          clearError={(...args) => clearError(name, ...args)}
          value={format(value)}
          name={name}
          error={error}
          {...omit(['defaultValue', 'onChange'], restProps)}
        />
      )
    }
  }
  return WithField
}

export const fieldPropTypes = {
  onChange: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.object,
}

export default withField
