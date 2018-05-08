import {
  isEmpty,
  mapObjIndexed,
  pickBy,
  map,
} from 'ramda'

const isRequired = (val) => val && !isEmpty(val)
const omitUndefined = pickBy((val) => val !== undefined)

const executeFieldValidators = (validators, val) => {
  for (let i = 0; i < validators.length; i += 1) {
    const {type, msg, validator} = validators[i]
    if (!validator(val)) {
      return {
        type,
        msg,
      }
    }
  }
  return undefined
}

const executeFieldRule = (fieldRule, val) => {
  if (fieldRule.required && !isRequired(val)) {
    return {
      type: 'REQUIRED',
    }
  }
  return executeFieldValidators(fieldRule.validators, val)
}

const executeFormRule = ({msg, type, validator}, formData, fieldErrors) => {
  if (!validator(formData, fieldErrors)) {
    return {type, msg}
  }
  return undefined
}

const executeFieldRules = (fieldRules, formData) => {
  const errors = mapObjIndexed((val, fieldName) => executeFieldRule(fieldRules[fieldName], val), formData)
  return omitUndefined(errors)
}

const executeFormRules = (formRules, formData, fieldErrors) =>
  omitUndefined(map((formRule) => executeFormRule(formRule, formData, fieldErrors), formRules))

export const executeValidators = (fieldRules, formRules, formData) => {
  const fieldErrors = executeFieldRules(fieldRules, formData)
  const formErrors = executeFormRules(formRules, formData, fieldErrors)
  return {
    ...fieldErrors,
    ...formErrors,
  }
}

export const executeAsyncValidators = () => {}
