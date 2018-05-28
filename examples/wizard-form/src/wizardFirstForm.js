import React from 'react'
import {withForm, InputField, Form} from 'redux-mini-form'
import PropTypes from 'prop-types'

const WizardFirstForm = (props) => {
  const {onSubmit, formId} = props
  return (
    <Form onSubmit={onSubmit} formId={formId}>
      <div className='form-row'>
        <label htmlFor='firstName'>First Name</label>
        <div>
          <InputField
            name='firstName'
            placeholder='First Name'
          />
        </div>
      </div>
      <div className='form-row'>
        <label htmlFor='lastName'>Last Name</label>
        <div>
          <InputField
            name='lastName'
            placeholder='Last Name'
          />
        </div>
      </div>
      <div className='form-row'>
        <button type='submit' className='next'>
          Next
        </button>
      </div>
    </Form>
  )
}

WizardFirstForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
}

export default withForm({
})(WizardFirstForm)
