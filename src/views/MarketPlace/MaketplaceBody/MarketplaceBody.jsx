import React from 'react';

import './MarketplaceBody.css';
import graphic1 from '../../../assets/images/graphic_01.jpg';
import graphic2 from '../../../assets/images/graphic_02.jpg';
import graphic3 from '../../../assets/images/graphic_03.jpg';

import icon1 from '../../../assets/images/icons/icon1.svg';
import icon2 from '../../../assets/images/icons/icon2.svg';
import icon3 from '../../../assets/images/icons/icon3.svg';

const Benefit = ({title, icon, text}) => {
    return (
        <div className="benefit">
            <img src={icon} alt={title} className="icon" />
            <h3 className="benefit-title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}


const MarketplaceBody = () => {
    return (
        <div className="marketplace-body">

            <div className="body">

                <div className="images">
                    <img src={graphic1} alt="" className="graphic" />
                    <img src={graphic2} alt="" className="graphic" />
                    <img src={graphic3} alt="" className="graphic" />
                </div>

                <div className="resume">
                    <h2 className="title">
                        Cierra la brecha que
                        separa los datos
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur error voluptates, dignissimos recusandae iste deleniti libero! Obcaecati, provident. 
                    </p>
                </div>

            </div>

            <div className="benefits">

                <h2>/ BENEFICIOS</h2>

                <div className="content">
                    <Benefit 
                        icon={icon1}
                        title='Anális en segundos' 
                        text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.'
                    />
                    <Benefit 
                        icon={icon2}
                        title='Datos de todo tipo' 
                        text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.'
                    />
                    <Benefit 
                        icon={icon3}
                        title='Actualización automática' 
                        text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.'
                    />
                </div>

                <button>Programa una Reunion &rarr;</button>
            </div>
        </div>
    )
}

export default MarketplaceBody;