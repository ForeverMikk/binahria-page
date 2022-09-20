import React from 'react';
// import Select from 'react-select';

import './CategoryButton.css';

const CategoryButton = ({title,  background}) => {
    return (
        <button className='category-button' style={{backgroundImage: `url(${background})`}}>
            <h1>{title}</h1>
        </button>
    )
}

export default CategoryButton;