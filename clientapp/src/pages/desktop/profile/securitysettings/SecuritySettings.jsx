import React , {useState,useContext , useEffect } from 'react';
import { Auth } from '../../../../services/context/AuthContext';
import style from '../securitysettings/SecuritySettings.module.css'
function SecuritySettings() {
    const { clientInfo } = useContext(Auth);
    const [checked,setChecked] = useState({
        yes:true
    });

     const onChangeValue = input => e => {
        setChecked({
            [input]:e.target.checked
        });
    }
  return (
        <div className={style.messagesContainer} >
            <span className={style.header} >
                MDBET offers SMS authorization  for additional security. 
                If you want to receive SMS code on your mobile phone  by the time of each authorization, please press “yes” button.
            </span>
            <div className={style.checkBoxesContainer}>
                <span className={style.text}>Do you want to use {clientInfo ? clientInfo.mobilenumber:''} SMS service?</span>
                <div>
                    <span className={style.inputContainer}>
                        <input type="radio" onChange={onChangeValue("yes")} checked={checked.yes === true ? true:false} name="input" id="yes"/>
                        <label htmlFor="yes">YES</label>
                    </span>
                    <span className={style.inputContainer}>
                        <input type="radio"  onChange={onChangeValue("no")} name="input"  checked={checked.no === true ? true:false} id="no" />
                        <label htmlFor="no">NO</label>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SecuritySettings
