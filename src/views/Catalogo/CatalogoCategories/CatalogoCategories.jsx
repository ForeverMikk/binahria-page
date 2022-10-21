import React from 'react';

import './CatalogoCategories.css';
import bg1 from '../../../assets/images/category-1.png';
import bg2 from '../../../assets/images/category-2.png';
import bg3 from '../../../assets/images/category-3.png';
import { corporativos, gubernamentales, politicos } from '../../../variables/products';

import CategoryCarousel from './CategoryCarousel/CategoryCarousel';
import CategoryDropdown from './CategoryDropdown/CategoryDropdown';

console.log(corporativos, gubernamentales, politicos)
const CatalogoCategories = () => {
    return (
        <div className='catalog-categories'>
            {/* <h1>Categories</h1> */}
            <div className="categories">
                {/* <Select options={options} /> */}

                <CategoryDropdown title='Categoría Político Electoral' background={bg1} options={politicos} id={1}/>
                <CategoryDropdown title='Categoría Gubernamental' background={bg2} options={gubernamentales} id={2}/>
                <CategoryDropdown title='Categoría Corporativa' background={bg3} options={corporativos} id={3}/>
            </div>

            <CategoryCarousel 
                id={1} 
                title="Político Electoral" 
                background='#000'
                products={politicos}
                productType='politic'
            />
            
            <CategoryCarousel 
                id={2} 
                title="Gubernamental" 
                background='#9147FB' 
                products={gubernamentales}
                productType='goberment'
            />
            
            <CategoryCarousel 
                id={3} 
                title="Corporativo" 
                background='#E8E8E8' 
                products={corporativos}
                productType='corporative'
            />

        </div>
    )
}

export default CatalogoCategories;