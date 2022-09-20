import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './ConocenosText.css';
import imgCon from "../../../assets/images/conocenos/office.jpg";

const ConocenosText = () => {
    
    const { t } = useTranslation();
    
    return (
        <>
            <div id="con-text">
                <p>{t('conocenos.mainText')}</p>
                <img src={imgCon} alt=""></img>
            </div>

            <div id="white-text">
                <p>{t('conocenos.whiteText.text')}</p>
                <NavLink to="/catalogo" style={{ textDecoration: 'none'}}>{t('conocenos.whiteText.link')} &rarr;</NavLink>            
            </div>

            <div id="con-purp">
                <span className="top">/ {t('conocenos.purpleText.title')}</span>
                <p>{t('conocenos.purpleText.text')}</p>
                <NavLink to="/catalogo" style={{ textDecoration: 'none', color: 'white' }}>{t('conocenos.purpleText.link')} &rarr;</NavLink>
            </div>

            <div id="white-2">
                <p className="top">{t('conocenos.top')}</p>
                <p className="down">{t('conocenos.down')}</p>
            </div>
        </>
    )
}

export default ConocenosText;
