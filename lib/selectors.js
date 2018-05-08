"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormModelData = exports.getFormViewData = void 0;

var _pathOr2 = _interopRequireDefault(require("ramda/src/pathOr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFormViewData = function getFormViewData(state, formId) {
  return (0, _pathOr2.default)({}, [formId, 'viewData'], state.form);
};

exports.getFormViewData = getFormViewData;

var getFormModelData = function getFormModelData(state, formId) {
  return (0, _pathOr2.default)({}, [formId, 'modelData'], state.form);
};

exports.getFormModelData = getFormModelData;