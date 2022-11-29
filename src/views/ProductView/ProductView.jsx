import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
// import ReactPlayer from 'react-player/youtube'
// import { useTranslation } from 'react-i18next';

import './ProductView.css'
import mainImg from '../../assets/images/home/IntNegocios_BW.jpg'
import Adventage from './Adventage/Adventage';
import ProductBottom from './ProductBottom/ProductBottom';
import { productList } from '../../variables/products';
import ProductHeader from './ProductHeader/ProductHeader';
import ValueCarrousel from './ValueCarroucel/ValueCarrousel';

const scrollToElement = (element) => {
    const scrolledElement = document.getElementById(element)

    scrolledElement.scrollIntoView()
}

const ProductView = () => {
    const { type } = useParams();
    const location  = useLocation();
    const state = location.state;
    const {id} = location.state;
    const [product, setProduct] = useState();
    

    useEffect(() => {
        console.log(type, state, id)
        if(type === 'politic'){
            setProduct(productList.politicos[state.id]);
        }
        else if (type === 'goberment') {
            setProduct(productList.gubernamentales[state.id])
        }
        else if (type === 'corporative') {
            setProduct(productList.corporativos[state.id])
        }
        else {
            alert("No existe esa categoria")
        }
        scrollToElement('product-view');
    }, [state, type])
    

    return(
        <>
        {<section className='product-view' id='product-view'>
            <ProductHeader />
 
            <div className='title'>
               {product && <p className='name'> / CATÁLOGO  -  <span> {product.label} </span></p>}

                {product && <h2>{product.header}</h2>}
                <button>PROGRAMA UNA REUNIÓN &rarr;</button>
            </div>

            <div className='easy'>
                <img src={mainImg} alt='Imagen de facilidades'></img>

                <div className='text'>
                    {product && <h3 className='subtitle'>{product.subtitle}</h3>}
                    {product && <p>{product.desciption}</p>}
                </div>
            </div>

            <div className='how-works'>
                <h2>¿Cómo Funciona?</h2>
                <div>
                    {product && product.howItWorks.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>

                { product && <img src={product.img} alt="Imagen de Codigo" />}
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
                            icon={item.icon} 
                            title={item.title} 
                            description={item.text} 
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