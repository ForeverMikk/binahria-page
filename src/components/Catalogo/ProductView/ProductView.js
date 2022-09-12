import React, { useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player/youtube'
// import { useTranslation } from 'react-i18next';

import './ProductView.css'
import header from '../../../assets/images/code.jpg';
import img from '../../../assets/images/IntArtificial_Col.jpg'
import Navbar from '../../Navbar/Navbar';


const scrollToElement = (element) => {
    const scrolledElement = document.getElementById(element)

    scrolledElement.scrollIntoView()
}


const ProductView = () => {

    // const {t} = useTranslation();

    useEffect(() => {
      scrollToElement('product-view');
    }, [])
    

    return(
        <>
        <section className='product-view' id='product-view'>
            <Navbar />

            <div className='header'>
                <img src={header} alt='Header del Producto'/>

                <h2>Nombre del Producto</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className='how-works'>
                <h2>¿Cómo Funciona?</h2>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
          
            <div className='video'>
                <ReactPlayer url='https://www.youtube.com/watch?v=AEcZmMXRS4Q' width='100%' height='100%' />
            </div>

            <div className='adventages'>
                <img src={img} alt='Imagen de ventajas'/>

                <div className='text'> 
                    <h2>Ventajas de implementación</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <br />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>

            <h2>Valor añadido</h2>
            <div className='add-value'>    
                <div className='valor'>
                    <img src={img} alt='valor 1'/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>

                <div className='valor'>
                    <img src={img} alt='valor 1'/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
            </div>

        </section>
       
        </>
    )
}


export default ProductView;