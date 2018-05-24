
export const DELETE_FORM_DATA_BY_URL = 'DELETE_FORM_DATA_BY_URL'
export const DELETE_FORM_VIEW_DATA_BY_ID = 'DELETE_FORM_VIEW_DATA_BY_ID'
export const DELETE_FORM_MODEL_DATA_BY_ID = 'DELETE_FORM_MODEL_DATA_BY_ID'
export const UPDATE_FORM_FIELD_VIEW_VALUE = 'UPDATE_FORM_FIELD_CACHE_VALUE'
export const UPDATE_FORM_MODEL_DATA = 'UPDATE_FORM_MODEL_DATA'

export const deleteFormDataByURL = (url) => ({
  type: DELETE_FORM_DATA_BY_URL,
  url,
})

export const deleteFormViewDataById = (formId) => ({
  type: DELETE_FORM_VIEW_DATA_BY_ID,
  formId,
})

export const deleteFormModelDataById = (formId) => ({
  type: DELETE_FORM_MODEL_DATA_BY_ID,
  formId,
})

export const updateFieldViewValue = (formId, fieldName, value, url = '/') => ({
  type: UPDATE_FORM_FIELD_VIEW_VALUE,
  formId,
  fieldName,
  value,
  url,
})

export const updateFormModelData = (formId, modelData) => ({
  type: UPDATE_FORM_MODEL_DATA,
  formId,
  modelData,
})
