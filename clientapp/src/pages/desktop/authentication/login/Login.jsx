import React, { useState, useContext } from 'react'
import CustomInput from '../../../../components/customInput/CustomInput'
import CustomButton from '../../../../components/customButton/CustomButton'
import { ClientAuthorization } from '../../../../services/services'
import { Auth } from '../../../../services/context/AuthContext'
import style from './Login.module.css'

function Login({updateHeader}) {
    const [error, setError] = useState(null)
    const [form , setForm] = useState({
        username:'',
        password:''
    });

    const { authenticate } = useContext(Auth);

    const onChangeValue = input => e => {
        setError(null);
        setForm({...form, [input]:e.target.value})
    }
    
    const buttonHandler = (event) => {
        event.preventDefault()
        ClientAuthorization(form)
            .then(res => {
                if(res.data.status === 401) {
                    setError(res.data.errorMessage)
                    return false
                }
                if(res.data.token) {
                    authenticate(res.data.token);
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <form className={style.form}>
            <div className={style.formGroup}>
                <CustomInput 
                    type="text"
                    value={form.username} 
                    onChangeHandler={onChangeValue('username')} 
                    inputType={"login"}  
                    placeholder="UserName" 
                />
                { error && <span className={style.errorMessage}>{error}</span> }
            </div>
            
            <div className={style.formGroup}>
                <CustomInput 
                    type="password"    
                    value={form.password} 
                    onChangeHandler={onChangeValue('password')} 
                    placeholder="Password" 
                    inputType={"login"} 
                />
            </div>
            <CustomButton 
                text="Log in" 
                type="submit" 
                buttonType={"login"} 
                clickHandler={buttonHandler} 
            />
        </form>
    )
}

export default Login
