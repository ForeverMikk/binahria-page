import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';


import './ConocenosCarousel.css'
import expert from "../../../assets/images/ExigenciasPrimero.png"
import excel from "../../../assets/images/Excelencia.png"
import equipo from "../../../assets/images/Equipo.png"
import experto from "../../../assets/images/expert.jpg"
import info from "../../../assets/images/InformacionImporta.png"

const ConocenosCarousel = () => {
    
    const { t } = useTranslation();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 760 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 760, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div id="carousel">
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
                // transitionDuration={5000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div className="car-card">
                    <img src={expert} alt={t('conocenos.carrousel.cardOne.title')}></img>
                    <div className="card-text">
                        <div className="card-id">
                            <span>/ 01</span>
                        </div>
                        <div className="card-main" style={{marginLeft: '4rem'}}>
                            <h1>{t('conocenos.carrousel.cardOne.title')}</h1>
                            <p>{t('conocenos.carrousel.cardOne.text')}</p>
                        </div>
                    </div>
                </div>

                <div className="car-card">
                    <img src={excel} alt={t('conocenos.carrousel.cardTwo.title')}></img>
                    <div className="card-text">
                        <div className="card-id">
                            <span>/ 02</span>
                        </div>
                        <div className="card-main" style={{marginLeft: '4rem'}}>
                            <h1>{t('conocenos.carrousel.cardTwo.title')}</h1>
                            <p>{t('conocenos.carrousel.cardTwo.text')}</p>
                        </div>
                    </div>
                </div>
                <div className="car-card">
                    <img src={equipo} alt={t('conocenos.carrousel.cardThree.title')}></img>
                    <div className="card-text">
                        <div className="card-id">
                            <span>/ 03</span>
                        </div>
                        <div className="card-main" style={{marginLeft: '4rem'}}>
                            <h1>{t('conocenos.carrousel.cardThree.title')}</h1>
                            <p>{t('conocenos.carrousel.cardThree.text')}</p>
                        </div>
                    </div>
                </div>
                <div className="car-card">
                    <img src={experto} alt={t('conocenos.carrousel.cardFour.title')}></img>
                    <div className="card-text">                            
                        <div className="card-id" >
                            <span>/ 04</span>
                        </div>
                        <div className="card-main" style={{marginLeft: '4rem'}}>
                            <h1>{t('conocenos.carrousel.cardFour.title')}</h1>
                            <p>{t('conocenos.carrousel.cardFour.text')}</p>
                        </div>
                    </div>
                </div>
                <div className="car-card">
                    <img src={info} alt={t('conocenos.carrousel.cardFive.title')}></img>
                    <div className="card-text">
                        <div className="card-id">
                            <span>/ 05</span>
                        </div>
                        <div className="card-main" style={{marginLeft: '4rem'}}>
                            <h1>{t('conocenos.carrousel.cardFive.title')}</h1>
                            <p>{t('conocenos.carrousel.cardFive.text')}</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}


export default ConocenosCarousel;