import React from 'react'
import { omit } from 'ramda'

import withField, { fieldPropTypes } from '../hoc/withField'

const Textarea = props => <textarea {...omit(['error', 'clearError'], props)} />

Textarea.propTypes = fieldPropTypes

export default withField({
  parse: e => e.target.value,
})(Textarea)
