import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"

import './TecnologiasHeader.css'
import Navbar from "../../../components/Navbar/Navbar"
import logo from '../../../assets/images/logo/logo-white.png'

const TecnologiasHeader = () => {

    const { t } = useTranslation();
    
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
        <>
            <section id="tecnologias-header">  
                <Navbar logo={logo}/>

                <div className="top">
                    <span>/ {t('tecnologias.title')}</span>
                </div>
                
                <div id="main-text">
                    <p>{t('tecnologias.text')}</p>
                </div>

                <div id="bottom-text">
                    <div className="left">
                        <a href="#conImg"><p>{t('tecnologias.bottom')} &rarr;</p></a>
                    </div>
                </div>
            </section>
            
            <section id="conImg">
                <div className="main-img"></div>
            </section>
        </>
    )
}

export default TecnologiasHeader