import React from "react";
import { useTranslation } from "react-i18next";

import './Compania.css'

const Compania = () => {

    const { t } = useTranslation ();

    return(
        <section id="compania">
            <div className="top">
                <span>/ {t('home.compania.title')}</span>
            </div>
            <div className="content">
                <p>
                    <span className="before"> {t('home.compania.text')} </span> 
                </p>
            </div>
        </section>
    )
    
}

export default Compania