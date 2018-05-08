"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map2 = _interopRequireDefault(require("ramda/src/map"));

var _pickBy2 = _interopRequireDefault(require("ramda/src/pickBy"));

var _mapObjIndexed2 = _interopRequireDefault(require("ramda/src/mapObjIndexed"));

var _isEmpty2 = _interopRequireDefault(require("ramda/src/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isRequired = function isRequired(val) {
  return val && !(0, _isEmpty2.default)(val);
};

var omitUndefined = (0, _pickBy2.default)(function (val) {
  return val !== undefined;
});

var executeFieldValidators = function executeFieldValidators(validators, val) {
  for (var i = 0; i < validators.length; i += 1) {
    var _validators$i = validators[i],
        type = _validators$i.type,
        msg = _validators$i.msg,
        validator = _validators$i.validator;

    if (!validator(val)) {
      return {
        type: type,
        msg: msg
      };
    }
  }

  return undefined;
};

var executeFieldRule = function executeFieldRule(fieldRule, val) {
  if (fieldRule.required && !isRequired(val)) {
    return {
      type: 'REQUIRED'
    };
  }

  return executeFieldValidators(fieldRule.validators, val);
};

var executeFormRule = function executeFormRule(_ref, formData, fieldErrors) {
  var msg = _ref.msg,
      type = _ref.type,
      validator = _ref.validator;

  if (!validator(formData, fieldErrors)) {
    return {
      type: type,
      msg: msg
    };
  }

  return undefined;
};

var executeFieldRules = function executeFieldRules(fieldRules, formData) {
  var errors = (0, _mapObjIndexed2.default)(function (val, fieldName) {
    return executeFieldRule(fieldRules[fieldName], val);
  }, formData);
  return omitUndefined(errors);
};

var executeFormRules = function executeFormRules(formRules, formData, fieldErrors) {
  return omitUndefined((0, _map2.default)(function (formRule) {
    return executeFormRule(formRule, formData, fieldErrors);
  }, formRules));
};

var _default = function _default(fieldRules, formRules, formData) {
  var fieldErrors = executeFieldRules(fieldRules, formData);
  var formErrors = executeFormRules(formRules, formData, fieldErrors);
  return _objectSpread({}, fieldErrors, formErrors);
};

exports.default = _default;