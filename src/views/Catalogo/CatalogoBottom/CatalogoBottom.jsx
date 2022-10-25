import React from 'react';
import { PopupButton } from 'react-calendly';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './CatalogoBottom.css';

const CatalogoBottom = () => {

    const { t } = useTranslation();

    return (
        <div className="catalog-bottom">
            <h1 className='question'>
                ¿Tienes alguna duda? 
                <br />
                <span>Contáctate para más detalles</span>
            </h1>

            <div className="links">    
                
                <div to='/contact' className='contact-button arrow'>
                    <Link to='/contact'>Deja tu mensaje</Link>
                    <span>+ info</span>
                </div>
                
                <div className='calendly-button arrow'>
                    <PopupButton
                        url='https://calendly.com/binahria-analytics/'
                        rootElement={document.getElementById("root")}
                        text={t('contact.schedule')}
                        className='pop-button'
                    />
                    <span>+ Info</span>
                </div>

            </div>
        </div>
    )
}

export default CatalogoBottom