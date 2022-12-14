import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PopupButton } from "react-calendly";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

import './Footer.css'
import logo from '../../assets/images/logo/logo-white.svg';
import FooterField from "./FooterField/FooterField";

const Footer = () => {

    const { t } = useTranslation();

    return(
        <section id="footer" className="footer">
            
            <img src={logo} alt="" className="logo" />

            <div className="data">
                <div className="left">
                    <h3 className="navegacion">NAVEGACIÓN</h3>
                    <ul className="footer-menu">
                        <li>
                            <Link to="/">{t('footer.menu.itemOne')}</Link>
                        </li>
                        <li>
                            <Link to="/conocenos">{t('footer.menu.itemTwo')}</Link>
                        </li>
                        <li>
                            <Link to="/tecnologias">{t('footer.menu.itemThree')}</Link>
                        </li>
                        <li>
                            <Link to="/catalogo">{t('footer.menu.itemFour')}</Link>
                        </li>
                        <li>
                            <Link to="/marketplace">{t('footer.menu.itemFive')}</Link>
                        </li>
                        <li>
                            <Link to="/data">{t('footer.menu.itemSix')}</Link>
                        </li>
                    </ul>


                    <div className="copy">
                        <span>{t('footer.created')} &copy; Binahria Analytics</span>
                    </div>
                </div>

                <div className="right">

                    <div className="contact">
                        <h3 className="title">{t('footer.contact')}</h3>
                        <FooterField title={t('footer.address')} description='C. 20 de noviembre, Santiago Tlapacoya, Pachuca, Hgo' />

                        <FooterField title={t('footer.email')} description={`${t('footer.email-label')} binahria.analytics@gmail.com`} />
                        
                        <a href="https://wa.me/7714141066" target='_blank' rel="noreferrer" style={{color: '#fff'}}>
                            <FooterField title='WhatsApp' description='(+52) 55 2568 0859' />
                        </a>
                        
                        <FooterField title={t('footer.videocall')}  style={{marginBottom: '0'}}/>
                        <PopupButton
                            url='https://calendly.com/binahria-analytics/'
                            rootElement={document.getElementById("root")}
                            text="calendly.com/binahria-analytics/"
                            className='video-call'
                        />
                    </div>

                    <div className="schedule">
                        <h3 className="title">{t('footer.schedule')}</h3>
                        <FooterField title={t('footer.days')} description='8:00 - 17:00 hrs' />
                        <FooterField title={t('footer.saturday')} description='8:00 - 12:00 hrs' />

                        <div className="social-media">
                            <a href="https://www.facebook.com/BinahriaAnalytics" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebook} color='white' size="2x"/>
                            </a>

                            <a href="https://www.instagram.com/b1nahr1a/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagram} color='white' size="2x"/>
                            </a>

                            <a href="https://twitter.com/b1nahr1a" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter} color='white' size="2x"/>
                            </a>

                            <a href="https://www.youtube.com/channel/UC-lu1QPtQEZpzixBVSd6KQw" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faYoutube} color='white' size="2x"/>
                            </a>
                        </div>
                    </div>
                </div>
                    
            </div>
        </section>
    )
}

export default Footer