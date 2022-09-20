import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { InlineWidget } from 'react-calendly'

import './Contact.css';
import Navbar from '../../components/Navbar/Navbar';

const ContactHeader = () => {

    const { t } = useTranslation();

    return (
        <div className='contact-header' id='contact'>  
            <Navbar />
            <div id="main-text" className='title'>
                <p>{t('contact.title')}</p>
            </div>
        </div>
    )
}

const Contact = () => {

    useEffect(() => {
        const scrollTop = () => {
            const scrolledElement = document.getElementById('contact');
        
            scrolledElement.scrollIntoView();
        }
        
        scrollTop();
    }, [])

    return (
        <>
            <ContactHeader />
            <section className='contact' >
                <form action="">
                    <input type="text" name="nombre" id="nombre" placeholder='Nombre' />
                    <input type="email" name="correo" id="correo" placeholder='Correo electrónico' />
                    <input type="tel" name="telefono" id="telefono" placeholder='Telefóno' />
                    <input type="text" name="empresa" id="empresa" placeholder='Empresa' />
                    <input type="text" name="estado" id="estado" placeholder='Estado' />
                    <input type="text" name="descripcion" id="descripcion" placeholder='Motivos de Contacto' />
                    <button>Enviar</button>
                </form>

                <div className="calendly">
                    <h2>Agenda una reunión</h2>
                    <InlineWidget url='https://calendly.com/binahria-analytics' />
                </div>

            </section>
        </>
    )
}

export default Contact;