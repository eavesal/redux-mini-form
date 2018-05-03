
import prop from 'ramda/src/prop'
import {connect} from 'react-redux'

import * as formAction from '../action/formAction'

const mapStateToProps = (state, props) => {
  const {formId} = props
  return {
    formViewData: prop(state.form, `${formId}.viewData`),
  }
}

const mapDispatchToProps = {
  deleteFormViewValueById: formAction.deleteFormViewValueById,
  updateFieldViewValue: formAction.updateFieldViewValue,
}

export default connect(mapStateToProps, mapDispatchToProps)
