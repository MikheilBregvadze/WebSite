import React , {useState} from 'react'
import CustomButton from '../../../components/customButton/CustomButton';
import CustomModal from '../../../components/customModal/CustomModal';
import style from './Registration.module.css';
import CustomInput from '../../../components/customInput/CustomInput'
function Registration() {
    const [showModal, setShowModal] = useState(false);
    const registrationHandler = (e) =>{
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(!showModal);
    }
    return (
        <>
            <CustomButton 
                buttonType={"registration"} 
                text={"Registration"} 
                clickHandler={registrationHandler}
            />
            <CustomModal
                isOpen={showModal}
                closeModal={closeModal}
            >
                <div className={style.div} >
                    <CustomInput inputType={"registration"} placeholder="Name" />
                    <CustomInput inputType={"registration"} placeholder="Surname" />
                    <CustomInput inputType={"registration"} placeholder="Name"/>
                    <CustomInput inputType={"registration"} placeholder="Name"/>
                    <label htmlFor="test" >22l
                     <CustomInput id={"test"} name="test" inputType={"registration"} placeholder="Name"/>
                    </label>
                </div>

            </CustomModal>
        </>
    )
}

export default Registration
