import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

import './Navbar.css'
// import logo from "../../assets/images/logo/BINAHRIA_logo-05.svg"

const Navbar = ({logo}) => {
    
    const { t, i18n } = useTranslation();

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
        setButtonClicked(!buttonClicked)
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    } 

    return (
        <nav className="navig">
            
            <div className="icon">
                <NavLink to='/' className='cursor-scale'>
                    <img className="logo" src={logo} alt="" ></img>
                </NavLink>
            </div>

            <button className="nav-button" onClick={handleClick}>
                <FontAwesomeIcon icon={buttonClicked ? faTimes : faBars} color='white' size="2x"/>
            </button>
            
            <ul className={buttonClicked ? 'menu active' : 'menu'}>
                <li>
                    <NavLink to="/conocenos" className='cursor-scale'> 
                        {t('navbar.conocenos')} 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/catalogo" className='cursor-scale'> 
                        {t('navbar.catalogo')} 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className='cursor-scale'> 
                        {t('navbar.contact')} 
                    </NavLink>
                </li>
                <li>
                    <button className='cursor-scale' onClick={() => {changeLanguage('es')}}>
                        Esp
                    </button>
                </li>
                <li>
                    <button className='cursor-scale' onClick={() => {changeLanguage('en')}}>
                        Eng
                    </button> 
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar