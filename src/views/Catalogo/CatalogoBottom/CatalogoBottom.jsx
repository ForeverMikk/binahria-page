import React from 'react';
import { Link } from 'react-router-dom';

const CatalogoBottom = () => {
    return (
        <div className="catalog-bottom">
            <h1 className='question'>
                ¿Tienes alguna duda? 
                <br />
                <span>Contáctate para más detalles</span>
            </h1>

            <div className="links">    
                <Link to='/contact' className=''>
                    <h3 className='arrow'>Contactanos</h3>
                    <span>+ info</span>
                </Link>
                
                <Link to='/contact'>
                    <h3 className='arrow'>Agenda una reunión</h3>
                    <span>+ info</span>
                </Link>
            </div>
        </div>
    )
}

export default CatalogoBottom