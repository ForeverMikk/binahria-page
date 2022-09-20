import React from "react"
import {Link} from "react-router-dom"
import { useTranslation } from 'react-i18next'

import './Competencia.css'

const Competencia = () => {
    
    const { t } = useTranslation();

    return(
        <section id="competencia">

            <div className="top">
                <span className="correo">{t('home.competencia.top')}</span>
            </div>

            <div className="content">
                <p>{t('home.competencia.text')}</p>
            </div>
            
            <div className="nav-comp">
                <Link to="/tecnologias" style={{ textDecoration: 'none', color: '#753399'  }}>{t('home.competencia.go')} &rarr;</Link>
            </div>

        </section>
    )
    
}

export default Competencia