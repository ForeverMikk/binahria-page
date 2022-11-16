import React from 'react';

import './MarketplaceBody.css';
import graphic1 from '../../../assets/images/graphic_01.jpg';
import graphic2 from '../../../assets/images/graphic_02.jpg';
import graphic3 from '../../../assets/images/graphic_03.jpg';

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

            </div>
        </div>
    )
}

export default MarketplaceBody;