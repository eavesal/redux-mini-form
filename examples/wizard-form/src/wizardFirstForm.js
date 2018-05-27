import React from 'react'
import {withForm, InputField} from 'redux-mini-form'
import PropTypes from 'prop-types'

const WizardFirstForm = (props) => {
  const {onSubmit} = props
  return (
    <form onSubmit={onSubmit}>
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
    </form>
  )
}

WizardFirstForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default withForm({
})(WizardFirstForm)
