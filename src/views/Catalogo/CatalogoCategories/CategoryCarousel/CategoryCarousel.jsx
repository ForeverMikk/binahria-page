import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './CategoryCarousel.css';
import header from '../../../../assets/images/code.jpg';
import img from '../../../../assets/images/category-img.png'
import ProductCard from '../ProductCard/ProductCard';

const products = [
    {
        header: header,
        title: 'Producto 1',
        description: 'texto de prueba',
        howWorks: 'texto en la parte de como funciona',
        video: 'https://www.youtube.com/watch?v=AEcZmMXRS4Q',
        img: img,
        adventajes: [
            {
                img: img,
                description:'Texto de cada una de las caracteristicas especiales'
            },
            {
                img: img,
                description:'Texto de cada una de las caracteristicas especiales'
            },
        ]
    },
    {
        header: header,
        title: 'Producto 2',
        description: 'texto de prueba 2',
        howWorks: 'texto en la parte de como funciona 2',
        video: 'https://www.youtube.com/watch?v=AEcZmMXRS4Q',
        img: img,
        adventajes: [
            {
                img: img,
                description:'Texto de cada una de las caracteristicas especiales 2'
            },
            {
                img: img,
                description:'Texto de cada una de las caracteristicas especiales 2'
            },
        ]
    }
]


const CategoryCarousel = ({title, id, background}) => {
    return (
        <div className='category-carousel' 
            id={`category-${id}`} 
            style={{background: `${background}`}}
        >
            <h3 className="main-title">{title}</h3>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                spaceBetween={200}
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
                {products.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard product={item} index={index}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CategoryCarousel;