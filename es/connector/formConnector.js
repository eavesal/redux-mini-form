"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var formAction = _interopRequireWildcard(require("../action/formAction"));

var _selectors = require("../selectors");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state, _ref) {
  var formId = _ref.formId;
  return {
    formViewData: (0, _selectors.getFormViewData)(state, formId),
    formModelData: (0, _selectors.getFormModelData)(state, formId)
  };
};

var mapDispatchToProps = {
  deleteFormViewDataById: formAction.deleteFormViewDataById,
  updateFieldViewValue: formAction.updateFieldViewValue,
  updateFormModelData: formAction.updateFormModelData
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);

exports.default = _default;