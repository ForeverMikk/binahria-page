import React from "react"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { useTranslation } from 'react-i18next';

import './CompetenciaCarousel.css'
import bigData from "../../../assets/images/home/BigData_BW.jpg"
import dataScience from "../../../assets/images/home/CienciaDatos_BW.jpg"
import bussInt from "../../../assets/images/home/IntNegocios_BW.jpg"
import artInt from "../../../assets/images/home/InteligenciaArt_BW.jpg"


const CompetenciaCarousel = () => {

    const { t } = useTranslation();
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 760 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 760, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }
  
    return (
        <section id="carousel">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                // ssr={true} 
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={5000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div className="car-card">
                    <img src={bigData} alt={t('home.carrousel.cardOne.title')}></img>
                    <div className="card-text">
                        <div className="card-id">
                            <span>/ 01</span>
                        </div>
                        <div className="card-main" style={{marginLeft: '4rem'}}>
                            <h1>{t('home.carrousel.cardOne.title')}</h1>
                            <p>{t('home.carrousel.cardOne.text')}</p>
                        </div>
                    </div>
                </div>
                <div className="car-card">
                    <img src={dataScience} alt={t('home.carrousel.cardTwo.title')}></img>
                    <div className="card-text">                            
                        <div className="card-id" >
                            <span>/ 02</span>
                        </div>
                        <div className="card-main" style={{marginLeft: '4rem'}}>
                            <h1>{t('home.carrousel.cardTwo.title')}</h1>
                            <p>{t('home.carrousel.cardTwo.text')}</p>
                        </div>
                    </div>
                </div>
                <div className="car-card">
                    <img src={bussInt} alt={t('home.carrousel.cardThree.title')}></img>
                    <div className="card-text">
                        <div className="card-id">
                            <span>/ 03</span>
                        </div>
                        <div className="card-main" style={{marginLeft: '4rem'}}>
                            <h1>{t('home.carrousel.cardThree.title')}</h1>
                            <p>{t('home.carrousel.cardThree.text')}</p>
                        </div>
                    </div>
                </div>
                <div className="car-card">
                    <img src={artInt} alt={t('home.carrousel.cardFour.title')}></img>
                    <div className="card-text">
                        <div className="card-id">
                            <span>/ 04</span>
                        </div>
                        <div className="card-main" style={{marginLeft: '4rem'}}>
                            <h1>{t('home.carrousel.cardFour.title')}</h1>
                            <p>{t('home.carrousel.cardFour.text')}</p>
                        </div>
                    </div>
                </div>
                <div className="car-card">
                    <img src={artInt} alt={t('home.carrousel.cardFive.title')}></img>
                    <div className="card-text">
                        <div className="card-id">
                            <span>/ 05</span>
                        </div>
                        <div className="card-main" style={{marginLeft: '4rem'}}>
                            <h1>{t('home.carrousel.cardFive.title')}</h1>
                            <p>{t('home.carrousel.cardFive.text')}</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    )
}


export default CompetenciaCarousel;