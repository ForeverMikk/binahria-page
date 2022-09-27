import React from 'react';
import { useTranslation } from 'react-i18next';


import './ContactForm.css';

const ContactForm = () => {

    const { t } = useTranslation();

    return (
        <section className='contact-form' >

            <h3 className="title">/ {t('contact.top')}</h3>

            <form action="">
                <label htmlFor="nombre">¿Cuál es tu nombre? *</label>
                <input type="text" name="nombre" id="nombre" placeholder='Escribe tu nombre completo' />

                <label htmlFor="correo">Dirección de correo electrónico *</label>
                <input type="email" name="correo" id="correo" placeholder='ejemplo@correo.com' />

                <label htmlFor="empresa">Compañía / institución</label>
                <input type="text" name="empresa" id="empresa" placeholder='Nombre de tu empresa o escuela' />

                <label htmlFor="telefono">¿Cómo escuchaste sobre nosotros? *</label>
                <input type="why" name="porque" id="porque" placeholder='ej. Redes sociales, recomendación personal, etc' />

                <label htmlFor="descripcion">¿Para qué deseas contactarte? *</label>
                <input type="text" name="descripcion" id="descripcion" placeholder='Porfavor describe tu solicitud a detalle' />


                <div className="bottom-form">
                    <p>Ve las <a href="https://binahria.com.mx/">Politicas de privacidad</a> </p>
                    <button>Enviar &rarr;</button>
                </div>
            </form>

        </section>
    )
}

export default ContactForm;