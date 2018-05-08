"use strict";

var _react = _interopRequireDefault(require("react"));

var _ava = _interopRequireDefault(require("ava"));

var _reactRedux = require("react-redux");

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _formConnector = _interopRequireDefault(require("../formConnector"));

var _createStore = _interopRequireDefault(require("../../store/createStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
var FORM_ID = 'FORM_ID';

function createComponent() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var MockForm = function MockForm() {
    return null;
  };

  var Component = (0, _formConnector.default)(MockForm);
  return (0, _enzyme.mount)(_react.default.createElement(_reactRedux.Provider, {
    store: (0, _createStore.default)(initialState)
  }, _react.default.createElement(Component, {
    formId: FORM_ID
  })));
}

(0, _ava.default)('update field view value when call updateFieldViewValue', function (t) {
  var wrapper = createComponent();

  var getForm = function getForm() {
    return wrapper.find('MockForm');
  };

  getForm().prop('updateFieldViewValue')(FORM_ID, 'foo', 'bar', 'a.com/login');
  wrapper.update();
  t.deepEqual(getForm().prop('formViewData'), {
    foo: 'bar'
  });
});
(0, _ava.default)('update multi field view values when call updateFieldViewValue multi times', function (t) {
  var wrapper = createComponent();

  var getForm = function getForm() {
    return wrapper.find('MockForm');
  };

  getForm().prop('updateFieldViewValue')(FORM_ID, 'foo0', 'bar0', 'a.com/login');
  getForm().prop('updateFieldViewValue')(FORM_ID, 'foo1', 'bar1', 'a.com/login');
  wrapper.update();
  t.deepEqual(getForm().prop('formViewData'), {
    foo0: 'bar0',
    foo1: 'bar1'
  });
});
(0, _ava.default)('update form model data when call updateFormModelData', function (t) {
  var wrapper = createComponent();

  var getForm = function getForm() {
    return wrapper.find('MockForm');
  };

  getForm().prop('updateFormModelData')(FORM_ID, {
    foo: 'bar'
  });
  wrapper.update();
  t.deepEqual(getForm().prop('formModelData'), {
    foo: 'bar'
  });
});
(0, _ava.default)('delete form view value when call deleteFormViewDataById', function (t) {
  var wrapper = createComponent({
    form: _defineProperty({}, FORM_ID, {
      url: 'a.com/login',
      viewData: {
        foo: 'bar'
      },
      modelData: {
        foo: 'bar0'
      }
    })
  });

  var getForm = function getForm() {
    return wrapper.find('MockForm');
  };

  getForm().prop('deleteFormViewDataById')(FORM_ID);
  wrapper.update();
  t.deepEqual(getForm().prop('formModelData'), {
    foo: 'bar0'
  });
  t.deepEqual(getForm().prop('formViewData'), {});
});