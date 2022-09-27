import React, { useEffect } from 'react';
// import { InlineWidget } from 'react-calendly'

import './Contact.css';
import ContactBottom from './ContactBottom/ContactBottom';
import ContactForm from './ContactForm/ContactForm';
import ContactHeader from './ContactHeader/ContactHeader';

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
            <ContactForm />
            <ContactBottom />
        </>
    )
}

export default Contact;