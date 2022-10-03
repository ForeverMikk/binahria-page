import React, { useEffect } from 'react';
// import ReactPlayer from 'react-player/youtube'
// import { useTranslation } from 'react-i18next';

import './ProductView.css'
import code from "../../assets/images/code.jpg";
import icon from '../../assets/images/hand-shake.png';
import logo from '../../assets/images/logo/logo-white.png';
import Navbar from '../../components/Navbar/Navbar';
import Adventage from './Adventage/Adventage';
import ProductBottom from './ProductBottom/ProductBottom';


const scrollToElement = (element) => {
    const scrolledElement = document.getElementById(element)

    scrolledElement.scrollIntoView()
}

const ProductHeader = () => {
    return (
        <div className='product-header'>  
            <Navbar logo={logo}/>
        </div>
    )
}

const ProductView = () => {
    
    // const {t} = useTranslation();

    useEffect(() => {
      scrollToElement('product-view');
    }, [])
    

    return(
        <>
        <section className='product-view' id='product-view'>
            <ProductHeader />

            <div className='title'>
                <p className='name'> / CATÁLOGO - <span>DASHBOARDS</span></p>

                <h2>La mejor forma de ver tu información</h2>
                <button>PROGRAMA UNA REUNIÓN &rarr;</button>
            </div>

            <div className='easy'>
                <img src={code} alt='Imagen de facilidades'></img>

                <div className='text'>
                    <h3>TUS DATOS MÁS FÁCIL</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat </p>
                </div>
            </div>

            <div className='how-works'>
                <h2>¿Cómo Funciona?</h2>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <img src={code} alt="Imagen de Codigo" />
            </div>
          
            {/* <div className='video'>
                <ReactPlayer url='https://www.youtube.com/watch?v=AEcZmMXRS4Q' width='100%' height='100%' />
            </div> */}

            <div className='adventages'>
                <h2>Ventajas de implementación</h2>
                
                <div className="container">
                    <Adventage icon={icon} title='Anális en segundos' description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut' />
                    <Adventage icon={icon} title='Anális en segundos' description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut' />
                    <Adventage icon={icon} title='Anális en segundos' description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut' />
                    <Adventage icon={icon} title='Anális en segundos' description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut' />
                    <Adventage icon={icon} title='Anális en segundos' description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut' />
                    <Adventage icon={icon} title='Anális en segundos' description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut' />
                </div>

            </div>

            <ProductBottom />

        </section>
       
        </>
    )
}


export default ProductView;