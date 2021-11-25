import React , {useState} from 'react';
import {Link} from "react-router-dom";
import CustomInput from '../../../../components/customInput/CustomInput'
import CustomButton from '../../../../components/customButton/CustomButton'
// import Slider from '../../../../components/slider/Slider'
import style from './Header.module.css';
// const sliderItemObject  = [{
//             sliderGameName:'testImg',
//             url:'/assets/images/swipe.jpg',
//             id:0
//         },{
//             sliderGameName:'testImg1',
//             url:'/assets/images/swipe1.jpg',
//             id:1
//         },{
//             sliderGameName:'testImg2',
//             url:'/assets/images/swipe2.jpg',
//             id:2
//         },{
//             sliderGameName:'testImg3',
//             url:'/assets/images/swipe3.jpg',
//             id:3
//         },{
//             sliderGameName:'testImg4',
//             url:'/assets/images/swipe4.jpg',
//             id:4
//         },
// ]
function Header() {
    const [form , setForm] = useState({
        text:'',
        password:''
    });
    const [sliderGames , setSliderGames] = useState({
        sliderGamename:'test'
    })
    const buttonHandler = () => {
        setForm({text:'',password:""})
    }
    const test = input => e => {
        setForm({...form,[input]:e.target.value})
    }
    const registrationHandler = (e) =>{
        console.log(e.target)
    }

    return (
        <>
            <div className={style.header}>
                <Link className={style.logo} to="/"></Link>
                <div className={style.headerFields} >
                    <CustomButton buttonType={"registration"} text="Registration" clickHandler={registrationHandler} />
                    <CustomInput   placeholder="UserName" value={form.text} test={test('text')} type="text"/>
                    <CustomInput  placeholder="Password" value={form.password} test={test('password')} type="password"/>
                    <CustomButton buttonType={"login"} type="submit" text="Enter" clickHandler={buttonHandler} />
                </div>
            </div>
            <ul className={style.navigation}>
                <li> <Link className={style.navigationLink} to="/">Main</Link> </li>
                <li> <Link className={style.navigationLink} to="/casino">Casino</Link> </li>
                <li> <Link className={style.navigationLink} to="/slots">Slots</Link> </li>
                <li> <Link className={style.navigationLink} to="/keno">Keno</Link> </li>
                <li> <Link className={style.navigationLink} to="/jetx">JetX</Link> </li>
                <li> <Link className={style.navigationLink} to="/games">Games</Link> </li>
                <li> <Link className={style.navigationLink} to="/boardgames">Boardgames</Link> </li>
            </ul>
        </>
    )
}
export default Header
