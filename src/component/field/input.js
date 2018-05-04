import React from 'react'
import PropTypes from 'prop-types'
import omit from 'ramda'

function Input({
  clearError,
  onChange,
  value,
  name,
  ...restProps
}) {
  return (
    <div>
      <input
        name={name}
        onFocus={clearError}
        onChange={onChange}
        value={value}
        {...omit(['error'], restProps)}
      />
    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Input
