import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

import './Navbar.css'
import logo from "../../assets/images/logo/BINAHRIA_logo-05.svg"
import mexico from '../../assets/images/mexico.png';
import usa from '../../assets/images/united-states.png';

const Navbar = () => {
    
    const { t, i18n } = useTranslation();

    const [buttonClicked, setButtonClicked] = useState(true)

    const handleClick = () => {
        setButtonClicked(!buttonClicked)
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    } 

    return (
        <nav className="navig">
            
            <div className="icon">
                <a href="/"><img className="logo" src={logo} alt="" ></img></a>
            </div>

            <button className="nav-button" onClick={handleClick}>
                <FontAwesomeIcon icon={buttonClicked ? faBars : faTimes} color='white' size="2x"/>
            </button>
            
            <ul className={buttonClicked ? 'menu' : 'menu active'}>
                <li>
                    <NavLink to="/conocenos" style={{ textDecoration: 'none', color: 'white' }}> {t('navbar.conocenos')} </NavLink>
                </li>
                <li>
                    <NavLink to="/catalogo" style={{ textDecoration: 'none', color: 'white' }}> {t('navbar.catalogo')} </NavLink>
                </li>
                <li>
                    <button onClick={() => {changeLanguage('es')}} style={{background: 'none', border: 'none'}}>
                        <img className='flag' src={mexico} alt='Bandera de Mexico'/>
                    </button>
                </li>
                <li>
                    <button onClick={() => {changeLanguage('en')}} style={{background: 'none', border: 'none'}}>
                        <img className='flag' src={usa} alt='Bandera de USA' />
                    </button> 
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar