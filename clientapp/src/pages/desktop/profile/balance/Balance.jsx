import React ,{ useState } from 'react';
import style from './Balance.module.css';
import CustomButton from '../../../../components/customButton/CustomButton';
import '../../../../assets/images/bank.png';
function AddBalance() {
    const deposit = () => {
        
    }
    const [tabIndex,setTabIndex] = useState(0);
    const click = (index) =>{
        setTabIndex(index)
    }
    return (
        <>
            <div className={style.balanceContainer}>
                <div className={style.navTabs} >
                    <span onClick={() => click(0)} className={ tabIndex === 0 ? style.active: ''} >ADD BALANCE</span>
                    <span onClick={() => click(1)} className={ tabIndex === 1? style.active: ''}>WITHDRAW</span>
                </div>
                { tabIndex === 0 ?<div className={style.addBalance} >
                    <div className={style.deposit} >Deposit</div>
                    <div className={style.logo} >You have not linked any card yet Save the card on funds deposit. Save time using linked cards in future.</div>
                    <div className={style.table}>
                        <div className={style.header} >
                            <span>Card</span>
                            <span>Min Amount</span>
                            <span>Max Amount</span>
                            <span>Instruction</span>
                            <span></span>
                        </div>
                        <div className={style.row} >
                            <span className={style.bog} ></span>
                            <span>Min Amount</span>
                            <span>Max Amount</span>
                            <span className={style.instruction} >Instruction</span>
                            <span><CustomButton buttonType={"deposit"} text="Deposit" clickHandler={deposit}/></span>
                        </div> <div className={style.row} >
                            <span className={style.any} ></span>
                            <span>Min Amount</span>
                            <span>Max Amount</span>
                            <span className={style.instruction} >Instruction</span>
                            <span><CustomButton buttonType={"deposit"} text="Deposit" clickHandler={deposit}/></span>
                        </div> <div className={style.row} >
                            <span className={style.tbc} ></span>
                            <span>Min Amount</span>
                            <span>Max Amount</span>
                            <span className={style.instruction} >Instruction</span>
                            <span><CustomButton buttonType={"deposit"} text="Deposit" clickHandler={deposit}/></span>
                        </div> <div className={style.row} >
                            <span className={style.other} ></span>
                            <span>Min Amount</span>
                            <span>Max Amount</span>
                            <span className={style.instruction} >Instruction</span>
                            <span><CustomButton buttonType={"deposit"} text="Deposit" clickHandler={deposit}/></span>
                        </div>
                    </div>
                </div>
                :
                <div className={style.addBalance} >
                    <div className={style.deposit} >
                        whithdraw
                    </div>
                    <div className={style.logo} >
                        You have not linked any card yet Save the card on funds deposit. Save time using linked cards in future.
                    </div>
                </div>}
            </div>
        </>
    )
}

export default AddBalance
