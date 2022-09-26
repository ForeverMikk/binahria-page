import React from 'react';
import { Link } from 'react-router-dom';

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

// const scrollToElement = (id) => {
//     const scrolledElement = document.getElementById(id);

//     console.log('onchange')
//     scrolledElement.scrollIntoView();
// }

const CatalogoCategories = () => {
    return (
        <div className='catalog-categories'>
            {/* <h1>Categories</h1> */}
            <div className="categories">
                <CategoryButton title='Categoría Político Electoral' background={bg1}/>
                <CategoryButton title='Categoría Gubernamental' background={bg2}/>
                <CategoryButton title='Categoría Corporativa' background={bg3}/>
            </div>

            <CategoryCarousel title="Político Electoral" categories={options} id={1} background='#000'/>
            <CategoryCarousel title="Político Gubernamental" categories={options} id={2} background='#9147FB' />
            <CategoryCarousel title="Político Corporativo" categories={options} id={3} background='#E8E8E8' />

            <div className="down-menu">
                <h1 className='question'>
                    ¿Tienes alguna duda? 
                    <br />
                    <span> Contáctate para más detalles</span>
                </h1>

                <div className="links">    
                    <Link to='/contact'>
                        <h3 className='arrow'>Contactanos</h3>
                    </Link>
                    
                    <Link to='/contact'>
                        <h3 className='arrow'>Agenda una reunión</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CatalogoCategories;