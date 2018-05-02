
import {
  DELETE_FORM_VIEW_VALUE_BY_URL,
  DELETE_FORM_VIEW_VALUE_BY_ID,
  UPDATE_FORM_FIELD_VIEW_VALUE
} from '../action/formAction';

const formReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FORM_VIEW_VALUE_BY_URL: {
      const {url} = action;
      return _.pickBy(state, (form) => form.url !== url);
    }
    case DELETE_FORM_VIEW_VALUE_BY_ID: {
      const {formId} = action;
      return _.pickBy(state, (form, id) => id !== formId);
    }
    case UPDATE_FORM_FIELD_VIEW_VALUE: {
      const {formId, url, fieldName, value} = action;
      const form = state[formId];

      return {
        ...state,
        [formId]: {
          ...form,
          url,
          data: {
            ..._.get(form, 'data'),
            [fieldName]: value
          }
        }
      };
    }
    default:
      return state;
  }
};

export default formCaches;
