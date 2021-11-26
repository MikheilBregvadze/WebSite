import React from 'react';
import Modal from 'react-modal';
import style from './CustomModal.module.css';

Modal.setAppElement("#root");

function CustomModal(props) {
    return (
        <Modal
            isOpen={props.isOpen}
            className={style.modal}
            overlayClassName={style.overlay}
            disableAutoFocus={true}
            disableEnforceFocus={true}
            onRequestClose={() => props.closeModal()}
        >
            {props.children}
        </Modal>
    )
}

export default CustomModal;
