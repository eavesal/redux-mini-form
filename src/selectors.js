import {pathOr} from 'ramda'

export const getFormViewData = (state, formId) => pathOr({}, [formId, 'viewData'], state.form)
export const getFormModelData = (state, formId) => pathOr({}, [formId, 'modelData'], state.form)
