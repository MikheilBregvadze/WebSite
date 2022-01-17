import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';
import './Slider.css';
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Slider(props) {
    return (
        <div className={props.className} >
        { <Swiper 
              spaceBetween={10}
              slidesPerView={1}
              navigation
              scrollbar={{ draggable: true }}
              
              speed={500}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={(swiper) => console.log(swiper)}
              disableOnInteraction = {true}
              onTransitionStart={(swiper) => {
                swiper.autoplay={
                    delay:200,
                    disableOnInteraction:false
                }
              }}
              onTransitionEnd={(swiper) => {
                swiper.autoplay = false
            }}
            >
            {props.sliderItemObject.map(sliderItem => 
                <SwiperSlide 
                    style={{backgroundImage:`url(${require('../../assets/images/' + sliderItem.url).default})`}} 
                    key={sliderItem.id} 
                    className={props.sliderImage}
                />
            )}
        </Swiper> }
        
        </div>
    )
}

export default Slider
