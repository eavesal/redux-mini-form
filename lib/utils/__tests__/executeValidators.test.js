"use strict";

var _values2 = _interopRequireDefault(require("ramda/src/values"));

var _all2 = _interopRequireDefault(require("ramda/src/all"));

var _curry2 = _interopRequireDefault(require("ramda/src/curry"));

var _ava = _interopRequireDefault(require("ava"));

var _executeValidators = _interopRequireDefault(require("../executeValidators"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIELD_ERROR = 'FIELD_ERROR';
var HEADER_ERROR = 'HEADER_ERROR';

var alphabetValidator = function alphabetValidator(val) {
  return val.match(/^[a-zA-Z]+$/);
};

var maxLengthValidator = (0, _curry2.default)(function (maxLength, val) {
  if (typeof val === 'string' && val.length < maxLength) {
    return true;
  }

  return false;
});
var fieldRules = {
  firstName: {
    required: true,
    validators: [{
      type: FIELD_ERROR,
      msg: 'Name should only contains alphabet letters.',
      validator: alphabetValidator
    }, {
      type: FIELD_ERROR,
      msg: 'Name should less that 40 letters',
      validator: maxLengthValidator(40)
    }]
  },
  lastName: {}
};
var formRules = {
  allRequiredFieldBlank: {
    msg: 'Please fill required fields',
    type: HEADER_ERROR,
    validator: function validator(formData, fieldErrors) {
      return (0, _all2.default)(function (val) {
        return val === 'REQUIRED';
      })((0, _values2.default)(fieldErrors));
    }
  }
};
(0, _ava.default)('execute sync validator rules', function (t) {
  var errors = (0, _executeValidators.default)(fieldRules, {}, {
    firstName: 'Yu'
  });
  t.deepEqual(errors, {});
});
(0, _ava.default)('execute sync validator rules for required field', function (t) {
  var errors = (0, _executeValidators.default)(fieldRules, formRules, {
    firstName: ''
  });
  t.deepEqual(errors, {
    firstName: {
      type: 'REQUIRED'
    },
    allRequiredFieldBlank: {
      msg: 'Please fill required fields',
      type: HEADER_ERROR
    }
  });
});
(0, _ava.default)('execute sync validator rules for required field with first validation failed', function (t) {
  var errors = (0, _executeValidators.default)(fieldRules, {}, {
    firstName: '123'
  });
  t.deepEqual(errors, {
    firstName: {
      type: FIELD_ERROR,
      msg: 'Name should only contains alphabet letters.'
    }
  });
});
(0, _ava.default)('execute sync validator rules for required field with second validation failed', function (t) {
  var nameMoreThan40Letters = 'veryLongNameLongNameLongNameLongNameLongNameLongName';
  var errors = (0, _executeValidators.default)(fieldRules, {}, {
    firstName: nameMoreThan40Letters
  });
  t.deepEqual(errors, {
    firstName: {
      type: FIELD_ERROR,
      msg: 'Name should less that 40 letters'
    }
  });
});