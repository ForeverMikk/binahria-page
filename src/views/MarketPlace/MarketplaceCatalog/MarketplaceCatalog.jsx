import React from 'react';

import './MarketplaceCatalog.css';
import img from '../../../assets/images/graphic_01.jpg'

const MarketplaceProduct = ({img, title, description, date}) => {
    return (
        <div className="mkt-product">
            <img src={img} alt={title} />

            <div className="content">
                <h3 className="title">{title}</h3>
                <p>{description}</p>

                <div className="date">
                    <p>Fecha de publicación</p>
                    <span>{date}</span>
                </div>

                <button>Más iformacion &rarr;</button>
            </div>
        </div>
    )
}


const MarketplaceCatalog = () => {
    return (
        <div className="marketplace-catalog">
            <h2>/ TOP EN INVESTIGACIÓN</h2>

            <div className="selectors">
                <div className="underline">
                    <h3 className="politic">Política</h3>
                </div>

                <div className="underline">
                    <h3 className="economy">Economía</h3>
                </div>

                <div className="underline">
                    <h3 className="fintech">Fintech</h3>
                </div>
            </div>

            <div className="products">
                <MarketplaceProduct 
                    title='Investigación y Ciencia' 
                    description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                    date='SEPTIEMBRE 2022'
                    img={img}
                />
                <MarketplaceProduct 
                    title='Investigación y Ciencia' 
                    description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                    date='SEPTIEMBRE 2022'
                    img={img}
                />
                <MarketplaceProduct 
                    title='Investigación y Ciencia' 
                    description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                    date='SEPTIEMBRE 2022'
                    img={img}
                />
                <MarketplaceProduct 
                    title='Investigación y Ciencia' 
                    description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                    date='SEPTIEMBRE 2022'
                    img={img}
                />
            </div>
        </div>
    )
}


export default MarketplaceCatalog;