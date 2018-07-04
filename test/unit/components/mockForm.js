import React from 'react'
import PropTypes from 'prop-types'

const MockForm = ({ formId, onSubmit, children }) => (
  <form id={formId} onSubmit={onSubmit}>
    {children}
  </form>
)

MockForm.propTypes = {
  formId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
}

MockForm.defaultProps = {
  children: null,
}

export default MockForm
