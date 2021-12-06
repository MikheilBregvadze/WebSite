import React from 'react'
import style from './Balance.module.css'
import '../../../../assets/images/bank.png'
function AddBalance() {
    return (
        <div className={style.addBalanceContainer}>
            <div className={style.deposit} >Deposit  |  Withdrawal</div>
            <div className={style.logo} >You have not linked any card yet Save the card on funds deposit. Save time using linked cards in future.</div>
        </div>
    )
}

export default AddBalance
