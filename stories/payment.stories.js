import React from 'react'
import PropTypes from 'prop-types'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import styled from 'styled-components'
import 'normalize.css'

import Form from '../src/component/form'
import Input from '../src/component/field/input'
import withForm from '../src/hoc/withForm'
import createStore from '../src/store/createStore'
import reduxDecorator from './lib/reduxDecorator'
import executeValidators from '../src/utils/executeValidators'

const PAYMENT_FORM_ID = 'PAYMENT_FORM_ID'
const store = createStore()

const StyledInput = styled(Input)`
flex: 1 1;
margin-top: 10px;

& input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
`

const StyledNameInput = StyledInput.extend`
  &:first-child {
    padding-right: 20px;
  }

  &:last-child {
    padding-left: 20px;
  }
`

const PaymentNamesContainer = styled.div`
  display: flex;
`

const SubmitButton = styled.button`
  color: white;
  flex: 1 1;
  box-sizing: border-box;
  width: 100%;
  height: 40px
  margin-top: 10px;
  background: rgb(21,137,201);
  border: none;
  border-radius: 4px;
`

const PaymentForm = (props) => (
  <Form {...props}>
    <PaymentNamesContainer>
      <StyledNameInput name='firstName' placeholder='First Name' />
      <StyledNameInput name='lastName' placeholder='Last Name' />
    </PaymentNamesContainer>
    <StyledInput name='email' placeholder='E-mail*' type='email' />
    <SubmitButton type='submit'>Continue</SubmitButton>
  </Form>
)

const fieldRules = {
  firstName: {
    required: true,
  },
  lastName: {
    required: true,
  },
  email: {
    required: true,
    validators: [{
      type: 'FIELD_ERROR',
      msg: 'Please correct your email',
      validator: (val) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val),
    }],
  },
}

const formValidator = () => (formData) => executeValidators(fieldRules, {}, formData)

const StyledPaymentForm = withForm({
  formValidator,
})(styled(PaymentForm)`
  width: 480px;
  border: 1px solid #ccc;
  border-radius: 3px;
`)

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

storiesOf('payment', module)
  .addDecorator(centered)
  .addDecorator(reduxDecorator(store))
  .add('default', () => (
    <StyledPaymentForm
      onSubmit={action('payment-form-submit')}
      formId={PAYMENT_FORM_ID}
    />))
