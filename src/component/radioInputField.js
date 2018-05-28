import React from 'react'
import PropTypes from 'prop-types'
import {omit} from 'ramda'

import withField, {fieldPropTypes} from '../hoc/withField'

const RadioInput = ({
  value,
  option,
  onChange,
  ...restProps
}) =>
  (<input
    type='radio'
    {...omit(['error', 'clearError'], restProps)}
    value={option}
    checked={value === option}
    onChange={(e) => e.target.checked && onChange(option)}
  />)

RadioInput.propTypes = {
  ...fieldPropTypes,
  option: PropTypes.string.isRequired,
}

export default withField()(RadioInput)
