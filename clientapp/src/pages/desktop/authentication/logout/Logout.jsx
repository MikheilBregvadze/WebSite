import React from 'react'
import CustomButton from '../../../../components/customButton/CustomButton'
function Logout(props) {
    return (
        <CustomButton 
            buttonType={"logout"} 
            text="Log out" 
            clickHandler={props.clickHandler} 
        />
    )
}

export default Logout
