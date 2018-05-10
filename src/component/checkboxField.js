import React from 'react'
import {omit} from 'ramda'

import withField, {fieldPropTypes} from '../hoc/withField'

const Checkbox = (props) => <input type='checkbox' {...omit(['error', 'clearError'], props)} />

Checkbox.propTypes = fieldPropTypes

export default withField({
  parse: (e) => e.target.value === 'true',
  format: (value) => (!!value).toString(),
})(Checkbox)
