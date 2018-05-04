
import {path} from 'ramda'
import {connect} from 'react-redux'

import * as formAction from '../action/formAction'

const getFormViewData = (state, {formId}) => path([formId, 'viewData'], state.form)
const getFormModelData = (state, {formId}) => path([formId, 'modelData'], state.form)

const mapStateToProps = (state, props) => ({
  formViewData: getFormViewData(state, props),
  formModelData: getFormModelData(state, props),
})

const mapDispatchToProps = {
  deleteFormViewValueById: formAction.deleteFormViewValueById,
  updateFieldViewValue: formAction.updateFieldViewValue,
  updateFormModelData: formAction.updateFormModelData,
}

export default connect(mapStateToProps, mapDispatchToProps)
