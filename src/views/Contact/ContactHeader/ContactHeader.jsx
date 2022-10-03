import React from 'react';
import { useTranslation } from 'react-i18next';

import './ContactHeader.css';
import Navbar from "../../../components/Navbar/Navbar";
import logo from '../../../assets/images/logo/logo-white.png'

const ContactHeader = () => {

    const { t } = useTranslation();

    return (
        <div className='contact-header' id='contact'>  
            <Navbar logo={logo}/>
            
            <div className="top">
                <span>/ {t('conocenos.title')}</span>
            </div>

            <div id="main-text" className='title'>
                <p>{t('contact.title')}</p>
                <p className='subtitle'>{t('contact.subtitle')}</p>
            </div>

            <div className="bottom-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus molestias nam laboriosam porro quis fugiat tempore dicta rerum quos est eligendi, consequatur, itaque odio soluta ratione harum minus dolor omnis.</p>

                <div className="buttons">

                    <div className="contact-button">
                        <a href='https://wa.me/5526680859/?text=Queiro%20comunicarme%20con%20ustedes' target='_blank' rel="noreferrer">
                            Contactanos por WhattsApp
                        </a>
                        <span>+ Info</span>
                    </div>

                    <div className="meet-button">
                        <p>Agendar una reunión</p>
                        <span>+ Info</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactHeader;