import { connect } from 'react-redux'

import * as formAction from '../action/formAction'
import { getFormModelData, getFormViewData } from '../selectors'

const mapStateToProps = (state, { formId }) => ({
  formViewData: getFormViewData(state, formId),
  formModelData: getFormModelData(state, formId),
})

const mapDispatchToProps = {
  deleteFormViewDataById: formAction.deleteFormViewDataById,
  deleteFormModelDataById: formAction.deleteFormModelDataById,
  updateFieldViewValue: formAction.updateFieldViewValue,
  updateFormModelData: formAction.updateFormModelData,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
