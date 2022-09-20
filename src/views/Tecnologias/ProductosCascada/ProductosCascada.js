import React from 'react'
import { useTranslation } from 'react-i18next'

import './ProductosCascada.css'
import bigData from "../../../assets/images/BigData_Col.jpg"
import dataSci from "../../../assets/images/CienciaDatos_Col.jpg"
import bussInt from "../../../assets/images/IntNegocios_Col.jpg"
import artInt from "../../../assets/images/IntArtificial_Col.jpg"


const ProductosCascada = () => {

    const {t} = useTranslation();

    return (
        <section id="prod-cascade">
            <div className="cascade-img">
                <a href="/"><img src={bigData} alt="Big Data"></img></a>
            </div>

            <div className="cascade-text">
                <h2>MIND THE DATA</h2>
                <p className='main-text'>{t('tecnologias.mainText')}</p>
            </div>

            <div className="cascade-text">
                <h2>{t('tecnologias.services.itemOne.title')}</h2>
                <p>{t('tecnologias.services.itemOne.text')}</p>
            </div>

            <div className="cascade-img">
                <a href="/"><img src={dataSci} alt="Big Data"></img></a>
            </div>

            <div className="cascade-img">
                <a href="/"><img src={bussInt} alt="Big Data"></img></a>
            </div>

            <div className="cascade-text">
                <h2>{t('tecnologias.services.itemTwo.title')}</h2>
                <p>{t('tecnologias.services.itemTwo.text')}</p>
            </div>

            <div className="cascade-text">
                <h2>{t('tecnologias.services.itemThree.title')}</h2>
                <p>{t('tecnologias.services.itemThree.text')}</p>
            </div>

            <div className="cascade-img">
                <a href="/"><img src={artInt} alt="Big Data"></img></a>
            </div>
            
            <div></div>
            <div className="cascade-text">
                <h2>{t('tecnologias.services.itemFour.title')}</h2>
                <p>{t('tecnologias.services.itemFour.text')}</p>
            </div>
            <div></div>
        </section>
    )
}

export default ProductosCascada;