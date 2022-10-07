import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { sendEmail } from '../../../services/emailService';


import './ContactForm.css';

const ContactForm = () => {

    const { t } = useTranslation();
    const [contactInfo, setContactInfo] = useState(
        {
            nombre: "",
            email: "",
            telefono: "",
            estado: "",
            intencion: "",
            rastreo: "",
            compania: ""
        }
    )

    const onChangeForm = (e) => {
        const value = e.target.value;

        setContactInfo({
            ...contactInfo,
            [e.target.name]: value
        })
    }

    const handleSendEmail = async( e, mailData ) => {
        console.log('Send');
        e.preventDefault();

        await sendEmail({
            data: mailData
        });
    }

    useEffect(() => {
      console.log(contactInfo)
    }, [contactInfo])
    

    return (
        <section className='contact-form' >

            <h3 className="title">/ {t('contact.top')}</h3>

            <form action="" onChange={onChangeForm} onSubmit={handleSendEmail}>

                <label htmlFor="nombre">¿Cuál es tu nombre? *</label>
                <input type="text" name="nombre" id="nombre" value={contactInfo.nombre} placeholder='Escribe tu nombre completo' required/>

                <label htmlFor="correo">Dirección de correo electrónico *</label>
                <input type="email" name="correo" id="correo" value={contactInfo.email} placeholder='ejemplo@correo.com' required/>
                
                <label htmlFor="telefono">Número teléfonico *</label>
                <input type="tel" name="telefono" id="telefono" value={contactInfo.telefono} placeholder='(+52) 55 1234 5678' required/>

                
                <label htmlFor="empresa">Compañía / institución</label>
                <input type="text" name="empresa" id="empresa" value={contactInfo.compania} placeholder='Nombre de tu empresa o escuela' />
                
                <label htmlFor="ciudad">Estado o Provincia</label>
                <input type="text" name="ciudad" id="ciudad" value={contactInfo.estado} placeholder='Nombre de tu estado o ciudad' />

                <label htmlFor="porque">¿Cómo escuchaste sobre nosotros? *</label>
                <input type="text" name="porque" id="porque" value={contactInfo.intencion} placeholder='ej. Redes sociales, recomendación personal, etc' required/>

                <label htmlFor="descripcion">¿Para qué deseas contactarte? *</label>
                <input type="text" name="descripcion" id="descripcion" value={contactInfo.rastreo} placeholder='Porfavor describe tu solicitud a detalle' required/>


                <div className="bottom-form">
                    <p>Ve las <a href="https://binahria.com.mx/">Politicas de privacidad</a> </p>
                    <button>Enviar &rarr;</button>
                </div>
            </form>

        </section>
    )
}

export default ContactForm;