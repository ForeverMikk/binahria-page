import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import './MarketProduct.css';
import logo from '../../assets/images/logo/logo-white.png';
import img from '../../assets/images/blank_image.png';

const MarketProduct = () => {
    return(
        <div className="market-product">
            <Navbar logo={logo}/>

            <div className="container">

                <div className="side-menu">
                    <h2 className="other">Otros productos</h2>
                    <input type="text" name="" id="" placeholder='Buscar'/>

                    <div className="categories">
                        <p>Ciencia e investigación</p>
                        <p>Fintech</p>
                        <p>Economía y finanzas</p>
                        <p>Ciencia e investigación</p>
                        <p>Fintech</p>
                        <p>Economía y finanzas</p>
                    </div>

                    <div className="support">
                        <h3 className="question">¿NO ESTÁ SEGURO DE LO QUE NECESITA?</h3>
                        <p> 
                            Nuestro equipo de soporte se encuentra
                            disponible de lunes a sábado, de 9:00 a 
                            18:00 hrs Centro de México.
                        </p>
                    </div>
                </div>
                
                <div className="article">
                    <h3 className="categorie-title">CIENCIA E INVESTIGACIÓN</h3>
                    <h1 className="title">Cierra la brecha que separa los datos</h1>
                    <p></p>
                    <p></p>

                    <span>Vista Previa</span>
                    <img src={img} alt="" className="cover" />
                </div>

            </div>
            
        </div>
    )
}

export default MarketProduct;