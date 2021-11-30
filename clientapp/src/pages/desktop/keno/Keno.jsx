import React, { useState } from 'react'
import CustomModal from '../../../components/customModal/CustomModal'

function Keno() {
    const [showModal, setShowModal] = useState(true);
    const closeModal = () => {
        setShowModal(!showModal);
    }
    return (            
            'keno'
    )
}

export default Keno
