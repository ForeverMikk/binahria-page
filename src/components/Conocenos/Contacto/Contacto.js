import React from 'react';
import { Widget } from '@typeform/embed-react';

import './Contacto.css';

const Contacto = () => {

  

    return(
        <section className='formulario'>
            <Widget 
                id='adUyCxim' 
                className='my-form' 
                source='//embed.typeform.com/next/embed.js' 
                style={{height: '100vh'}}  
                data-tf-inline-on-mobile
            />
        </section>
    )
}

export default Contacto;