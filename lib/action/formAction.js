"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateFormModelData = exports.updateFieldViewValue = exports.deleteFormViewDataById = exports.deleteFormDataByURL = exports.UPDATE_FORM_MODEL_DATA = exports.UPDATE_FORM_FIELD_VIEW_VALUE = exports.DELETE_FORM_VIEW_DATA_BY_ID = exports.DELETE_FORM_DATA_BY_URL = void 0;
var DELETE_FORM_DATA_BY_URL = 'DELETE_FORM_DATA_BY_URL';
exports.DELETE_FORM_DATA_BY_URL = DELETE_FORM_DATA_BY_URL;
var DELETE_FORM_VIEW_DATA_BY_ID = 'DELETE_FORM_VIEW_DATA_BY_ID';
exports.DELETE_FORM_VIEW_DATA_BY_ID = DELETE_FORM_VIEW_DATA_BY_ID;
var UPDATE_FORM_FIELD_VIEW_VALUE = 'UPDATE_FORM_FIELD_CACHE_VALUE';
exports.UPDATE_FORM_FIELD_VIEW_VALUE = UPDATE_FORM_FIELD_VIEW_VALUE;
var UPDATE_FORM_MODEL_DATA = 'UPDATE_FORM_MODEL_DATA';
exports.UPDATE_FORM_MODEL_DATA = UPDATE_FORM_MODEL_DATA;

var deleteFormDataByURL = function deleteFormDataByURL(url) {
  return {
    type: DELETE_FORM_DATA_BY_URL,
    url: url
  };
};

exports.deleteFormDataByURL = deleteFormDataByURL;

var deleteFormViewDataById = function deleteFormViewDataById(formId) {
  return {
    type: DELETE_FORM_VIEW_DATA_BY_ID,
    formId: formId
  };
};

exports.deleteFormViewDataById = deleteFormViewDataById;

var updateFieldViewValue = function updateFieldViewValue(formId, fieldName, value) {
  var url = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
  return {
    type: UPDATE_FORM_FIELD_VIEW_VALUE,
    formId: formId,
    fieldName: fieldName,
    value: value,
    url: url
  };
};

exports.updateFieldViewValue = updateFieldViewValue;

var updateFormModelData = function updateFormModelData(formId, modelData) {
  return {
    type: UPDATE_FORM_MODEL_DATA,
    formId: formId,
    modelData: modelData
  };
};

exports.updateFormModelData = updateFormModelData;