"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _omit2 = _interopRequireDefault(require("ramda/src/omit"));

var _react = _interopRequireDefault(require("react"));

var _withField = _interopRequireWildcard(require("../hoc/withField"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = function Textarea(props) {
  return _react.default.createElement("textarea", (0, _omit2.default)(['error', 'clearError'], props));
};

Textarea.propTypes = _withField.fieldPropTypes;

var _default = (0, _withField.default)({
  parse: function parse(e) {
    return e.target.value;
  }
})(Textarea);

exports.default = _default;