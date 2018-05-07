import React from 'react'
import PropTypes from 'prop-types'
import {isEmpty} from 'ramda'
import withField from '../../hoc/withField'

function Input({
  clearError,
  onChange,
  value,
  name,
  error,
  className,
  ...restProps
}) {
  const hasError = error && !isEmpty(error)
  return (
    <div className={className}>
      <div>
        <input
          name={name}
          onFocus={clearError}
          onChange={onChange}
          value={value}
          {...restProps}
        />
      </div>
      {hasError && (<div>{error.msg}</div>)}
    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  error: PropTypes.object,
}

Input.defaultProps = {
  error: {},
}

export default withField({
  parse: (event) => event.target.value,
})(Input)
