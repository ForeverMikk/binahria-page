import React from 'react';

import './CatalogoCategories.css';
import img1 from '../../../assets/images/category-img.png';
import bg1 from '../../../assets/images/category-1.png';
import bg2 from '../../../assets/images/category-2.png';
import bg3 from '../../../assets/images/category-3.png';

import CategoryCarousel from './CategoryCarousel/CategoryCarousel';
import CategoryButton from './CategoryButton/CategoryButton';

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

                <CategoryButton title='Categoría Político Electoral' background={bg1} options={options}/>
                <CategoryButton title='Categoría Gubernamental' background={bg2} options={options}/>
                <CategoryButton title='Categoría Corporativa' background={bg3} options={options}/>
            </div>

            <CategoryCarousel title="Político Electoral" categories={options} id={1} background='#000'/>
            <CategoryCarousel title="Político Gubernamental" categories={options} id={2} background='#9147FB' />
            <CategoryCarousel title="Político Corporativo" categories={options} id={3} background='#E8E8E8' />
        </div>
    )
}

export default CatalogoCategories;