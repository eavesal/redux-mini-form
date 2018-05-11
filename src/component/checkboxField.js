import React from 'react'
import {omit} from 'ramda'

import withField, {fieldPropTypes} from '../hoc/withField'

const Checkbox = ({value, ...restProps}) => (
  <input
    type='checkbox'
    checked={value}
    {...omit(['error', 'clearError'], restProps)}
  />
)

Checkbox.propTypes = fieldPropTypes

export default withField({
  format: (val) => !!val,
  parse: (e) => e.target.checked,
})(Checkbox)
