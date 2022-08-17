import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

import './Footer.css'

const Footer = () => {

    const { t } = useTranslation();

    return(
        <section id="footer">
            
            <div className="correo">
                <a href="conocenos"><span>{t('footer.title')}</span></a>
            </div>

            <div className="data">
                <div className="left">
                    <div className="direccion">
                        <a href="https://goo.gl/maps/X8b6jpc87EUSTdPt6" target="_blank" rel="noreferrer">
                            <span>Pachuca de Soto, Hgo.</span> 
                        </a>
                    </div>

                    <ul className="socials">
                        <li>
                            <a href="https://www.facebook.com/BinahriaAnalytics" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebook} color='white' size="2x"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/b1nahr1a/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagram} color='white' size="2x"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/b1nahr1a" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter} color='white' size="2x"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UC-lu1QPtQEZpzixBVSd6KQw" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faYoutube} color='white' size="2x"/>
                            </a>
                        </li>
                    </ul>
                    
                    <div className="copy">
                        <span>{t('footer.created')} &copy; Binahria Analytics</span>
                    </div>
                </div>


                <ul className="right">
                    <li>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>{t('footer.menu.itemOne')}</Link>
                    </li>
                    <li>
                        <Link to="/conocenos" style={{ textDecoration: 'none', color: 'white' }}>{t('footer.menu.itemTwo')}</Link>
                    </li>
                    <li>
                        <Link to="/tecnologias" style={{ textDecoration: 'none', color: 'white' }}>{t('footer.menu.itemThree')}</Link>
                    </li>
                    <li>
                        <Link to="/catalogo" style={{ textDecoration: 'none', color: 'white' }}>{t('footer.menu.itemFour')}</Link>
                    </li>
                </ul>

            </div>
            
        </section>
    )
}

export default Footer