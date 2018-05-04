
import React from 'react'
import PropTypes from 'prop-types'
import {contains, pick} from 'ramda'

const withFields = (Component) => {
  class WithFields extends React.Component {
    static propTypes = {
      names: PropTypes.arrayOf(PropTypes.string).isRequired,
    }
    static contextTypes = {
      form: PropTypes.shape({
        onChange: PropTypes.func.isRequired,
        clearError: PropTypes.func.isRequired,
        register: PropTypes.func.isRequired,
        unregister: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        formData: PropTypes.object.isRequired,
      }),
    }

    handleChange = (name, ...args) => {
      const {names} = this.props
      const {onChange} = this.context.form
      if (contains(name, names)) {
        onChange(name, ...args)
      }
    }

    render() {
      const {names, ...restProps} = this.props
      const {formData} = this.context.form

      return (
        <Component
          formData={pick(names, formData)}
          onChange={this.handleChange}
          {...restProps}
        />
      )
    }
  }
  return WithFields
}

export default withFields
