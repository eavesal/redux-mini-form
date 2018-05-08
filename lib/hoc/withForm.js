"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keys2 = _interopRequireDefault(require("ramda/src/keys"));

var _trim2 = _interopRequireDefault(require("ramda/src/trim"));

var _identity2 = _interopRequireDefault(require("ramda/src/identity"));

var _isEmpty2 = _interopRequireDefault(require("ramda/src/isEmpty"));

var _omit2 = _interopRequireDefault(require("ramda/src/omit"));

var _mapObjIndexed2 = _interopRequireDefault(require("ramda/src/mapObjIndexed"));

var _compose2 = _interopRequireDefault(require("ramda/src/compose"));

var _pickBy2 = _interopRequireDefault(require("ramda/src/pickBy"));

var _lt2 = _interopRequireDefault(require("ramda/src/lt"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formConnector = _interopRequireDefault(require("../connector/formConnector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withForm = function withForm() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var _options$formValidato = options.formValidator,
        formValidator = _options$formValidato === void 0 ? function () {
      return function () {
        return {};
      };
    } : _options$formValidato,
        _options$defaultValue = options.defaultValues,
        getDefaultValues = _options$defaultValue === void 0 ? function () {
      return {};
    } : _options$defaultValue,
        _options$disableFormC = options.disableFormCache,
        disableFormCache = _options$disableFormC === void 0 ? false : _options$disableFormC,
        asyncFormValidator = options.asyncFormValidator;

    var WithForm =
    /*#__PURE__*/
    function (_React$Component) {
      function WithForm(props) {
        var _this;

        _classCallCheck(this, WithForm);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(WithForm).call(this, props));

        _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getFormData", function () {
          var _this$props = _this.props,
              formModelData = _this$props.formModelData,
              formViewData = _this$props.formViewData;
          return _objectSpread({}, _this.getDefaultValues(), formModelData, formViewData);
        }), "getDefaultValues", function () {
          return _objectSpread({}, getDefaultValues ? getDefaultValues(_this.props) : {});
        }), "getDefaultValue", function (fieldName) {
          var defaultValue = _this.getDefaultValues()[fieldName];

          return defaultValue === undefined ? '' : defaultValue;
        }), "getRegisteredFormDataWithDefaultValues", function () {
          var formData = _this.getFormData();

          var defaultValues = _this.getDefaultValues();

          var pickFieldsThatGreaterThan0 = (0, _pickBy2.default)((0, _lt2.default)(0));
          var mapRegisteredFormDataWithDefaultValues = (0, _mapObjIndexed2.default)(function (count, fieldName) {
            if (formData[fieldName] === undefined) {
              return defaultValues[fieldName] || '';
            }

            return formData[fieldName];
          });
          return (0, _compose2.default)(mapRegisteredFormDataWithDefaultValues, pickFieldsThatGreaterThan0)(_this.fields);
        }), "register", function (fieldName) {
          if (typeof _this.fields[fieldName] === 'number') {
            _this.fields[fieldName] += 1;
          } else {
            _this.fields[fieldName] = 1;
          }
        }), "unregister", function (fieldName) {
          _this.fields[fieldName] -= 1;
        }), "handleChange", function (fieldName, fieldValue) {
          var errors = _this.state.errors;

          _this.props.updateFieldViewValue(_this.props.formId, fieldName, fieldValue);

          _this.setState({
            errors: (0, _omit2.default)([fieldName], errors)
          });
        }), "handleValidationErrors", function (formData, errors) {
          var onValidationFailed = _this.props.onValidationFailed;

          if (errors && !(0, _isEmpty2.default)(errors)) {
            onValidationFailed(errors);

            _this.setState({
              errors: errors
            });
          } else {
            _this.props.updateFormModelData(_this.props.formId, formData);

            _this.props.onSubmit(formData);

            _this.props.deleteFormViewDataById(_this.props.formId);
          }
        }), "handleSubmit", function () {
          var shouldTrim = function shouldTrim(fieldName, fieldValue) {
            return typeof fieldValue === 'string' && !/.*password.*/i.test(fieldName);
          };

          var formDataWithDefaultValue = _this.getRegisteredFormDataWithDefaultValues();

          var formDataWithTrimmedValue = (0, _mapObjIndexed2.default)(function (fieldValue, fieldName) {
            return shouldTrim(fieldName, fieldValue) ? (0, _trim2.default)(fieldValue) : fieldValue;
          }, formDataWithDefaultValue);
          var _this$props2 = _this.props,
              onAsyncValidationStart = _this$props2.onAsyncValidationStart,
              onAsyncValidationEnd = _this$props2.onAsyncValidationEnd;
          var errors = formValidator(_this.props)(formDataWithTrimmedValue);

          if (errors && (0, _isEmpty2.default)(errors) && typeof asyncFormValidator === 'function') {
            onAsyncValidationStart();
            asyncFormValidator(_this.props)(formDataWithTrimmedValue, errors).then(function (asyncErrors) {
              return _this.handleValidationErrors(formDataWithTrimmedValue, _objectSpread({}, errors, asyncErrors));
            }).then(onAsyncValidationEnd).catch(onAsyncValidationEnd);
          } else {
            _this.handleValidationErrors(formDataWithTrimmedValue, errors);
          }
        }), "clearError", function (fieldName) {
          var clearValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var errors = _this.state.errors;
          var error = errors[fieldName];
          var hasError = error && !(0, _isEmpty2.default)(error);

          if (hasError) {
            if (clearValue) {
              _this.props.updateFieldViewValue(_this.props.formId, fieldName, _this.getDefaultValue(fieldName));
            }

            _this.setState({
              errors: (0, _omit2.default)(fieldName, errors)
            });
          }
        });

        _this.state = {
          errors: {}
        };
        _this.fields = {};
        return _this;
      }

      _createClass(WithForm, [{
        key: "getChildContext",
        value: function getChildContext() {
          var errors = this.state.errors;
          return {
            form: {
              onChange: this.handleChange,
              clearError: this.clearError,
              register: this.register,
              unregister: this.unregister,
              getDefaultValue: this.getDefaultValue,
              errors: errors,
              formData: this.getFormData()
            }
          };
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (disableFormCache) {
            this.props.deleteFormViewDataById(this.props.formId);
          }
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(Component, _extends({
            formId: this.props.formId,
            formData: this.getFormData(),
            onSubmit: this.handleSubmit,
            onChange: this.handleChange
          }, (0, _omit2.default)((0, _keys2.default)(WithForm.propTypes), this.props)));
        }
      }]);

      _inherits(WithForm, _React$Component);

      return WithForm;
    }(_react.default.Component);

    _defineProperty(_defineProperty(_defineProperty(WithForm, "propTypes", {
      formId: _propTypes.default.string.isRequired,
      onSubmit: _propTypes.default.func.isRequired,
      formModelData: _propTypes.default.object,
      formViewData: _propTypes.default.object,
      deleteFormViewDataById: _propTypes.default.func.isRequired,
      updateFieldViewValue: _propTypes.default.func.isRequired,
      updateFormModelData: _propTypes.default.func.isRequired,
      onValidationFailed: _propTypes.default.func,
      onAsyncValidationStart: _propTypes.default.func,
      onAsyncValidationEnd: _propTypes.default.func
    }), "childContextTypes", {
      form: _propTypes.default.object
    }), "defaultProps", {
      onValidationFailed: _identity2.default,
      onAsyncValidationStart: _identity2.default,
      onAsyncValidationEnd: _identity2.default,
      formModelData: {},
      formViewData: {}
    });

    return (0, _formConnector.default)(WithForm);
  };
};

var _default = withForm;
exports.default = _default;