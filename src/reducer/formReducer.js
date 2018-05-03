import pickBy from 'ramda/src/pickBy'
import complement from 'ramda/src/complement'
import prop from 'ramda/src/prop'
import {
  DELETE_FORM_VIEW_VALUE_BY_URL,
  DELETE_FORM_VIEW_VALUE_BY_ID,
  UPDATE_FORM_FIELD_VIEW_VALUE,
} from '../action/formAction'

const isMatchUrl = (url) => (form) => form.url === url
const isMatchId = (formId) => (form, id) => id === formId

const formReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FORM_VIEW_VALUE_BY_URL: {
      const {url} = action
      return pickBy(complement(isMatchUrl(url)), state)
    }
    case DELETE_FORM_VIEW_VALUE_BY_ID: {
      const {formId} = action
      return pickBy(complement(isMatchId(formId)), state)
    }
    case UPDATE_FORM_FIELD_VIEW_VALUE: {
      const {
        formId,
        url,
        fieldName,
        value,
      } = action
      const form = state[formId]

      return {
        ...state,
        [formId]: {
          ...form,
          url,
          viewData: {
            ...prop('data', form),
            [fieldName]: value,
          },
        },
      }
    }
    default:
      return state
  }
}

export default formReducer
