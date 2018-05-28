import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {push as pushAction} from 'react-router-redux'

export default function withRouter(Component) {
  function WithRouter({push}) {
    return (
      <Component push={push} />
    )
  }

  WithRouter.propTypes = {
    push: PropTypes.func.isRequired,
  }

  return connect(() => ({}), {
    push: pushAction,
  })(WithRouter)
}
