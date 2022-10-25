import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PopupButton } from 'react-calendly';

import './ContactHeader.css';
import Navbar from "../../../components/Navbar/Navbar";
import logo from '../../../assets/images/logo/logo-white.png'

const ContactHeader = () => {

    const { t } = useTranslation();

    useEffect(() => {
        let cursor = document.querySelector('.cursor');
        let links = Array.from(document.querySelectorAll("a"));
        let buttons = Array.from(document.querySelectorAll("button"));
        let inputs = Array.from(document.querySelectorAll("input"));
        
        inputs.forEach((input) => {
            input.addEventListener("mouseover", () => {
                cursor.classList.add("grow");
            });
            input.addEventListener("mouseleave", () => {
                cursor.classList.remove("grow");
            });
        });

        links.forEach((link) => {
            link.addEventListener("mouseover", () => {
                cursor.classList.add("grow");
            });
            link.addEventListener("mouseleave", () => {
                cursor.classList.remove("grow");
            });
        });

        buttons.forEach((button) => {
            button.addEventListener("mouseover", () => {
                cursor.classList.add("grow");
            });
            button.addEventListener("mouseleave", () => {
                cursor.classList.remove("grow");
            });
        });

    }, []);

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
                <div className="buttons">

                    <div className="contact-button arrow">
                        <a 
                            href='https://wa.me/5512345678/?text=Queiro%20comunicarme%20con%20ustedes' 
                            target='_blank' 
                            rel="noreferrer"
                        >
                            {t('contact.whats')}
                        </a>
                        <span>+ Info</span>
                    </div>

                    <div className="meet-button arrow" >
                        <PopupButton
                            url='https://calendly.com/binahria-analytics/'
                            rootElement={document.getElementById("root")}
                            text={t('contact.schedule')}
                        />
                        <span>+ Info</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactHeader;