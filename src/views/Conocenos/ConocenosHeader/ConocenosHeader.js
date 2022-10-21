import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import './ConocenosHeader.css'
import Navbar from '../../../components/Navbar/Navbar'
import logo from '../../../assets/images/logo/logo-white.png'

const ConocenosHeader = () => {
    
    const {t} = useTranslation();

    useEffect(() => {
        let cursor = document.querySelector('.cursor');
        let links = Array.from(document.querySelectorAll("a"));
        let buttons = Array.from(document.querySelectorAll("button"));
        
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
        <div id="conocenos-header">

            <Navbar logo={logo}/>

            <div className="top">
                <span>/ {t('conocenos.title')}</span>
            </div>

            <div id="main-text">
                <p>{t('conocenos.text')}</p>
            </div>

            <div id="bottom-text">
                <div className="left">
                    <a href="#con-text"><p>{t('conocenos.bottom')} &rarr;</p></a>
                </div>
            </div>
        </div>
    )
}

export default ConocenosHeader;
