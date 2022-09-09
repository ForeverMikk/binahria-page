import React from 'react';
import CategoriesDropdown from './CategoriesDropdown/CategoriesDropdown';

import './CatalogoCategories.css';
import Category from './Category/Category';
import arrow from '../../../assets/images/arrow-right.png';
import img1 from '../../../assets/images/mexico.png';

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
                <CategoriesDropdown title='Categoría Político electoral' options={options}/>
                <CategoriesDropdown title='Categoría Gubernamental' options={options}/>
                <CategoriesDropdown title='Categoría Corporativa' options={options}/>
            </div>

            <Category title="Político Electoral" categories={options} />
            <Category title="Político Electoral" categories={options} />
            <Category title="Político Electoral" categories={options} />

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
                    <img src={arrow} className='arrow' alt="Flecha de redirección" />
                </div>

                <div className="arrow">
                    <h3 className='arrow-title'>Agenda una reunión</h3>
                    <img src={arrow} alt="Flecha de redirección" />
                </div>

                <button className='contact'>
                    Contacto
                </button>
            </div>
        </div>
    )
}

export default CatalogoCategories;