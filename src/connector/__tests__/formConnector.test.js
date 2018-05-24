
import React from 'react'
import test from 'ava'
import {Provider} from 'react-redux'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import formConnector from '../formConnector'
import createStore from '../../store/createStore'

configure({adapter: new Adapter()})

const FORM_ID = 'FORM_ID'

function createComponent(initialState = {}) {
  const MockForm = () => null
  const Component = formConnector(MockForm)
  return mount(
    <Provider store={createStore(initialState)}>
      <Component formId={FORM_ID} />
    </Provider>,
  )
}

test('update field view value when call updateFieldViewValue', (t) => {
  const wrapper = createComponent()
  const getForm = () => wrapper.find('MockForm')

  getForm().prop('updateFieldViewValue')(FORM_ID, 'foo', 'bar', 'a.com/login')
  wrapper.update()

  t.deepEqual(getForm().prop('formViewData'), {
    foo: 'bar',
  })
})

test('update multi field view values when call updateFieldViewValue multi times', (t) => {
  const wrapper = createComponent()
  const getForm = () => wrapper.find('MockForm')

  getForm().prop('updateFieldViewValue')(FORM_ID, 'foo0', 'bar0', 'a.com/login')
  getForm().prop('updateFieldViewValue')(FORM_ID, 'foo1', 'bar1', 'a.com/login')
  wrapper.update()

  t.deepEqual(getForm().prop('formViewData'), {
    foo0: 'bar0',
    foo1: 'bar1',
  })
})

test('update form model data when call updateFormModelData', (t) => {
  const wrapper = createComponent()
  const getForm = () => wrapper.find('MockForm')

  getForm().prop('updateFormModelData')(FORM_ID, {foo: 'bar'})
  wrapper.update()

  t.deepEqual(getForm().prop('formModelData'), {
    foo: 'bar',
  })
})

test('delete form view value when call deleteFormViewDataById', (t) => {
  const wrapper = createComponent({
    form: {
      [FORM_ID]: {
        url: 'a.com/login',
        viewData: {foo: 'bar'},
        modelData: {foo: 'bar0'},
      },
    },
  })
  const getForm = () => wrapper.find('MockForm')

  getForm().prop('deleteFormViewDataById')(FORM_ID)
  wrapper.update()

  t.deepEqual(getForm().prop('formModelData'), {foo: 'bar0'})
  t.deepEqual(getForm().prop('formViewData'), {})
})

test('delete form model data when call deleteFormModelDataById', (t) => {
  const wrapper = createComponent({
    form: {
      [FORM_ID]: {
        url: 'a.com/login',
        viewData: {foo: 'bar'},
        modelData: {foo: 'bar0'},
      },
    },
  })
  const getForm = () => wrapper.find('MockForm')

  getForm().prop('deleteFormModelDataById')(FORM_ID)
  wrapper.update()

  t.deepEqual(getForm().prop('formModelData'), {})
  t.deepEqual(getForm().prop('formViewData'), {foo: 'bar'})
})
