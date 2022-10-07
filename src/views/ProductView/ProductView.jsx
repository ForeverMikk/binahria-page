import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import ReactPlayer from 'react-player/youtube'
// import { useTranslation } from 'react-i18next';

import './ProductView.css'
import code from "../../assets/images/code.jpg";
import icon from '../../assets/images/hand-shake.png';
import Adventage from './Adventage/Adventage';
import ProductBottom from './ProductBottom/ProductBottom';
import { corporativos } from '../../variables/products';
import ProductHeader from './ProductHeader/ProductHeader';
import ValueCarrousel from './ValueCarroucel/ValueCarrousel';

const scrollToElement = (element) => {
    const scrolledElement = document.getElementById(element)

    scrolledElement.scrollIntoView()
}

const ProductView = () => {
    // const {t} = useTranslation();
    const { id } = useParams();
    const [product, setProduct] = useState('');
    
    useEffect(() => {
        // console.log(id)
        setProduct(corporativos[id]);
        // console.log('product', product);
        scrollToElement('product-view');
    }, [id])
    

    return(
        <>
        {<section className='product-view' id='product-view'>
            <ProductHeader />
 

            <div className='title'>
                <p className='name'> / CATÁLOGO  -  <span> {product.title} </span></p>

                <h2>La mejor forma de ver tu información</h2>
                <button>PROGRAMA UNA REUNIÓN &rarr;</button>
            </div>

            <div className='easy'>
                <img src={code} alt='Imagen de facilidades'></img>

                <div className='text'>
                    <h3>TUS DATOS MÁS FÁCIL</h3>
                    <p>{product.desciption}</p>
                </div>
            </div>

            <div className='how-works'>
                <h2>¿Cómo Funciona?</h2>
                <div>
                    {product && product.howItWorks.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>

                <img src={code} alt="Imagen de Codigo" />
            </div>
          
            {/* <div className='video'>
                <ReactPlayer url='https://www.youtube.com/watch?v=AEcZmMXRS4Q' width='100%' height='100%' />
            </div> */}

            <div className='adventages'>
                <h2>Ventajas de implementación</h2>
                
                <div className="container">
                    {product && product.adventages.map((item, index) => (
                        <Adventage 
                            key={index}
                            icon={icon} 
                            title='Ventaja' 
                            description={item} 
                        />
                    ))}

                </div>
            </div>

            {product && <ValueCarrousel values={product.value} />}

            <ProductBottom />

        </section>}
       
        </>
    )
}


export default ProductView;