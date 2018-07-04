import { createStore, combineReducers } from 'redux'

import formReducer from '../reducer/formReducer'

export default initialState =>
  createStore(
    combineReducers({
      form: formReducer,
    }),
    initialState,
  )
