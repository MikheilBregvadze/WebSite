import React, { useEffect , useRef} from 'react';
import Slider from '../../../components/slider/Slider';
import style from './MainPage.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination, Autoplay]);
const sliderItemObject  = [{
        sliderGameName:'testImg',
        url:'swipe.jpg',
        id:0
    },{
        sliderGameName:'testImg1',
        url:'swipe1.jpg',
        id:1
    },{
        sliderGameName:'testImg2',
        url:'swipe2.jpg',
        id:2
    },{
        sliderGameName:'testImg3',
        url:'swipe3.jpg',
        id:3
    },{
        sliderGameName:'testImg4',
        url:'swipe4.jpg',
        id:4
    },{
        sliderGameName:'testImg5',
        url:'swipe5.jpg',
        id:5
    },{
        sliderGameName:'testImg6',
        url:'swipe6.jpg',
        id:6
    },{
        sliderGameName:'testImg7',
        url:'swipe7.jpg',
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
        url:'burninghot.jpg',
        id:0
    },{
        gameName:'alexander',
        url:'alexander.jpg',
        id:1
    },{
        gameName:'aot',
        url:'aot.jpg',
        id:2
    },{
        gameName:'burningice',
        url:'burningice.jpg',
        id:3
    },{
        gameName:'evolution',
        url:'evolution.jpg',
        id:4
    },
    {
        gameName:'magicgarden40',
        url:'magicgarden40.jpg',
        id:5
    },
    {
        gameName:'moonstone',
        url:'moonstone.jpg',
        id:6
    },
    {
        gameName:'pengun',
        url:'pengun.jpg',
        id:7
    },
    {
        gameName:'spinx',
        url:'spinx.jpg',
        id:8
    },
    {
        gameName:'superhot40',
        url:'superhot40.jpg',
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
                        <a key={game.id} className={style.gameSmSideSlider} style={{backgroundImage:`url(${require('../../../assets/images/' + game.url).default})`}} ></a>
                    )
                }
            </div>
            <div className={style.mainPageGamesRight}>
                {
                    gameNames.map( game =>
                        <a key={game.id} className={style.gameSmSideSlider} style={{backgroundImage:`url(${require('../../../assets/images/' + game.url).default})`}} ></a>
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
