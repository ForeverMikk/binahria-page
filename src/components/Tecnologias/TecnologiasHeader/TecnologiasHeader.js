import React from "react"
import { useTranslation } from "react-i18next"

import './TecnologiasHeader.css'
import Navbar from "../../Navbar/Navbar"

const TecnologiasHeader = () => {

    const { t } = useTranslation();

    return (
        <>
            <section id="tecnologias-header">  
                <Navbar />

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