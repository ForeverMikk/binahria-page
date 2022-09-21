import React from 'react';
import { useTranslation } from 'react-i18next';

import './ContactHeader.css';
import Navbar from "../../../components/Navbar/Navbar";
import logo from '../../../assets/images/logo/logo-white.png'

const ContactHeader = () => {

    const { t } = useTranslation();

    return (
        <div className='contact-header' id='contact'>  
            <Navbar logo={logo}/>
            <div id="main-text" className='title'>
                <p>{t('contact.title')}</p>
            </div>
        </div>
    )
}

export default ContactHeader;