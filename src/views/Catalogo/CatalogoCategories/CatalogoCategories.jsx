import React from 'react';
import CategoriesDropdown from './CategoriesDropdown/CategoriesDropdown';
import { Link } from 'react-router-dom';

import './CatalogoCategories.css';
import Category from './Category/Category';
import arrow from '../../../assets/images/arrow-right.png';
import img1 from '../../../assets/images/code.jpg';

const options = [
    { value: 'category-1', label: 'Categoria 1', description: "este texto es de prueba", img: img1},
    { value: 'category-2', label: 'Categoria 2', description: "este texto es de prueba", img: img1},
    { value: 'category-3', label: 'Categoria 3', description: "este texto es de prueba", img: img1},
    { value: 'category-4', label: 'Categoria 4', description: "este texto es de prueba", img: img1},
    { value: 'category-5', label: 'Categoria 5', description: "este texto es de prueba", img: img1},
]

const scrollToElement = (id) => {
    const scrolledElement = document.getElementById(id);

    console.log('onchange')
    scrolledElement.scrollIntoView();
}

const CatalogoCategories = () => {
    return (
        <div className='catalog-categories'>
            {/* <h1>Categories</h1> */}
            <div className="categories">
                <CategoriesDropdown title='Categoría Político electoral' options={options} onChange={() => {scrollToElement('category-1')}}/>
                <CategoriesDropdown title='Categoría Gubernamental' options={options} onChange={() => {scrollToElement('category-2')}}/>
                <CategoriesDropdown title='Categoría Corporativa' options={options} onChange={() => {scrollToElement('category-3')}}/>
            </div>

            <Category title="Político Electoral" categories={options} id={1}/>
            <Category title="Político Gubernamental" categories={options} id={2} />
            <Category title="Político Corporativo" categories={options} id={3}/>

            <div className="down-menu">
                <h1 className='question'>
                    ¿Tienes alguna 
                    <br />
                    duda? Contáctate
                    <br />
                    para más detalles
                </h1>

                <div className="arrow">
                    <h3 className='arrow-title'>Ver fomurlario de contacto</h3>
                    <Link to='/contact'>
                        <img src={arrow} className='arrow' alt="Flecha de redirección" />
                    </Link>
                </div>

                <div className="arrow">
                    <h3 className='arrow-title'>Agenda una reunión</h3>
                   <Link to='/contact'>
                        <img src={arrow} alt="Flecha de redirección" />
                   </Link>
                </div>

                <Link to='/contact' className='contact'>
                    Contacto
                </Link>
            </div>
        </div>
    )
}

export default CatalogoCategories;