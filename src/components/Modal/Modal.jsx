import { Component } from 'react';
import { StyledOverlay, StyledModal } from '../Modal/Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <StyledOverlay onClick={this.handleOverlayClick}>
        <StyledModal>{this.props.children}</StyledModal>
      </StyledOverlay>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
