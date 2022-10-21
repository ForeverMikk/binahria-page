import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"

import './HomeHeader.css'
import logo from '../../../assets/images/logo/logo-white.png'
import Navbar from "../../../components/Navbar/Navbar";
import ParticlesHeader from "../../../components/ParticlesHeader/ParticlesHeader";


const HomeHeader = () => {
   
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
        <section id="header">
            <ParticlesHeader />
            
            <Navbar logo={logo}/>

            <div id="main-text">
                <span className="title">{t('home.title')}</span>
                <br />
                <span className="subtitle">{t('home.subtitle')}</span>
            </div>
            <div id="bottom-text">
                <div className="left">
                    <span>/ DATA ANALYSIS COMPANY</span>
                </div>
                <div className="right">
                    <a href="#competencia">&rarr; {t('home.tour')}</a>
                </div>
            </div>
            
        </section>
    )
}

export default HomeHeader