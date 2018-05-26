import React from 'react'
import PropTypes from 'prop-types'
import {
  withForm,
  Form,
  InputField,
  CheckboxField,
  SelectField,
  TextareaField,
} from 'redux-mini-form'
import './index.css'

const SimpleForm = ({onSubmit, formId, onReset}) => (
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
      <label htmlFor='email'>Email</label>
      <div>
        <InputField
          name='email'
          placeholder='Email'
        />
      </div>
    </div>
    <div className='form-row'>
      <label htmlFor='sex'>Sex</label>
      <div>
        <label htmlFor='sex'>
          <InputField
            name='sex'
            type='radio'
            value='male'
          />{' '}
          Male
        </label>
        <label htmlFor='sex'>
          <InputField
            name='sex'
            type='radio'
            value='female'
          />{' '}
          Female
        </label>
      </div>
    </div>
    <div className='form-row'>
      <label htmlFor='favoriteColor'>Favorite Color</label>
      <div>
        <SelectField name='favoriteColor'>
          <option />
          <option value='ff0000'>Red</option>
          <option value='00ff00'>Green</option>
          <option value='0000ff'>Blue</option>
        </SelectField>
      </div>
    </div>
    <div className='form-row'>
      <label htmlFor='employed'>Employed</label>
      <div>
        <CheckboxField
          name='employed'
        />
      </div>
    </div>
    <div className='form-row'>
      <label htmlFor='notes'>Notes</label>
      <div>
        <TextareaField name='notes' />
      </div>
    </div>
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

SimpleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
}

export default withForm()(SimpleForm)
