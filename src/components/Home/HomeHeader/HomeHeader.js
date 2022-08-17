import React from "react"
import ParticlesHeader from "./../../ParticlesHeader/ParticlesHeader"
import { useTranslation } from "react-i18next"

import './HomeHeader.css'
import Navbar from "../../Navbar/Navbar"


const HomeHeader = () => {
   
    const { t } = useTranslation();

    return (
        <section id="header">
            <ParticlesHeader />
            
            <Navbar />

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