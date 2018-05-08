"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Form =
/*#__PURE__*/
function (_React$Component) {
  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));

    _defineProperty(_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (event) {
      var _this$props = _this.props,
          stopSubmitPropagation = _this$props.stopSubmitPropagation,
          onSubmit = _this$props.onSubmit;
      if (event) event.preventDefault();
      if (stopSubmitPropagation && event) event.stopPropagation();

      _this.hiddenKeyboard();

      onSubmit(event);
    }), "hiddenKeyboard", function () {
      if (document.activeElement) document.activeElement.blur(); // This fixes fixed position elements on iOS < 7.1 (e.g. spinner): http://stackoverflow.com/a/24670746

      setImmediate(function () {
        if (document.body) window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
      });
    });

    var shouldDebounceSubmit = _this.props.shouldDebounceSubmit;

    if (shouldDebounceSubmit) {
      _this.handleSubmitWithDebounce = (0, _lodash.default)(function () {
        var _this2;

        return (_this2 = _this).handleSubmit.apply(_this2, arguments);
      }, 1000, {
        leading: true,
        trailing: false
      });
    } else {
      _this.handleSubmitWithDebounce = _this.handleSubmit;
    }

    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          children = _this$props2.children,
          formId = _this$props2.formId;
      return _react.default.createElement("form", {
        id: formId,
        onSubmit: this.handleSubmitWithDebounce,
        className: className,
        noValidate: true
      }, _react.default.createElement("fieldset", {
        disabled: disabled,
        style: {
          border: 'none'
        }
      }, children));
    }
  }]);

  _inherits(Form, _React$Component);

  return Form;
}(_react.default.Component);

exports.default = Form;

_defineProperty(_defineProperty(Form, "defaultProps", {
  disabled: false,
  stopSubmitPropagation: true,
  shouldDebounceSubmit: true,
  children: null,
  className: ''
}), "propTypes", {
  formId: _propTypes.default.string.isRequired,
  onSubmit: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  shouldDebounceSubmit: _propTypes.default.bool,
  stopSubmitPropagation: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string
});