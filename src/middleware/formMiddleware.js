import * as formAction from '../action/formAction'

export default function formMiddleware(shouldCleanFormViewValue, urlGetter) {
  return ({dispatch}) => () => (action) => {
    if (shouldCleanFormViewValue(action)) {
      const destinationUrl = urlGetter(action)
      dispatch(formAction.deleteFormViewValueByURL(destinationUrl))
    }
  }
}
