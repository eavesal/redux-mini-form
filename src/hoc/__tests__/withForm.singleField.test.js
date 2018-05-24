import React from 'react'
import test from 'ava'
import {Provider} from 'react-redux'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

import withForm from '../withForm'
import createStore from '../../store/createStore'
import MockForm from '../../../test/unit/components/mockForm'
import InputField from '../../component/inputField'

configure({adapter: new Adapter()})

const FORM_ID = 'FORM_ID'

function createComponent(initialState = {}, formOptions = {}, formProps = {}) {
  const ConnectedForm = withForm(formOptions)(MockForm)
  return mount(
    <Provider store={createStore(initialState)}>
      <ConnectedForm formId={FORM_ID} {...formProps}>
        <InputField name='foo' />
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

test('should call onAsyncValidationStart '
  + 'function when have async validation and validation failed', (t) => {
  const onSubmitStub = sinon.stub()
  const onAsyncValidationStartStub = sinon.stub()
  const onAsyncValidationEndStub = sinon.stub()
  const asyncFormValidatorStub = sinon.stub()
  const promise = Promise.resolve()
  asyncFormValidatorStub.returns(promise)

  const wrapper = createComponent({}, {
    asyncFormValidator: () => asyncFormValidatorStub,
  }, {
    onSubmit: onSubmitStub,
    onAsyncValidationStart: onAsyncValidationStartStub,
    onAsyncValidationEnd: onAsyncValidationEndStub,
  })

  wrapper.find('form').simulate('submit')

  t.truthy(asyncFormValidatorStub.called)
  return promise.then(() => {
    t.truthy(onAsyncValidationStartStub.called)
  })
})

test('should reset form view data when call reset on child component', (t) => {
  const onSubmitStub = sinon.stub()
  const wrapper = createComponent({
    form: {
      [FORM_ID]: {
        url: 'a.com/login',
        viewData: {foo: 'bar'},
        modelData: {foo: 'bar0'},
      },
    },
  }, {
    formValidator: () => () => ({}),
  }, {
    onSubmit: onSubmitStub,
  })

  wrapper.find('MockForm').prop('onReset')()
  wrapper.update()

  t.deepEqual(wrapper.find('MockForm').prop('formData'), {
    foo: 'bar0',
  })
})

test('should reset form view data and model data when call reset with true on child component', (t) => {
  const onSubmitStub = sinon.stub()
  const wrapper = createComponent({
    form: {
      [FORM_ID]: {
        url: 'a.com/login',
        viewData: {foo: 'bar'},
        modelData: {foo: 'bar0'},
      },
    },
  }, {
    formValidator: () => () => ({}),
  }, {
    onSubmit: onSubmitStub,
  })

  wrapper.find('MockForm').prop('onReset')(true)
  wrapper.update()

  t.deepEqual(wrapper.find('MockForm').prop('formData'), {})
})
