import test from 'ava'
import {
  curry,
  all,
  values,
} from 'ramda'

import {executeValidators} from '../validatorHelpers'

const FIELD_ERROR = 'FIELD_ERROR'
const HEADER_ERROR = 'HEADER_ERROR'

const alphabetValidator = (val) => val.match(/^[a-zA-Z]+$/)
const maxLengthValidator = curry((maxLength, val) => {
  if (typeof val === 'string' && val.length < maxLength) {
    return true
  }
  return false
})

const fieldRules = {
  firstName: {
    required: true,
    validators: [{
      type: FIELD_ERROR,
      msg: 'Name should only contains alphabet letters.',
      validator: alphabetValidator,
    }, {
      type: FIELD_ERROR,
      msg: 'Name should less that 40 letters',
      validator: maxLengthValidator(40),
    }],
  },
  lastName: {},
}

const formRules = {
  allRequiredFieldBlank: {
    msg: 'Please fill required fields',
    type: HEADER_ERROR,
    validator: (formData, fieldErrors) => all((val) => val === 'REQUIRED')(values(fieldErrors)),
  },
}


test('execute sync validator rules', (t) => {
  const errors = executeValidators(fieldRules, {}, {
    firstName: 'Yu',
  })

  t.deepEqual(errors, {})
})

test('execute sync validator rules for required field', (t) => {
  const errors = executeValidators(fieldRules, formRules, {
    firstName: '',
  })

  t.deepEqual(errors, {
    firstName: {
      type: 'REQUIRED',
    },
    allRequiredFieldBlank: {
      msg: 'Please fill required fields',
      type: HEADER_ERROR,
    },
  })
})

test('execute sync validator rules for required field with first validation failed', (t) => {
  const errors = executeValidators(fieldRules, {}, {
    firstName: '123',
  })

  t.deepEqual(errors, {
    firstName: {
      type: FIELD_ERROR,
      msg: 'Name should only contains alphabet letters.',
    },
  })
})

test('execute sync validator rules for required field with second validation failed', (t) => {
  const nameMoreThan40Letters = 'veryLongNameLongNameLongNameLongNameLongNameLongName'
  const errors = executeValidators(fieldRules, {}, {
    firstName: nameMoreThan40Letters,
  })

  t.deepEqual(errors, {
    firstName: {
      type: FIELD_ERROR,
      msg: 'Name should less that 40 letters',
    },
  })
})
