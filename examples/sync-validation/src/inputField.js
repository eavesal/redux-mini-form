import React from 'react'
import PropTypes from 'prop-types'
import {omit} from 'ramda'

import {withField, fieldPropTypes} from 'redux-mini-form'

export const FIELD_ERROR_MSG = 'FIELD_ERROR_MSG'

const Input = ({
  placeholder,
  error,
  name,
  ...restProps
}) => (
  <div className='form-row'>
    <label htmlFor={name}>{placeholder}</label>
    <div>
      <input name={name} placeholder={placeholder} {...omit(['clearError'], restProps)} />
      {error && error.type === FIELD_ERROR_MSG && <span className='field-error'>{error.msg}</span>}
      {error && error.type === 'REQUIRED' &&
      <span
        className='required-error'
        role='img'
        aria-label='required'
      >❕Required
      </span>
      }
    </div>
  </div>
)

Input.propTypes = {
  ...fieldPropTypes,
  type: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

export default withField({
  parse: (e) => e.target.value,
})(Input)
