import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Provider, connect} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {formReducer, getFormViewData, getFormModelData} from 'redux-mini-form'
import {Router, Route} from 'react-router'

import './index.css'
import history from './history'
import WizardFirstForm from './wizardFirstForm'
import WizardSecondForm from './wizardSecondForm'
import WizardThirdForm from './wizardThirdForm'

const reducer = combineReducers({
  form: formReducer,
})
const store = createStore(reducer)

const FIRST_FORM = 'FIRST_FORM'
const SECOND_FORM = 'SECOND_FORM'
const THIRD_FORM = 'THIRD_FORM'

const WrappedWizardFirstForm = () => <WizardFirstForm onSubmit={() => history.push('/second')} formId={FIRST_FORM} />
const WrappedWizardSecondForm = () => <WizardSecondForm onSubmit={() => history.push('/third')} formId={SECOND_FORM} />
const WrappedWizardThirdForm = () => <WizardThirdForm onSubmit={() => null} formId={THIRD_FORM} />

const App = ({
  firstFormViewData,
  secondFormViewData,
  thirdFormViewData,
  firstFormModelData,
  secondFormModelData,
  thirdFormModelData,
}) => (
  <div>
    <h1>Form</h1>
    <Router history={history}>
      <div>
        <Route exact path='/' component={WrappedWizardFirstForm} />
        <Route path='/second' component={WrappedWizardSecondForm} />
        <Route path='/third' component={WrappedWizardThirdForm} />
      </div>
    </Router>
    <h1>Values</h1>
    <table>
      <tbody>
        <tr>
          <th>Forms</th>
          <th>View Data</th>
          <th>Model Data</th>
        </tr>
        <tr>
          <td>First</td>
          <td><code>{JSON.stringify(firstFormViewData)}</code></td>
          <td><code>{JSON.stringify(firstFormModelData)}</code></td>
        </tr>
        <tr>
          <td>Second</td>
          <td><code>{JSON.stringify(secondFormViewData)}</code></td>
          <td><code>{JSON.stringify(secondFormModelData)}</code></td>
        </tr>
        <tr>
          <td>Third</td>
          <td><code>{JSON.stringify(thirdFormViewData)}</code></td>
          <td><code>{JSON.stringify(thirdFormModelData)}</code></td>
        </tr>
      </tbody>
    </table>
  </div>
)

App.propTypes = {
  firstFormViewData: PropTypes.object.isRequired,
  secondFormViewData: PropTypes.object.isRequired,
  thirdFormViewData: PropTypes.object.isRequired,
  firstFormModelData: PropTypes.object.isRequired,
  secondFormModelData: PropTypes.object.isRequired,
  thirdFormModelData: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  firstFormViewData: getFormViewData(state, FIRST_FORM),
  secondFormViewData: getFormViewData(state, SECOND_FORM),
  thirdFormViewData: getFormViewData(state, THIRD_FORM),
  firstFormModelData: getFormModelData(state, FIRST_FORM),
  secondFormModelData: getFormModelData(state, SECOND_FORM),
  thirdFormModelData: getFormModelData(state, THIRD_FORM),
})
const Container = connect(mapStateToProps, () => ({}))(App)

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root'),
)
