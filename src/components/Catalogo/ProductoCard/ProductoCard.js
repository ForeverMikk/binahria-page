import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player/youtube'
import { useTranslation } from 'react-i18next';

import './ProductoCard.css'

const scrollToElement = (element) => {
    const scrolledElement = document.getElementById(element)

    scrolledElement.scrollIntoView()
}


const ProductoCard = ({title, text, img, id, video, text2, videoClass}) => {

    const {t} = useTranslation();

    return(
        <> 
            <div className='new-card'>
               
                <div className='new-card-header'>
                    <div className='new-card-title'>
                        <h2><span>/ {id} </span> {title}</h2>
                    </div>
                    <div className='new-card-number'>
                        <p>{` < 1 / ${id} >`} </p>
                    </div>
                </div>
                
                <div className='new-card-info'>
                    <div className='new-card-img'>
                        <img src={img} alt="Encuestas Digitales"/>
                    </div>
                    
                    <div className='new-card-text'>
                        <p>{text}</p>
                        <br />
                        <br />
                        <p>{text2}</p>
                    </div>
                    
                </div>

                <button className='bottom-text' onClick={() => scrollToElement(videoClass)}>
                    <p>{t('catalogo.scrollButton')}</p>
                    <FontAwesomeIcon icon={faArrowDown} size="2x" />
                </button>

            </div>

            <div id='video-wrapper'>
                <ReactPlayer url={video} width='100%' height='100%' />
            </div>

        </>
       
    )
}


export default ProductoCard;