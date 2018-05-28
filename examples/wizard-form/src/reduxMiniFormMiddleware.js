
import {UPDATE_FORM_FIELD_VIEW_VALUE, deleteFormDataByURL} from 'redux-mini-form'
import {CALL_HISTORY_METHOD} from 'react-router-redux'

export default (store) => (next) => (action) => {
  if (action.type === UPDATE_FORM_FIELD_VIEW_VALUE) {
    return next({
      ...action,
      url: window.location.pathname,
    })
  }
  if (action.type === CALL_HISTORY_METHOD) {
    store.dispatch(deleteFormDataByURL(action.payload.args[0]))
  }
  return next(action)
}
