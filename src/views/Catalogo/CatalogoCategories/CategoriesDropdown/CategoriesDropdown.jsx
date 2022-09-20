import React from 'react';
import Select from 'react-select';

import './CategoriesDropdown.css';

const CategoriesDropdown = ({title, options}) => {
    return (
        <div className='cat-dropdown'>
            <h1>{title}</h1>

            <Select className='dropdown' options={options} />
        </div>
    )
}

export default CategoriesDropdown;