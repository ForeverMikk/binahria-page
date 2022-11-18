import React from 'react';

import './MarketplaceProduct.css';

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

                <button>Más información &rarr;</button>
            </div>
        </div>
    )
}

export default MarketplaceProduct;