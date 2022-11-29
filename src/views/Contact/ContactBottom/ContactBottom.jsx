import React, { useEffect } from 'react';
import { PopupButton } from 'react-calendly';

import './ContactBottom.css';
import cubos from './../../../assets/videos/cubos.mp4';
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

        </section>
    )
}

export default ContactBottom;