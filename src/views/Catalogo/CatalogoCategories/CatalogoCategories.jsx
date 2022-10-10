import React from 'react';

import './CatalogoCategories.css';
import img1 from '../../../assets/images/category-img.png';
import bg1 from '../../../assets/images/category-1.png';
import bg2 from '../../../assets/images/category-2.png';
import bg3 from '../../../assets/images/category-3.png';
import { corporativos, gubernamentales, politicos } from '../../../variables/products';

import CategoryCarousel from './CategoryCarousel/CategoryCarousel';
import CategoryDropdown from './CategoryDropdown/CategoryDropdown';

const options = [
    { value: 'category-1', label: 'Categoria 1', description: "este texto es de prueba", img: img1},
    { value: 'category-2', label: 'Categoria 2', description: "este texto es de prueba", img: img1},
    { value: 'category-3', label: 'Categoria 3', description: "este texto es de prueba", img: img1},
    { value: 'category-4', label: 'Categoria 4', description: "este texto es de prueba", img: img1},
    { value: 'category-5', label: 'Categoria 5', description: "este texto es de prueba", img: img1},
]

const CatalogoCategories = () => {
    return (
        <div className='catalog-categories'>
            {/* <h1>Categories</h1> */}
            <div className="categories">
                {/* <Select options={options} /> */}

                <CategoryDropdown title='Categoría Político Electoral' background={bg1} options={options} id={1}/>
                <CategoryDropdown title='Categoría Gubernamental' background={bg2} options={options} id={2}/>
                <CategoryDropdown title='Categoría Corporativa' background={bg3} options={options} id={3}/>
            </div>

            <CategoryCarousel 
                id={1} 
                title="Político Electoral" 
                categories={options} 
                background='#000'
                products={politicos}
                productType='politic'
            />
            
            <CategoryCarousel 
                id={2} 
                title="Político Gubernamental" 
                categories={options} 
                background='#9147FB' 
                products={gubernamentales}
                productType='goberment'
            />
            
            <CategoryCarousel 
                id={3} 
                title="Político Corporativo" 
                categories={options} 
                background='#E8E8E8' 
                products={corporativos}
                productType='corporative'
            />

        </div>
    )
}

export default CatalogoCategories;