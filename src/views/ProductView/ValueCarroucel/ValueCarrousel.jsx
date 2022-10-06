import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import './ValueCarrousel.css';

const ValueCarrousel = ({values}) => {
    return (
        <div className="value-carrousel">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                // navigation
                spaceBetween={0}
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 3000
                }}
            >
            {values && values.map((value, index) => (
                <SwiperSlide key={index}>
                    <div className="title">
                        <span>/ 0{index+1}</span>
                        <br />
                        <h2 className='titulo'>{value}</h2>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}

export default ValueCarrousel;