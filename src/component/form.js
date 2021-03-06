import debounce from 'lodash.debounce'
import React from 'react'
import PropTypes from 'prop-types'

export default class Form extends React.Component {
  static defaultProps = {
    disabled: false,
    stopSubmitPropagation: true,
    shouldDebounceSubmit: true,
    children: null,
    className: '',
  }

  static propTypes = {
    formId: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    shouldDebounceSubmit: PropTypes.bool,
    stopSubmitPropagation: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props)

    const { shouldDebounceSubmit } = this.props
    if (shouldDebounceSubmit) {
      this.handleSubmitWithDebounce = debounce((...args) => this.handleSubmit(...args), 1000, {
        leading: true,
        trailing: false,
      })
    } else {
      this.handleSubmitWithDebounce = this.handleSubmit
    }
  }

  handleSubmit = event => {
    const { onSubmit } = this.props
    this.hiddenKeyboard()
    onSubmit(event)
  }

  hiddenKeyboard = () => {
    if (document.activeElement) document.activeElement.blur()
    // This fixes fixed position elements on iOS < 7.1 (e.g. spinner): http://stackoverflow.com/a/24670746
    setImmediate(() => {
      if (document.body) window.scrollTo(document.body.scrollLeft, document.body.scrollTop)
    })
  }

  render() {
    const { className, disabled, children, formId } = this.props

    return (
      <form
        id={formId}
        onSubmit={event => {
          const { stopSubmitPropagation } = this.props
          if (event) event.preventDefault()
          if (stopSubmitPropagation && event) event.stopPropagation()
          this.handleSubmitWithDebounce(event)
        }}
        className={className}
        noValidate
      >
        <fieldset disabled={disabled} style={{ border: 'none' }}>
          {children}
        </fieldset>
      </form>
    )
  }
}
