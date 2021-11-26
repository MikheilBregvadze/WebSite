import React, { useState } from 'react'
import CustomModal from '../../../components/customModal/CustomModal'

function Keno() {
    const [showModal, setShowModal] = useState(true);
    const closeModal = () => {
        setShowModal(!showModal);
    }
    return (
        <CustomModal
            isOpen={showModal}
            closeModal={closeModal}
        >
            keno
        </CustomModal>
    )
}

export default Keno
