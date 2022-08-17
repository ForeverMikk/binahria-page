import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';

import './ProductosBasicos.css'
import ProductoCard from '../ProductoCard/ProductoCard'
import { itemsBasicos } from '../../../variables/carouselItems'


const ProductosBasicos = () => {
    

    const {t} = useTranslation();
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 760 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 760, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <section id="carousel-prod-bas">
            <h1 className='title' style={{ padding: '3rem 3rem 0 3rem', fontSize: '2.5rem', fontWeight: 'normal' }}>
                {t('catalogo.basicos.title')}
            </h1>
            
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                transitionDuration={5000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {itemsBasicos.map((item) => (
                    <ProductoCard 
                        key={item.id} 
                        title={t(item.title)} 
                        id={item.id} 
                        img={item.src} 
                        text={t(item.text)} 
                        text2={t(item.text2)} 
                        video={item.video} 
                        videoClass={item.videoClass} 
                    />
                ))}
                
            </Carousel>
        </section>
    )
}

export default ProductosBasicos;