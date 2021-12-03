import React, { useState, useContext } from 'react';
import CustomButton from '../../../components/customButton/CustomButton';
import CustomModal from '../../../components/customModal/CustomModal';
import { ClientRegistration , ValidateRegistration} from '../../../services/services'
import { Auth } from '../../../services/context/AuthContext'
import style from './Registration.module.css';
import CustomInput from '../../../components/customInput/CustomInput'
function Registration() {
    const [showModal, setShowModal] = useState(false);
    
    const [error, setError] = useState({})
    const [form , setForm] = useState({
        name:'',
        lastname:'',
        mobilenumber:'',
        email:'',
        username:'',
        password:'',
        confirm_password:'',
        id:'',
        dateofbirth:'',
        mobilecode:'995'
    });

    const { authenticate } = useContext(Auth);

    const onChangeValue = input => e => {
        setForm({...form, [input]:e.target.value})
        setError({...error, [input]:null})
    }

    const registrationHandler = (e) =>{
        setShowModal(true);
    }
    const submitRegistration = (event) =>{
        event.preventDefault()

        ValidateRegistration(form)
            .then( res =>{
                if(res.data.status === 200){    
                    ClientRegistration(form)
                    .then(res => {
                        if(res.data.status === 401) {
                            setError(res.data.errorMessage)
                            return false
                        }
                        if(res.data.token) {
                            authenticate(res.data.token);
                            console.log(res.data.token)
                        }
                    })
                    .catch(error => console.log(error))
                }else {
                    setError(res.data.errorMessages)
                }
            })
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
                        <span className={style.close} onClick={closeModal}></span>
                    </div>
            <form>
                <div className={style.registration} >
                    <div className={style.inputContainer}>
                            <span className={style.label}>Name</span>
                            <CustomInput onChangeHandler={onChangeValue('name')} id={"name"} name="name" type={'text'} inputType={"registration"}/>
                            {error.name && <p> {error.name.validationError} </p>}
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>lastname</span>
                            <CustomInput onChangeHandler={onChangeValue('lastname')} id={"lastname"} name="lastname" type={'text'} inputType={"registration"}/>
                            {error.lastname && <p>{error.lastname.validationError}</p>}
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>mobilenumber</span>
                            <CustomInput onChangeHandler={onChangeValue('mobilenumber')} id={"mobilenumber"} name="mobilenumber" type={'number'} inputType={"registration"} />
                            {error.mobilenumber && <p>{error.mobilenumber.validationError}</p>}
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>E-mail</span>
                            <CustomInput onChangeHandler={onChangeValue('email')} id={"email"} name="email" type={'email'} inputType={"registration"}  />
                            {error.email && <p>{error.email.validationError}</p>}
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>Username</span>
                            <CustomInput onChangeHandler={onChangeValue('username')} id={"username"} name="username" type={'text'} inputType={"registration"}/>
                            {error.username && <p>{error.username.validationError}</p>}
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>Password</span>
                            <CustomInput onChangeHandler={onChangeValue('password')} id={"password"} name="password" type={'password'} inputType={"registration"}  />
                            {error.password && <p>{error.password.validationError}</p>}
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>Repeat password</span>
                            <CustomInput onChangeHandler={onChangeValue('confirm_password')} id={"confirm_password"} name="confirm_password" type={'password'} inputType={"registration"} />
                            {error.name && <p>{error.name.validationError}</p>}
                    </div>    
                    <div className={style.inputContainer}>
                            <span className={style.label}>ID Number</span>
                            <CustomInput onChangeHandler={onChangeValue('id')} id={"idnumber"} name="idnumber" type={'text'} inputType={"registration"} />
                            {error.id && <p>{error.id.validationError}</p>}
                    </div> 
                    <div className={style.inputContainer}>
                            <span className={style.label}>Date of birth</span>
                            <CustomInput onChangeHandler={onChangeValue('dateofbirth')} id={"dateofbirth"} name="dateofbirth" type={'date'} inputType={"registration"} />
                            {error.dateofbirth && <p>{error.dateofbirth.validationError}</p>}
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
            </form>
            </CustomModal>
        </>
    )
}

export default Registration
