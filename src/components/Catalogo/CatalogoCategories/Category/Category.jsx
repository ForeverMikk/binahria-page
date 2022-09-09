import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './Category.css';

const CategoryCard = ({title, description, img}) => {
    return (
        <div className='cat-card'>
            <img src={img} alt={title} />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <button>Ver más</button>
        </div>
    )
}

const Category = ({title, categories}) => {
    return (
        <div className="category">
            <h3 className="title">{title}</h3>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    0: {
                        width: 320,
                        slidesPerView: 1,
                    },
                     // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                }}  
            >
                {categories.map(({label, description, img}, index) => (
                    <SwiperSlide key={index}>
                        <CategoryCard title={label} description={description} img={img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Category