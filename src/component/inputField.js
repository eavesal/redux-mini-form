import React from 'react'
import PropTypes from 'prop-types'
import {omit} from 'ramda'

import withField, {fieldPropTypes} from '../hoc/withField'

const Input = (props) => <input {...omit(['error', 'clearError'], props)} />

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
