import React from 'react';

import './ProductBottom.css';
import graphics from '../../../assets/images/graphics.jpg';

const ProductBottom = () => {
    return (
        <div className='product-bottom'>
            <h2 className='titulo'>
                <span>/ 01</span>
                <br />
                Haz análisis enriquecidos
                <br />
                y comparte los datos más
                <br />
                importantes con tus colegas
            </h2>

            <img src={graphics} alt="" />

            <div className='text'>
                <h3>PROYECTOS</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat 
                </p>
                <button>PROGRAMA UNA REUNIÓN &rarr;</button>

            </div>
        </div>
    )
}

export default ProductBottom;