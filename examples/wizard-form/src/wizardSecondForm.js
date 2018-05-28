
import React from 'react'
import PropTypes from 'prop-types'
import {withForm, InputField, Form, RadioInputField} from 'redux-mini-form'

import history from './history'

const WizardFormSecondPage = (props) => {
  const {onSubmit, formId} = props
  return (
    <Form onSubmit={onSubmit} formId={formId}>
      <div className='form-row'>
        <label htmlFor='email'>E Mail</label>
        <div>
          <InputField
            name='email'
            type='email'
            placeholder='Email'
          />
        </div>
      </div>
      <div className='form-row'>
        <label htmlFor='sex'>Sex</label>
        <div>
          <label htmlFor='sex'>
            <RadioInputField
              name='sex'
              type='radio'
              option='male'
            />{' '}
            Male
          </label>
          <label htmlFor='sex'>
            <RadioInputField
              name='sex'
              type='radio'
              option='female'
            />{' '}
            Female
          </label>
        </div>
      </div>
      <div className='form-row'>
        <button type='button' className='previous' onClick={() => history.goBack()}>
          Previous
        </button>
        <button type='submit' className='next'>
          Next
        </button>
      </div>
    </Form>
  )
}

WizardFormSecondPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
}

export default withForm({
})(WizardFormSecondPage)
