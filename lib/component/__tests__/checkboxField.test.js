"use strict";

var _react = _interopRequireDefault(require("react"));

var _ava = _interopRequireDefault(require("ava"));

var _reactRedux = require("react-redux");

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _sinon = _interopRequireDefault(require("sinon"));

var _checkboxField = _interopRequireDefault(require("../checkboxField"));

var _mockForm = _interopRequireDefault(require("../../../test/unit/components/mockForm"));

var _withForm = _interopRequireDefault(require("../../hoc/withForm"));

var _createStore = _interopRequireDefault(require("../../store/createStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});

function createComponent() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var formOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var formProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var ConnectedForm = (0, _withForm.default)(formOptions)(_mockForm.default);
  return (0, _enzyme.mount)(_react.default.createElement(_reactRedux.Provider, {
    store: (0, _createStore.default)(initialState)
  }, _react.default.createElement(ConnectedForm, _extends({
    formId: "TEST_FORM_ID",
    onSubmit: _sinon.default.stub()
  }, formProps), _react.default.createElement(_checkboxField.default, {
    name: "foo"
  }))));
}

(0, _ava.default)('should switch to true when click it and initial value is false', function (t) {
  var wrapper = createComponent({
    form: {
      TEST_FORM_ID: {
        viewData: {
          foo: false
        }
      }
    }
  });
  wrapper.find('input').simulate('change', {
    target: {
      checked: true
    }
  });
  t.true(wrapper.find('input').prop('checked'));
});
(0, _ava.default)('should switch to false when click it and initial value is true', function (t) {
  var wrapper = createComponent({
    form: {
      TEST_FORM_ID: {
        viewData: {
          foo: true
        }
      }
    }
  });
  wrapper.find('input').simulate('change', {
    target: {
      checked: false
    }
  });
  t.false(wrapper.find('input').prop('checked'));
});