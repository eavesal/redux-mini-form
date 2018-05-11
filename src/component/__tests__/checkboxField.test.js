import React from 'react'
import test from 'ava'
import {Provider} from 'react-redux'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

import CheckboxField from '../checkboxField'
import MockForm from '../../../test/unit/components/mockForm'
import withForm from '../../hoc/withForm'
import createStore from '../../store/createStore'

configure({adapter: new Adapter()})

function createComponent(initialState = {}, formOptions = {}, formProps = {}) {
  const ConnectedForm = withForm(formOptions)(MockForm)
  return mount(
    <Provider store={createStore(initialState)}>
      <ConnectedForm formId='TEST_FORM_ID' onSubmit={sinon.stub()} {...formProps}>
        <CheckboxField name='foo' />
      </ConnectedForm>
    </Provider>,
  )
}

test('should switch to true when click it and initial value is false', (t) => {
  const wrapper = createComponent({
    form: {
      TEST_FORM_ID: {viewData: {foo: false}},
    },
  })

  wrapper.find('input').simulate('change', {target: {checked: true}})

  t.true(wrapper.find('input').prop('checked'))
})

test('should switch to false when click it and initial value is true', (t) => {
  const wrapper = createComponent({
    form: {
      TEST_FORM_ID: {viewData: {foo: true}},
    },
  })

  wrapper.find('input').simulate('change', {target: {checked: false}})

  t.false(wrapper.find('input').prop('checked'))
})
