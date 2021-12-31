import React from 'react'
import styles from './modal.module.scss'
import ReactModal from 'react-modal';

const Modal = ({ isOpen, children }) => {
  return (
    <ReactModal
      contentLabel="Modal"
      isOpen={isOpen}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={false}
      appElement={document.getElementById('__next')}
    >
      {children}
    </ReactModal>
  )
}

export default Modal