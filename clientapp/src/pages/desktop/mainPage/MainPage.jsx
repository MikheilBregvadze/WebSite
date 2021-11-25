import React, { useEffect , useRef} from 'react';
import Slider from '../../../components/slider/Slider'
import style from './MainPage.module.css'
const sliderItemObject  = [{
        sliderGameName:'testImg',
        url:'/assets/images/swipe.jpg',
        id:0
    },{
        sliderGameName:'testImg1',
        url:'/assets/images/swipe1.jpg',
        id:1
    },{
        sliderGameName:'testImg2',
        url:'/assets/images/swipe2.jpg',
        id:2
    },{
        sliderGameName:'testImg3',
        url:'/assets/images/swipe3.jpg',
        id:3
    },{
        sliderGameName:'testImg4',
        url:'/assets/images/swipe4.jpg',
        id:4
    },{
        sliderGameName:'testImg5',
        url:'/assets/images/swipe5.jpg',
        id:5
    },{
        sliderGameName:'testImg6',
        url:'/assets/images/swipe6.jpg',
        id:6
    },{
        sliderGameName:'testImg7',
        url:'/assets/images/swipe7.jpg',
        id:7
    },
]
function MainPage() {
    const videoRef = useRef(null)
    useEffect(() => {
        // document.querySelector(`video`).play();
        // if(videoRef){
        //     videoRef.current.play()
        // }
        document.querySelectorAll(`video`).forEach((button) => {
            button.play()
        });
    });
    
    return (
        <>
        <Slider className={style.swiperContainer} sliderImage={style.sliderImage} sliderItemObject={sliderItemObject}/>
        <div className={style.mainPageGames} >
             <div className={style.gamesSliderParent}>
                <video data-id="video"  ref={videoRef} loop className={style.video} muted><source src="https://crystalstatic.com/cache/b262/Content/Images/Banners/1200/video/JETX_BORBALI_GEO.mp4" /></video>
             </div>
             <div className={style.gamesSliderParent}>
                <video data-id="video" ref={videoRef} loop className={style.video} muted><source src="https://crystalstatic.com/cache/b262/Content/Images/Banners/1200/video/EGT_7300_GEO.mp4" /></video>
             </div>
             <div className={style.gamesSliderParent}>
                <video data-id="video" ref={videoRef} loop className={style.video} muted><source src="https://crystalstatic.com/cache/b262/Content/Images/Banners/1200/video/SB_25NOV_GEO.mp4" /></video>
             </div>
             <div className={style.gamesSliderParent}>
                <video data-id="video" ref={videoRef} loop className={style.video} muted><source src="https://crystalstatic.com/cache/b262/Content/Images/Banners/1200/video/JETX_BORBALI_GEO.mp4" /></video>
             </div>
        </div>
        </>
    )
}

export default MainPage
