import React from 'react';


const MarketplaceProduct = () => {
    return (
        <div className="mkt-product">
            <img src="" alt="" />
            <div className="text">
                <h3 className="title">Investigación y Ciencia</h3>
                <p></p>

                <div className="date">
                    <p>Fecha de publicación</p>
                    <span>SEPTIEMBRE 2022</span>
                </div>

                <button>Más iformacion</button>
            </div>
        </div>
    )
}


const MarketplaceCatalog = () => {
    return (
        <div className="marketplace-catalog">
            <h2>/ TOP EN INVESTIGACIÓN</h2>

            <div className="selectors">
                <h3 className="politic">Política</h3>
                <h3 className="economy">Economía</h3>
                <h3 className="fintech">Fintech</h3>
            </div>

            <div className="products">
                <MarketplaceProduct />
            </div>
        </div>
    )
}


export default MarketplaceCatalog;