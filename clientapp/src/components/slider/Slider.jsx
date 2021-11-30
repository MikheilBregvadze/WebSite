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
              autoplay={true}
              pagination={{ clickable: true }}
              loop={true}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
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
