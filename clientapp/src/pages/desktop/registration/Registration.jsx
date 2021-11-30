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
    const submitRegistration = (e) =>{
        console.log(e)
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
                    <div className={style.registartionHeader}>
                        Fast and easy registration
                    </div>
                <div className={style.registration} >
                    <div className={style.inputContainer}>
                            <span className={style.label}>Name</span>
                            <CustomInput id={"name"} name="name" type={'text'} inputType={"registration"}/>
                            <p>The field is required</p>
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>Surname</span>
                            <CustomInput id={"surname"} name="surname" type={'text'} inputType={"registration"}/>
                            <p>The field is required</p>
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>Telephone</span>
                            <CustomInput id={"telephone"} name="telephone" type={'number'} inputType={"registration"} />
                            <p>The field is required</p>
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>E-mail</span>
                            <CustomInput id={"email"} name="email" type={'email'} inputType={"registration"}  />
                            <p>The field is required</p>
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>Username</span>
                            <CustomInput id={"username"} name="username" type={'text'} inputType={"registration"}/>
                            <p>The field is required</p>
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>Password</span>
                            <CustomInput id={"password"} name="password" type={'password'} inputType={"registration"}  />
                            <p>The field is required</p>
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>Repeat password</span>
                            <CustomInput id={"repeatPassword"} name="repeatPassword" type={'password'} inputType={"registration"} />
                            <p>The field is required</p>
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>ID Number</span>
                            <CustomInput id={"idnumber"} name="idnumber" type={'text'} inputType={"registration"} />
                            <p>The field is required</p>
                    </div> 
                    <div className={style.inputContainer}>
                            <span className={style.label}>Date of birth</span>
                            <CustomInput id={"dateofbirth"} name="dateofbirth" type={'text'} inputType={"registration"} />
                            <p>The field is required</p>
                    </div>  
                    <div className={style.inputContainer}>
                        <CustomButton 
                        buttonType={"submitRegistration"} 
                        text={"Registration"} 
                        clickHandler={submitRegistration}
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label className={style.termsCondition} >I confirm that I am an adult and will not allow another person (people) to use my gambling account.</label>
                    </div>
                </div>
            </CustomModal>
        </>
    )
}

export default Registration
