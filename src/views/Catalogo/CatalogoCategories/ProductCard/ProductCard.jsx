import React from 'react';
import { Link } from "react-router-dom";

import './ProductCard.css';

const ProductCard = ({product, index, productType}) => {
    
    return (
        <div className='cat-card'>
            <p className='top-number'>/0{index+1}</p>
            <img src={product.cardIcon} alt={product.label} />
            <h3 className="card-title">{product.label}</h3>
            <p className="card-description">{product.description}</p>
            <Link className='watch-more' to={`/product/${productType}`} state={{id: index}}> Ver más &rarr; </Link>
        </div>
    )
}

export default ProductCard;