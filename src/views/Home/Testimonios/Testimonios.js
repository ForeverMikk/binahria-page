import React from "react"
import Carousel from "react-multi-carousel"
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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
        
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
                <SwiperSlide>
                    <TestimonialCard id='1' img={tania} title='Taniza Meza' description={t('home.testimonios.cardOne.text')} />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard id='1' img={tania} title='Taniza Meza' description={t('home.testimonios.cardOne.text')} />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard id='1' img={tania} title='Taniza Meza' description={t('home.testimonios.cardOne.text')} />
                </SwiperSlide>
                    

                    {/* <div className="car-card">
                        <img src={woman} alt={`Foto de ${t('home.testimonios.cardOne.name')}`}></img>
                        <div className="card-text">
                            <div className="card-id">
                                <span>/ 01</span>
                            </div>
                            <div className="card-main">
                                <h1>{t('home.testimonios.cardOne.name')}</h1>
                                <p>{t('home.testimonios.cardOne.text')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="car-card">
                        <img src={tania} alt={`Foto de ${t('home.testimonios.cardTwo.name')}`}></img>
                        <div className="card-text">
                            <div className="card-id">
                                <span>/ 02</span>
                            </div>
                            <div className="card-main">
                                <h1>{t('home.testimonios.cardTwo.name')}</h1>
                                <p>{t('home.testimonios.cardTwo.text')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="car-card">
                        <img src={woman} alt={`Foto de ${t('home.testimonios.cardThree.name')}`}></img>
                        <div className="card-text">
                            <div className="card-id">
                                <span>/ 03</span>
                            </div>
                            <div className="card-main">
                                <h1>{t('home.testimonios.cardThree.name')}</h1>
                                <p>{t('home.testimonios.cardThree.text')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="car-card">
                        <img src={abi} alt={`Foto de ${t('home.testimonios.cardFour.name')}`}></img>
                        <div className="card-text">
                            <div className="card-id">
                                <span>/ 04</span>
                            </div>
                            <div className="card-main">
                                <h1>{t('home.testimonios.cardFour.name')}</h1>
                                <p>{t('home.testimonios.cardFour.text')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="car-card">
                        <img src={jona} alt={`Foto de ${t('home.testimonios.cardFive.name')}`}></img>
                        <div className="card-text">
                            <div className="card-id">
                                <span>/ 05</span>
                            </div>
                            <div className="card-main">
                                <h1>{t('home.testimonios.cardFive.name')}</h1>
                                <p>{t('home.testimonios.cardFive.text')}</p>
                            </div>
                        </div>
                    </div> */}


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