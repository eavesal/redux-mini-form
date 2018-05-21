import React from 'react'
import PropTypes from 'prop-types'
import {
  withForm,
  Form,
} from 'redux-mini-form'
import InputField, {FIELD_ERROR_MSG} from './inputField'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function asyncFormValidator() {
  return (values) => sleep(1000).then(() => {
    if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      return {
        username: {
          msg: 'User does not exist',
          type: FIELD_ERROR_MSG,
        },
      }
    } else if (values.password !== 'redux-form') {
      return {
        password: {
          msg: 'Wrong password',
          type: FIELD_ERROR_MSG,
        },
      }
    }
    return {}
  })
}

const SubmitValidationForm = (props) => {
  const {onSubmit, formId} = props
  return (
    <Form onSubmit={onSubmit} formId={formId}>
      <InputField
        name='username'
        placeholder='Username'
      />
      <InputField
        name='password'
        type='password'
        placeholder='Password'
      />
      <div className='form-row'>
        <button type='submit'>
          Log In
        </button>
        <button type='button'>
          Clear Values
        </button>
      </div>
    </Form>
  )
}

SubmitValidationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
}

export default withForm({
  asyncFormValidator,
})(SubmitValidationForm)
