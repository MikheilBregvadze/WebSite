import React, { useContext } from 'react'
import { Auth } from '../../../../services/context/AuthContext'
import style from './PersonalInformation.module.css'

function PersonalInformation() {
    const { clientInfo } = useContext(Auth);
    return (
        <>
            {clientInfo && 
                <div className={style.container}>
                    <h1>Personal Information</h1>
                    <div className={style.accountInformation}>
                        <h3>Account information</h3>
                        <div className={style.accountInformationList}>
                            <div className={style.item}>
                                <p>Username</p>
                                <p>{clientInfo.username}</p>
                            </div>
                            <div className={style.item}>
                                <p>Personal Id</p>
                                <p>{clientInfo.personalId}</p>
                            </div>
                            <div className={style.item}>
                                <p>Password</p>
                                <div className={style.editable}>******</div>
                                <div className={style.edit}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.contactDetails}>
                        <h3>Contact Details</h3>
                        <div className={style.contactDetailsList}>
                            <div className={style.item}>
                                <p>Email</p>
                                <div className={style.editable}>{clientInfo.email}</div>
                                <div className={style.edit}></div>
                            </div>
                            <div className={style.item}>
                                <p>Mobile</p>
                                <div className={style.editable}>{clientInfo.mobilenumber}</div>
                                <div className={style.edit}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.personalDetails}>
                        <h3>Personal details</h3>
                        <div className={style.personalDetailsList}>
                            <div className={style.item}>
                                <p>First Name</p>
                                <p>{clientInfo.name}</p>
                            </div>
                            <div className={style.item}>
                                <p>Last Name</p>
                                <p>{clientInfo.lastname}</p>
                            </div>
                            <div className={style.item}>
                                <p>Last Name</p>
                                <p>{clientInfo.dateofbirth}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PersonalInformation
