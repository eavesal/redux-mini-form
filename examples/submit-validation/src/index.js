import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Provider, connect} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {formReducer, getFormViewData} from 'redux-mini-form'
import Spinner from 'react-spinkit'

import './index.css'
import SubmitValidationForm from './submitValidationForm'
import Modal from './modal'

const reducer = combineReducers({
  form: formReducer,
})
const store = createStore(reducer)

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showSpinner: false,
    }
  }

  handleAsyncValidationStart = () => {
    this.setState({
      showSpinner: true,
    })
  }

  handleAsyncValidationEnd = () => {
    this.setState({
      showSpinner: false,
    })
  }

  render() {
    const {formViewData} = this.props
    const {showSpinner} = this.state

    return (
      <div>
        {showSpinner &&
          <Modal>
            <Spinner name='double-bounce' color='red' />
          </Modal>
        }
        <h1>Form</h1>
        <SubmitValidationForm
          formId='SIMPLE_FORM'
          onSubmit={() => null}
          onAsyncValidationStart={this.handleAsyncValidationStart}
          onAsyncValidationEnd={this.handleAsyncValidationEnd}
        />
        <h1>Values</h1>
        <code>{JSON.stringify(formViewData)}</code>
      </div>
    )
  }
}

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
