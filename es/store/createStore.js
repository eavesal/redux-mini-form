"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _formReducer = _interopRequireDefault(require("../reducer/formReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(initialState) {
  return (0, _redux.createStore)((0, _redux.combineReducers)({
    form: _formReducer.default
  }), initialState);
};

exports.default = _default;