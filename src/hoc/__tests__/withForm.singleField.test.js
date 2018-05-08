import React from 'react'
import PropTypes from 'prop-types'
import test from 'ava'
import {Provider} from 'react-redux'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

import withForm from '../withForm'
import withField from '../withField'
import createStore from '../../store/createStore'

configure({adapter: new Adapter()})

const FORM_ID = 'FORM_ID'

const MockForm = ({formId, onSubmit, children}) => (
  <form id={formId} onSubmit={onSubmit}>{children}</form>
)

MockForm.propTypes = {
  formId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
}

MockForm.defaultProps = {
  children: null,
}

const MockInput = ({value, name}) => (
  <input type='text' value={value} name={name} />
)

MockInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

function createComponent(initialState = {}, formOptions = {}, formProps = {}, fieldOptions = {}) {
  const ConnectedForm = withForm(formOptions)(MockForm)
  const ConnectedField = withField(fieldOptions)(MockInput)
  return mount(
    <Provider store={createStore(initialState)}>
      <ConnectedForm formId={FORM_ID} {...formProps}>
        <ConnectedField name='foo' />
      </ConnectedForm>
    </Provider>,
  )
}

test('should call onSubmit when submit the form without validation error', (t) => {
  const onSubmitStub = sinon.stub()
  const onValidationFailedStub = sinon.stub()
  const wrapper = createComponent({}, {
    formValidator: () => () => ({}),
  }, {
    onSubmit: onSubmitStub,
  })

  wrapper.find('form').simulate('submit')

  t.truthy(onSubmitStub.called)
  t.falsy(onValidationFailedStub.called)
})


test('should not call onSubmit when submit the form with validation error', (t) => {
  const onSubmitStub = sinon.stub()
  const onValidationFailedStub = sinon.stub()
  const wrapper = createComponent({}, {
    formValidator: () => () => ({foo: {msg: 'foo should always be a number'}}),
  }, {
    onSubmit: onSubmitStub,
  })

  wrapper.find('form').simulate('submit')

  t.falsy(onSubmitStub.called)
  t.falsy(onValidationFailedStub.calledWith({
    foo: {msg: 'foo should always be a number'},
  }))
})
