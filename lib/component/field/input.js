"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty2 = _interopRequireDefault(require("ramda/src/isEmpty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withField = _interopRequireDefault(require("../../hoc/withField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Input(_ref) {
  var clearError = _ref.clearError,
      onChange = _ref.onChange,
      value = _ref.value,
      name = _ref.name,
      error = _ref.error,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["clearError", "onChange", "value", "name", "error", "className"]);

  var hasError = error && !(0, _isEmpty2.default)(error);
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("div", null, _react.default.createElement("input", _extends({
    name: name,
    onFocus: clearError,
    onChange: onChange,
    value: value
  }, restProps))), hasError && _react.default.createElement("div", null, error.msg));
}

Input.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  clearError: _propTypes.default.func.isRequired,
  value: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  className: _propTypes.default.string.isRequired,
  error: _propTypes.default.object
};
Input.defaultProps = {
  error: {}
};

var _default = (0, _withField.default)({
  parse: function parse(event) {
    return event.target.value;
  }
})(Input);

exports.default = _default;