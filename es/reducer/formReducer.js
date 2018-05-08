"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prop2 = _interopRequireDefault(require("ramda/src/prop"));

var _complement2 = _interopRequireDefault(require("ramda/src/complement"));

var _pickBy2 = _interopRequireDefault(require("ramda/src/pickBy"));

var _formAction = require("../action/formAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isMatchUrl = function isMatchUrl(url) {
  return function (form) {
    return form.url === url;
  };
};

var formReducer = function formReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _formAction.DELETE_FORM_DATA_BY_URL:
      {
        var url = action.url;
        return (0, _pickBy2.default)((0, _complement2.default)(isMatchUrl(url)), state);
      }

    case _formAction.DELETE_FORM_VIEW_DATA_BY_ID:
      {
        var formId = action.formId;
        var form = state[formId];
        return _objectSpread({}, state, _defineProperty({}, formId, _objectSpread({}, form, {
          viewData: {}
        })));
      }

    case _formAction.UPDATE_FORM_MODEL_DATA:
      {
        var _formId = action.formId,
            modelData = action.modelData;
        var _form = state[_formId];
        return _objectSpread({}, state, _defineProperty({}, _formId, _objectSpread({}, _form, {
          modelData: modelData
        })));
      }

    case _formAction.UPDATE_FORM_FIELD_VIEW_VALUE:
      {
        var _formId2 = action.formId,
            _url = action.url,
            fieldName = action.fieldName,
            value = action.value;
        var _form2 = state[_formId2];
        return _objectSpread({}, state, _defineProperty({}, _formId2, _objectSpread({}, _form2, {
          url: _url,
          viewData: _objectSpread({}, (0, _prop2.default)('viewData', _form2), _defineProperty({}, fieldName, value))
        })));
      }

    default:
      return state;
  }
};

var _default = formReducer;
exports.default = _default;