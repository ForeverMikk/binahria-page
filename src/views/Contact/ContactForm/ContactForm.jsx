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

            <h3 className="title">/ {t('contact.form.top')}</h3>

            <form action="" onChange={onChangeForm} onSubmit={(e) => handleSendEmail(e, contactInfo)}>

                <label htmlFor="nombre">{t('contact.form.name')} *</label>
                <input type="text" name="nombre" placeholder={t('contact.form.name-label')} required/>

                <label htmlFor="email">{t('contact.form.email')} *</label>
                <input type="email" name="email" placeholder={t('contact.form.email-label')} required/>
                
                <label htmlFor="telefono">{t('contact.form.phone')} *</label>
                <input type="tel" name="telefono" placeholder='(+52) 55 1234 5678' required/>

                
                <label htmlFor="compania">{t('contact.form.company')}</label>
                <input type="text" name="compania" placeholder={t('contact.form.company-label')} />
                
                <label htmlFor="estado">{t('contact.form.state')}</label>
                <input type="text" name="estado" placeholder={t('contact.form.state-label')} />

                <label htmlFor="intencion">{t('contact.form.why')} *</label>
                <input type="text" name="intencion" placeholder={t('contact.form.why-label')} required/>

                <label htmlFor="rastreo">{t('contact.form.how')} *</label>
                <input type="text" name="rastreo" placeholder={t('contact.form.how-label')} required/>


                <div className="bottom-form">
                    <p>
                        {t('contact.form.see')} 
                        <a href="https://binahria.com.mx/"> {t('contact.form.politics')}</a> 
                    </p>
                    <button>{t('contact.form.submit')} &rarr;</button>
                </div>
            </form>

        </section>
    )
}

export default ContactForm;