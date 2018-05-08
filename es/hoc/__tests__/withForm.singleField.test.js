"use strict";

var _react = _interopRequireDefault(require("react"));

var _ava = _interopRequireDefault(require("ava"));

var _reactRedux = require("react-redux");

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _sinon = _interopRequireDefault(require("sinon"));

var _withForm = _interopRequireDefault(require("../withForm"));

var _createStore = _interopRequireDefault(require("../../store/createStore"));

var _mockForm = _interopRequireDefault(require("../../../test/unit/components/mockForm"));

var _inputField = _interopRequireDefault(require("../../component/inputField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
var FORM_ID = 'FORM_ID';

function createComponent() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var formOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var formProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var ConnectedForm = (0, _withForm.default)(formOptions)(_mockForm.default);
  return (0, _enzyme.mount)(_react.default.createElement(_reactRedux.Provider, {
    store: (0, _createStore.default)(initialState)
  }, _react.default.createElement(ConnectedForm, _extends({
    formId: FORM_ID
  }, formProps), _react.default.createElement(_inputField.default, {
    name: "foo"
  }))));
}

(0, _ava.default)('should call onSubmit when submit the form without validation error', function (t) {
  var onSubmitStub = _sinon.default.stub();

  var onValidationFailedStub = _sinon.default.stub();

  var wrapper = createComponent({}, {
    formValidator: function formValidator() {
      return function () {
        return {};
      };
    }
  }, {
    onSubmit: onSubmitStub
  });
  wrapper.find('form').simulate('submit');
  t.truthy(onSubmitStub.called);
  t.falsy(onValidationFailedStub.called);
});
(0, _ava.default)('should not call onSubmit when submit the form with validation error', function (t) {
  var onSubmitStub = _sinon.default.stub();

  var onValidationFailedStub = _sinon.default.stub();

  var wrapper = createComponent({}, {
    formValidator: function formValidator() {
      return function () {
        return {
          foo: {
            msg: 'foo should always be a number'
          }
        };
      };
    }
  }, {
    onSubmit: onSubmitStub
  });
  wrapper.find('form').simulate('submit');
  t.falsy(onSubmitStub.called);
  t.falsy(onValidationFailedStub.calledWith({
    foo: {
      msg: 'foo should always be a number'
    }
  }));
});

_ava.default.only('should call onAsyncValidationStart ' + 'function when have async validation and validation failed', function (t) {
  var onSubmitStub = _sinon.default.stub();

  var onAsyncValidationStartStub = _sinon.default.stub();

  var onAsyncValidationEndStub = _sinon.default.stub();

  var asyncFormValidatorStub = _sinon.default.stub();

  var promise = Promise.resolve();
  asyncFormValidatorStub.returns(promise);
  var wrapper = createComponent({}, {
    asyncFormValidator: function asyncFormValidator() {
      return asyncFormValidatorStub;
    }
  }, {
    onSubmit: onSubmitStub,
    onAsyncValidationStart: onAsyncValidationStartStub,
    onAsyncValidationEnd: onAsyncValidationEndStub
  });
  wrapper.find('form').simulate('submit');
  t.truthy(asyncFormValidatorStub.called);
  return promise.then(function () {
    t.truthy(onAsyncValidationStartStub.called);
  });
});