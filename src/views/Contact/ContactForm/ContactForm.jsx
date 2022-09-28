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
                <input type="text" name="nombre" id="nombre" placeholder='Escribe tu nombre completo' required/>

                <label htmlFor="correo">Dirección de correo electrónico *</label>
                <input type="email" name="correo" id="correo" placeholder='ejemplo@correo.com' required/>
                
                <label htmlFor="telefono">Número teléfonico *</label>
                <input type="tel" name="telefono" id="telefono" placeholder='(+52) 55 1234 5678' required/>

                
                <label htmlFor="empresa">Compañía / institución</label>
                <input type="text" name="empresa" id="empresa" placeholder='Nombre de tu empresa o escuela' />
                
                <label htmlFor="ciudad">Estado o Provincia</label>
                <input type="text" name="ciudad" id="ciudad" placeholder='Nombre de tu estado o ciudad' />

                <label htmlFor="porque">¿Cómo escuchaste sobre nosotros? *</label>
                <input type="why" name="porque" id="porque" placeholder='ej. Redes sociales, recomendación personal, etc' required/>

                <label htmlFor="descripcion">¿Para qué deseas contactarte? *</label>
                <input type="text" name="descripcion" id="descripcion" placeholder='Porfavor describe tu solicitud a detalle' required/>


                <div className="bottom-form">
                    <p>Ve las <a href="https://binahria.com.mx/">Politicas de privacidad</a> </p>
                    <button>Enviar &rarr;</button>
                </div>
            </form>

        </section>
    )
}

export default ContactForm;