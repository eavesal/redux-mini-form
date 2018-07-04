import React from 'react'
import PropTypes from 'prop-types'
import { omit } from 'ramda'

import withField, { fieldPropTypes } from '../hoc/withField'

const Select = props => (
  <select {...omit(['error', 'clearError', 'children'], props)}>{props.children}</select>
)

Select.propTypes = {
  ...fieldPropTypes,
  children: PropTypes.arrayOf(PropTypes.element),
}

Select.defaultProps = {
  children: null,
}

export default withField({
  parse: e => e.target.value,
})(Select)
