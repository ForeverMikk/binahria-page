import React from "react"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

import './Compromiso.css'
import compromiso from "../../../assets/images/home/businesswoman.jpg"

const Compromiso = () => {

    const {t} = useTranslation();

    return(
        <section id="compromiso">
            <div className="top">
                <span>/ {t('home.compromiso.title')}</span>
            </div>
            <div className="content">
                <p>{t('home.compromiso.text')}</p>
            </div>
            <div className="bot">
                <NavLink to="/tecnologias" style={{ textDecoration: 'none', color: 'white' }}>{t('home.compromiso.bottom')} &rarr;</NavLink>
            </div>
            <div className="mid-img">
                <img src={compromiso} alt="Compromiso"></img>
            </div>
        </section>
    )
}

export default Compromiso;