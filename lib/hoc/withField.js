"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.fieldPropTypes = void 0;

var _omit2 = _interopRequireDefault(require("ramda/src/omit"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withField = function withField() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? function (value) {
    return value;
  } : _ref$format,
      _ref$parse = _ref.parse,
      parse = _ref$parse === void 0 ? function (value) {
    return value;
  } : _ref$parse;

  return function (Input) {
    var WithField =
    /*#__PURE__*/
    function (_React$Component) {
      function WithField() {
        var _getPrototypeOf2;

        var _temp, _this;

        _classCallCheck(this, WithField);

        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithField)).call.apply(_getPrototypeOf2, [this].concat(_args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function () {
          var name = _this.props.name;
          var onChange = _this.context.form.onChange;
          var value = parse.apply(void 0, arguments);
          onChange(name, value);
        }), _temp));
      }

      _createClass(WithField, [{
        key: "componentWillMount",
        value: function componentWillMount() {
          var name = this.props.name;
          this.context.form.register(name);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var name = this.props.name;
          this.context.form.unregister(name);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$context$form = this.context.form,
              formData = _this$context$form.formData,
              errors = _this$context$form.errors,
              _clearError = _this$context$form.clearError,
              getDefaultValue = _this$context$form.getDefaultValue;

          var _this$props = this.props,
              name = _this$props.name,
              restProps = _objectWithoutProperties(_this$props, ["name"]);

          var value = formData[name] === undefined ? getDefaultValue(name) : formData[name];
          var error = errors[name];
          return _react.default.createElement(Input, _extends({
            onChange: this.handleChange,
            clearError: function clearError() {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              return _clearError.apply(void 0, [name].concat(args));
            },
            value: format(value),
            name: name,
            error: error
          }, (0, _omit2.default)(['defaultValue', 'onChange'], restProps)));
        }
      }]);

      _inherits(WithField, _React$Component);

      return WithField;
    }(_react.default.Component);

    _defineProperty(_defineProperty(WithField, "propTypes", {
      name: _propTypes.default.string.isRequired
    }), "contextTypes", {
      form: _propTypes.default.shape({
        onChange: _propTypes.default.func.isRequired,
        clearError: _propTypes.default.func.isRequired,
        register: _propTypes.default.func.isRequired,
        unregister: _propTypes.default.func.isRequired,
        errors: _propTypes.default.object.isRequired,
        formData: _propTypes.default.object.isRequired,
        getDefaultValue: _propTypes.default.func.isRequired
      })
    });

    return WithField;
  };
};

var fieldPropTypes = {
  onChange: _propTypes.default.func.isRequired,
  clearError: _propTypes.default.func.isRequired,
  value: _propTypes.default.any.isRequired,
  name: _propTypes.default.string.isRequired,
  error: _propTypes.default.object
};
exports.fieldPropTypes = fieldPropTypes;
var _default = withField;
exports.default = _default;