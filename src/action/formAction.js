
export const DELETE_FORM_VIEW_VALUE_BY_URL = 'DELETE_FORM_VIEW_VALUE_BY_URL'
export const DELETE_FORM_VIEW_VALUE_BY_ID = 'DELETE_FORM_VIEW_VALUE_BY_ID'
export const UPDATE_FORM_FIELD_VIEW_VALUE = 'UPDATE_FORM_FIELD_CACHE_VALUE'

export const deleteFormViewValueByURL = (url) => ({
  type: DELETE_FORM_VIEW_VALUE_BY_URL,
  url,
})

export const deleteFormViewValueById = (formId) => ({
  type: DELETE_FORM_VIEW_VALUE_BY_ID,
  formId,
})

export const updateFieldViewValue = (formId, fieldName, value, url = '/') => ({
  type: UPDATE_FORM_FIELD_VIEW_VALUE,
  formId,
  fieldName,
  value,
  url,
})
