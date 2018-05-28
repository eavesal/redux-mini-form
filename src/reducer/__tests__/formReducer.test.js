import test from 'ava'
import formReducer from '../formReducer'
import {
  deleteFormViewDataByURL,
  deleteFormModelDataByURL,
} from '../../action/formAction'

test('should only delete form view data by url when call this action', (t) => {
  const initialState = {
    SECOND_FORM: {
      url: '/second',
      viewData: {foo: 'bar0'},
      modelData: {foo: 'bar1'},
    },
    FIRST_FORM: {
      url: '/first',
    },
  }

  const state = formReducer(initialState, deleteFormViewDataByURL('/second'))

  t.deepEqual(state, {
    SECOND_FORM: {
      url: '/second',
      modelData: {foo: 'bar1'},
      viewData: {},
    },
    FIRST_FORM: {
      url: '/first',
    },
  })
})

test('should only delete form model data by url when call this action', (t) => {
  const initialState = {
    SECOND_FORM: {
      url: '/second',
      viewData: {foo: 'bar0'},
      modelData: {foo: 'bar1'},
    },
    FIRST_FORM: {
      url: '/first',
    },
  }

  const state = formReducer(initialState, deleteFormModelDataByURL('/second'))

  t.deepEqual(state, {
    SECOND_FORM: {
      url: '/second',
      viewData: {foo: 'bar0'},
      modelData: {},
    },
    FIRST_FORM: {
      url: '/first',
    },
  })
})
