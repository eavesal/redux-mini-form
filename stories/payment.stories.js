import React from 'react'
import PropTypes from 'prop-types'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import styled from 'styled-components'
import 'normalize.css'

import Form from '../src/component/form'

const PaymentForm = (props) => (
  <Form {...props}>
    Hello, world
  </Form>
)
const StyledPaymentForm = styled(PaymentForm)`
  width: 480px;
  border: 1px solid #ccc;
  border-radius: 3px;
`

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

storiesOf('payment', module)
  .addDecorator(centered)
  .add('default', () => <StyledPaymentForm onSubmit={action('payment-form-submit')} />)
