import React from 'react'
import test from 'ava'
import {Provider} from 'react-redux'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

import RadioInputField from '../radioInputField'
import MockForm from '../../../test/unit/components/mockForm'
import withForm from '../../hoc/withForm'
import createStore from '../../store/createStore'

configure({adapter: new Adapter()})

function createComponent(initialState = {}, formOptions = {}, formProps = {}) {
  const ConnectedForm = withForm(formOptions)(MockForm)
  return mount(
    <Provider store={createStore(initialState)}>
      <ConnectedForm formId='TEST_FORM_ID' onSubmit={sinon.stub()} {...formProps}>
        <label htmlFor='sex'>
          <RadioInputField
            name='sex'
            option='male'
          />
          Male
        </label>
        <label htmlFor='sex'>
          <RadioInputField
            name='sex'
            option='female'
          />
          Female
        </label>
      </ConnectedForm>
    </Provider>,
  )
}

test('should check female when has initial value female', (t) => {
  const wrapper = createComponent({
    form: {
      TEST_FORM_ID: {viewData: {sex: 'female'}},
    },
  })

  t.true(wrapper.find('input').at(1).prop('checked'))
})

test('should switch to true when click it and initial value is false', (t) => {
  const wrapper = createComponent({
    form: {
      TEST_FORM_ID: {viewData: {sex: 'male'}},
    },
  })

  wrapper.find('input').at(1).simulate('change', {target: {checked: true}})

  t.true(wrapper.find('input').at(1).prop('checked'))
})
