import React from 'react';
import Slider from '../../../components/slider/Slider';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import style from '../../desktop/casino/Casino.module.css';
const sliderItemObject  = [{
            sliderGameName:'roulette',
            url:'roulette.jpg',
            id:0
        },{
            sliderGameName:'smartsoft-prom',
            url:'smartsoft-prom.jpg',
            id:1
        }
    ]
const games = [{
        gameName:'BlackJack',
        url:'BlackJack-cr.jpg'
    },{
        gameName:'LiveRoulette',
        url:'LiveRoulette.jpg'
    },{
        gameName:'CrazyTime',
        url:'crazytime.jpg'
    }
]   
function Casino() {
    return (
        <>
            <Slider className={style.swiperContainer} sliderImage={style.sliderImage} sliderItemObject={sliderItemObject}/>
            <div className={style.gamesContainer}>
                <a className={style.game}>
                    <p>ROULETTE</p>
                </a>
            </div>
        </>
    )
}

export default Casino
