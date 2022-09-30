import React from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../../assets/images/logo/logo-black.png';

import './CatalogoHeader.css'
import Navbar from '../../../components/Navbar/Navbar';

const CatalogoHeader = () => {

    const {t} = useTranslation();

    return (
        <section id="catalogo-header">
            
            <Navbar logo={logo}/>

            <div className="top">
                <span>/ {t('catalogo.title')}</span>
            </div>

            <div id="main-text">
                <p>{t('catalogo.text')} <span>{t('catalogo.text2')}</span></p>
            </div>

            <div id="bottom-text">
                <div className="left">
                    <a href="#CatList"><p>{t('catalogo.bottom')} &rarr;</p></a>
                </div>
            </div>
            
        </section>
    )
}


export default CatalogoHeader;