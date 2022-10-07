import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { sendEmail } from '../../../services/emailService';


import './ContactForm.css';

const ContactForm = () => {

    const { t } = useTranslation();
    const [contactInfo, setContactInfo] = useState(
        {
            nombre: '',
            email: '',
            telefono: '',
            estado: '',
            intencion: '',
            rastreo: '',
            compania: ''
        }
    )

    const onChangeForm = (e) => {
        const value = e.target.value;

        setContactInfo({
            ...contactInfo,
            [e.target.name]: value
        })
    }

    const handleSendEmail = async( e, data ) => {
        console.log('Send');
        e.preventDefault();

        await sendEmail( data );
    }

    useEffect(() => {
      console.log(contactInfo);
    }, [contactInfo])
    
  
    return (
        <section className='contact-form' >

            <h3 className="title">/ {t('contact.top')}</h3>

            <form action="" onChange={onChangeForm} onSubmit={(e) => handleSendEmail(e, contactInfo)}>

                <label htmlFor="nombre">¿Cuál es tu nombre? *</label>
                <input type="text" name="nombre" placeholder='Escribe tu nombre completo' required/>

                <label htmlFor="email">Dirección de correo electrónico *</label>
                <input type="email" name="email" placeholder='ejemplo@correo.com' required/>
                
                <label htmlFor="telefono">Número teléfonico *</label>
                <input type="tel" name="telefono" placeholder='(+52) 55 1234 5678' required/>

                
                <label htmlFor="compania">Compañía / institución</label>
                <input type="text" name="compania" placeholder='Nombre de tu empresa o escuela' />
                
                <label htmlFor="estado">Estado o Provincia</label>
                <input type="text" name="estado" placeholder='Nombre de tu estado o ciudad' />

                <label htmlFor="intencion">¿Para qué deseas contactarte? *</label>
                <input type="text" name="intencion" placeholder='ej. Redes sociales, recomendación personal, etc' required/>

                <label htmlFor="rastreo">¿Cómo escuchaste sobre nosotros? *</label>
                <input type="text" name="rastreo" placeholder='Porfavor describe tu solicitud a detalle' required/>


                <div className="bottom-form">
                    <p>Ve las <a href="https://binahria.com.mx/">Politicas de privacidad</a> </p>
                    <button>Enviar &rarr;</button>
                </div>
            </form>

        </section>
    )
}

export default ContactForm;