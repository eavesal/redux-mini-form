import React from 'react'
import {withForm, SelectField, CheckboxField, TextareaField, Form} from 'redux-mini-form'
import PropTypes from 'prop-types'

import history from './history'

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const WizardFormThirdPage = (props) => {
  const {onSubmit, formId} = props
  const selectElements = [<option value='' key='default'>Select a color...</option>]

  return (
    <Form onSubmit={onSubmit} formId={formId}>
      <div className='form-row'>
        <label htmlFor='favoriteColor'>Favorite Color</label>
        <div>
          <SelectField name='favoriteColor'>
            {selectElements.concat(colors.map((val) => (
              <option value={val} key={val}>
                {val}
              </option>
            )))}
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
        <label htmlFor='note'>Notes</label>
        <div>
          <TextareaField name='notes' placeholder='Notes' />
        </div>
      </div>
      <div className='form-row'>
        <button type='button' className='previous' onClick={() => history.goBack()}>
          Previous
        </button>
        <button type='submit'>
          Submit
        </button>
      </div>
    </Form>
  )
}

WizardFormThirdPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
}

export default withForm({
})(WizardFormThirdPage)
