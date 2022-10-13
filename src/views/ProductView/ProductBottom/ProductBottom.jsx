import React from 'react';

import './ProductBottom.css';
import graphics from '../../../assets/images/graphics.jpg';

const ProductBottom = () => {
    return (
        <div className='product-bottom'>

            <h3>PROYECTO PREVIO: <span>TABLERO SAEKO</span> </h3>

            <div className="content">
                <img className='graphics-img' src={graphics} alt="" />

                <div className='text'>
                    <p>
                    Tablero Saeko es un producto 
                    que desarrollamos para que 
                    nuestros clientes tengan mejor 
                    percepción sobre los cambios 
                    financieros que sufre su empresa. Desde entonces ha evolucionado hasta convertirse en su 
                    herramienta “todo en uno” que 
                    muestra todo lo que las personas necesitan saber para administrar no solo su área contable, 
                    sino también su negocio.
                    </p>
                    <button>PROGRAMA UNA REUNIÓN &rarr;</button>
                </div>
            </div>

        </div>
    )
}

export default ProductBottom;