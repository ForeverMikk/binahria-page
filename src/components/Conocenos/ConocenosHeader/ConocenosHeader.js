import React from 'react'
import { useTranslation } from 'react-i18next'

import './ConocenosHeader.css'
import Navbar from '../../Navbar/Navbar'


const ConocenosHeader = () => {
    
    const {t} = useTranslation();

    return (
        <div id="conocenos-header">

            <Navbar />

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
