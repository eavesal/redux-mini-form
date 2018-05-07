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

const PaymentForm = (props) => (
  <Form {...props}>
    <PaymentNamesContainer>
      <StyledNameInput name='firstName' placeholder='First Name' />
      <StyledNameInput name='lastName' placeholder='Last Name' />
    </PaymentNamesContainer>
    <StyledInput name='email' placeholder='E-mail*' type='email' />
  </Form>
)
const StyledPaymentForm = withForm()(styled(PaymentForm)`
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
