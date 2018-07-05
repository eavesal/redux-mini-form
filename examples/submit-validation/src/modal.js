import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'


class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
    this.modalRoot = document.getElementById('modal-root')
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default Modal
