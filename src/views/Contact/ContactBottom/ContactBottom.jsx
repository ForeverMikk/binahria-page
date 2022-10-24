import React, { useEffect } from 'react';
import { PopupButton } from 'react-calendly';

import './ContactBottom.css';
import cubos from './../../../assets/videos/cubos.mp4';
import ContactField from './ContactField/ContactField';
import { useTranslation } from 'react-i18next';

const ContactBottom = () => {
    
    const { t } = useTranslation();

    useEffect(() => {
        let height = document.getElementById('contact-bottom');
        let video = document.getElementById('v0')

        const registerVideo = (height, video) => {
            const scrollVideo = () => {
                if (video.duration) {
                    const distanceFromTop = window.scrollY + height.getBoundingClientRect().top;
                    const rawPercentScrolled = (window.scrollY - distanceFromTop) / (height.scrollHeight - window.innerHeight);
                    const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

                    video.currentTime = video.duration * percentScrolled;
                }
                window.requestAnimationFrame(scrollVideo);
            }
            window.requestAnimationFrame(scrollVideo);
        }
        registerVideo(height, video);
    }, [])
    
    return (
        <section className="contact-bottom" id='contact-bottom'>
            
            <div className="main">
                <div className="text">
                    <h3>{t('contact.bottom.title')}</h3>
                    <PopupButton
                        url='https://calendly.com/binahria-analytics/'
                        rootElement={document.getElementById("root")}
                        text={`${t('contact.bottom.schedule-button')} →`}
                        styles={{transition: "all 0.5s ease"}}
                        className='schedule-button'
                    />
                </div>

                <div className="video" id='video'>
                    <div className="set-height" id='set-height'></div>
                    <video id='v0' tabIndex="0" autoBuffer preload >
                        <source type='video/mp4' src={cubos} />
                    </video>
                </div>
            </div>

            <div className="social-media">
                
                <div className="social main">
                    <h3 className="title">{t('contact.bottom.contact')}</h3>
                    <ContactField 
                        title={t('contact.bottom.email')} 
                        description={`${t('contact.bottom.email-label')} binahria.analytics@gmail.com`} />
                    
                    <ContactField title={t('contact.bottom.videocall')}  />
                    <PopupButton
                        url='https://calendly.com/binahria-analytics/'
                        rootElement={document.getElementById("root")}
                        text="calendly.com/binahria-analytics/"
                        className='video-call'
                    />
                </div>

                <div className="social second">
                    <div className="container uno">
                        <h3 className="title">{t('contact.bottom.calls')}</h3>
                        <ContactField title={t('contact.bottom.phone')} description='(+52) 55 2568 0859' />
                        <a href='https://wa.me/5526680859/?text=Comunicate%20con%20nosotros' target='_blank' rel="noreferrer" style={{color: '#fff'}}>
                            <ContactField title='WhatsApp' description='(+52) 55 2568 0859' />
                        </a>
                    </div>

                    <div className="container dos">
                        <h3 className="title">{t('contact.bottom.schedule')}</h3>
                        <ContactField title={t('contact.bottom.days')} description='8:00 - 17:00 hrs' />
                        <ContactField title={t('contact.bottom.saturday')} description='8:00 - 12:00 hrs' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactBottom;