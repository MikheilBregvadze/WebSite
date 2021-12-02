import React from 'react'
import style from '../messages/Messages.module.css'
function Messages() {
    return (
        <div className={style.messagesContainer} >
            <span className={style.header} >
                MDBET offers SMS authorization  for additional security. 
                If you want to receive SMS code on your mobile phone  by the time of each authorization, please press “yes” button.
            </span>
            <div className={style.checkBoxesContainer}>
                <span className={style.text}>Do you want to use SMS service?</span>
                <div>
                    <span className={style.inputContainer}>
                        <input type="radio" name="input" id="yes"/>YES
                        <label htmlFor="yes"></label>
                    </span>
                    <span className={style.inputContainer}>
                        <input type="radio" name="input" id="no"/>NO
                        <label htmlFor="input"></label>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Messages
