
import React from 'react'
import PropTypes from 'prop-types'
import {withForm, InputField} from 'redux-mini-form'

import history from './history'

const WizardFormSecondPage = (props) => {
  const {onSubmit} = props
  return (
    <form onSubmit={onSubmit}>
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
        <button type='button' className='previous' onClick={() => history.goBack()}>
          Previous
        </button>
        <button type='submit' className='next'>
          Next
        </button>
      </div>
    </form>
  )
}

WizardFormSecondPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default withForm({
})(WizardFormSecondPage)
