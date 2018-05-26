import React from 'react'
import PropTypes from 'prop-types'
import {withForm, executeValidators, Form} from 'redux-mini-form'

import InputField, {FIELD_ERROR_MSG} from './inputField'

const fieldRules = {
  username: {
    required: true,
    validators: [{
      type: FIELD_ERROR_MSG,
      msg: 'Must be 15 characters or less',
      validator: (val) => val.length <= 15,
    }],
  },
  email: {
    required: true,
    validators: [{
      type: FIELD_ERROR_MSG,
      msg: 'Invalid email address',
      validator: (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val),
    }],
  },
  age: {
    required: true,
    validators: [{
      type: FIELD_ERROR_MSG,
      msg: 'Must be a number',
      validator: (val) => !Number.isNaN(Number(val.age)),
    }, {
      type: FIELD_ERROR_MSG,
      msg: 'Sorry, you must be at least 18 years old',
      validator: (val) => Number(val.age) >= 18,
    }],
  },
}

const formValidator = () => (formData) => executeValidators(fieldRules, {}, formData)

const SyncValidationForm = ({onSubmit, formId, onReset}) => (
  <Form onSubmit={onSubmit} formId={formId}>
    <InputField
      name='username'
      placeholder='Username'
    />
    <InputField name='email' type='email' placeholder='Email' />
    <InputField name='age' type='number' placeholder='Age' />
    <div className='form-row'>
      <button type='submit'>
        Submit
      </button>
      <button type='button' onClick={onReset}>
        Clear Values
      </button>
    </div>
  </Form>
)

SyncValidationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
}

export default withForm({
  formValidator,
})(SyncValidationForm)
