import React from 'react';
import { Widget } from '@typeform/embed-react';

import './ContactForm.css';

const ContactForm = () => {

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

export default ContactForm;