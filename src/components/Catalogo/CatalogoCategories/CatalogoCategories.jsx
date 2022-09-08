import React from 'react';
import CategoriesDropdown from './CategoriesDropdown/CategoriesDropdown';

import './CatalogoCategories.css';

const options = [
    { value: 'category-1', label: 'Categoria 1'},
    { value: 'category-2', label: 'Categoria 2'},
    { value: 'category-3', label: 'Categoria 3'},
]

const CatalogoCategories = () => {
    return (
        <div className='catalog-categories'>
            <h1>Categories</h1>
            <div className="categories">
                <CategoriesDropdown title='Categoría Político electoral' options={options}/>
                <CategoriesDropdown title='Categoría Gubernamental' options={options}/>
                <CategoriesDropdown title='Categoría Corporativa' options={options}/>
            </div>
        </div>
    )
}

export default CatalogoCategories;