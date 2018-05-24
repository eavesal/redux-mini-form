import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Provider, connect} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {formReducer, getFormViewData} from 'redux-mini-form'

import './index.css'
import SimpleForm from './simpleForm'

const reducer = combineReducers({
  form: formReducer,
})
const store = createStore(reducer)

const App = ({formViewData}) => (
  <div>
    <h1>Form</h1>
    <SimpleForm formId='SIMPLE_FORM' onSubmit={() => null} />
    <h1>Values</h1>
    <code>{JSON.stringify(formViewData)}</code>
  </div>
)

App.propTypes = {
  formViewData: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  formViewData: getFormViewData(state, 'SIMPLE_FORM'),
})
const Container = connect(mapStateToProps, () => ({}))(App)

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root'),
)
