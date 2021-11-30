import React, { useEffect , useRef} from 'react';
import Slider from '../../../components/slider/Slider';
import style from './MainPage.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination, Autoplay]);
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
const videoObject = [{
        sliderVideoUrl:'https://crystalstatic.com/cache/b262/Content/Images/Banners/1200/video/JETX_BORBALI_GEO.mp4',
        id:0
    },{
        sliderVideoUrl:'https://crystalstatic.com/cache/b262/Content/Images/Banners/1200/video/EGT_7300_GEO.mp4',
        id:1
    },{
        sliderVideoUrl:'https://crystalstatic.com/cache/b262/Content/Images/Banners/1200/video/SB_25NOV_GEO.mp4',
        id:2
    },{
        sliderVideoUrl:'https://crystalstatic.com/cache/b262/Content/Images/Banners/1200/video/JETX_BORBALI_GEO.mp4',
        id:3
    },
]
const gameNames = [{
        gameName:'burninghot',
        url:'/assets/images/burninghot.jpg',
        id:0
    },{
        gameName:'alexander',
        url:'/assets/images/alexander.jpg',
        id:1
    },{
        gameName:'aot',
        url:'/assets/images/aot.jpg',
        id:2
    },{
        gameName:'burningice',
        url:'/assets/images/burningice.jpg',
        id:3
    },{
        gameName:'evolution',
        url:'/assets/images/evolution.jpg',
        id:4
    },
    {
        gameName:'magicgarden40',
        url:'/assets/images/magicgarden40.jpg',
        id:5
    },
    {
        gameName:'moonstone',
        url:'/assets/images/moonstone.jpg',
        id:6
    },
    {
        gameName:'pengun',
        url:'/assets/images/pengun.jpg',
        id:7
    },
    {
        gameName:'spinx',
        url:'/assets/images/spinx.jpg',
        id:8
    },
    {
        gameName:'superhot40',
        url:'/assets/images/superhot40.jpg',
        id:9
    },
]

function MainPage() {
    const videoRef = useRef(null)
    useEffect(() => {
        document.querySelectorAll(`video`).forEach((button) => {
            button.play()
        });
    });
    
    return (
        <>
        <Slider className={style.swiperContainer} sliderImage={style.sliderImage} sliderItemObject={sliderItemObject}/>
        <div>
            <div className={style.mainPageGamesLeft}>
                {
                    gameNames.map( game =>
                        <a key={game.id} className={style.gameSmSideSlider} style={{backgroundImage:`url(${game.url})`}} ></a>
                    )
                }
            </div>
            <div className={style.mainPageGamesRight}>
                {
                    gameNames.map( game =>
                        <a key={game.id} className={style.gameSmSideSlider} style={{backgroundImage:`url(${game.url})`}} ></a>
                    )
                }
            </div>
            <div className={style.mainPageGames} >
             {
                videoObject.map( video => 
                 <div key={video.id} className={style.gamesSliderParent}>
                    <video 
                        data-id="video"
                        ref={videoRef} 
                        key={video.id} 
                        loop
                        className={style.video} 
                        muted>
                        <source src={video.sliderVideoUrl} />
                    </video>
                 </div>
                )
             }
        </div>
        </div>
        </>
    )
}

export default MainPage
