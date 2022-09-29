import React from "react"
import 'react-multi-carousel/lib/styles.css'
import { useTranslation } from "react-i18next"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './Testimonios.css'
import abi from "../../../assets/images/home/abi.jpeg"
import jona from "../../../assets/images/home/jon.jpg"
import tania from "../../../assets/images/home/tania-meza.jpg"
import woman from "../../../assets/images/home/woman.png"
import TestimonialCard from "./TestimonialCard/TestimonialCard"


const Testimonios = () => {

    const { t } = useTranslation();

    const testimonios = [
        {
            id: '1',
            name: 'Taniza Meza',
            description: t('home.testimonios.cardTwo.text'),
            img: tania
        },
        {
            id: '2',
            name: t('home.testimonios.cardFour.name'),
            description: t('home.testimonios.cardFour.text'),
            img: abi
        },
        {
            id: '3',
            name: t('home.testimonios.cardFive.name'),
            description: t('home.testimonios.cardFive.text'),
            img: jona
        },
        {
            id: '4',
            name: t('home.testimonios.cardOne.name'),
            description: t('home.testimonios.cardOne.text'),
            img: woman
        },
        {
            id: '5',
            name: t('home.testimonios.cardThree.name'),
            description: t('home.testimonios.cardThree.text'),
            img: woman
        }
    ]
        
    return (
            <>
            <section id="testimonios">
                <div className="white-space dragging"></div>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    {testimonios.map(({id, name, description, img}) => (
                        <SwiperSlide key={id}>
                            <TestimonialCard id={id} title={name} description={description} img={img} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                
            </section>

            <section id="team-form">
                <br />
                <div>
                    <h1>{t('home.teamForm.title')}</h1>
                    <a href="https://binahria.typeform.com/to/UbhFpYxW">{t('home.teamForm.button')}</a>
                </div>
            </section>
        </>
    )
}



export default Testimonios;