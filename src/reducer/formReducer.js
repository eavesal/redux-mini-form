import {pickBy, complement, prop} from 'ramda'
import {
  DELETE_FORM_DATA_BY_URL,
  DELETE_FORM_VIEW_DATA_BY_ID,
  DELETE_FORM_MODEL_DATA_BY_ID,
  UPDATE_FORM_FIELD_VIEW_VALUE,
  UPDATE_FORM_MODEL_DATA,
} from '../action/formAction'

const isMatchUrl = (url) => (form) => form.url === url

const formReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FORM_DATA_BY_URL: {
      const {url} = action
      return pickBy(complement(isMatchUrl(url)), state)
    }
    case DELETE_FORM_VIEW_DATA_BY_ID: {
      const {formId} = action
      const form = state[formId]
      return {
        ...state,
        [formId]: {
          ...form,
          viewData: {},
        },
      }
    }
    case DELETE_FORM_MODEL_DATA_BY_ID: {
      const {formId} = action
      const form = state[formId]
      return {
        ...state,
        [formId]: {
          ...form,
          modelData: {},
        },
      }
    }
    case UPDATE_FORM_MODEL_DATA: {
      const {
        formId,
        modelData,
      } = action
      const form = state[formId]
      return {
        ...state,
        [formId]: {
          ...form,
          modelData,
        },
      }
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
            ...prop('viewData', form),
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
