import React from 'react';

import './MarketplaceHeader.css';
import Navbar from '../../../components/Navbar/Navbar';
import logo from '../../../assets/images/logo/logo-white.png'
import { useTranslation } from 'react-i18next';

const MarketplaceHeader = () => {

    const {t} = useTranslation();

    return(
        <section className='marketplace-header'>
            <Navbar logo={logo} />

            <div className="top">
                <span>/ descubre</span>
            </div>

            <div className="main-text">
                <p>Te contamos con  <span>Datos</span> </p>
            </div>

            <div className="bottom-text">
                <div className="left">
                    <a href="/"><p>{t('conocenos.bottom')} &rarr;</p></a>
                </div>
            </div>
        </section>
    )
}

export default MarketplaceHeader;