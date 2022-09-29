import React, { useEffect } from 'react';

import './ContactBottom.css';
import cubos from './../../../assets/videos/cubos.mp4';
import ContactField from './ContactField/ContactField';

const ContactBottom = () => {
    
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
                    <h3>Déjanos llevarte más lejos de lo que nunca has estado.</h3>
                    <button>PROGRAMA UNA REUNIÓN &rarr;</button>
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
                    <h3 className="title">CONTACTO</h3>
                    <ContactField title='Correo electrónico' description='Ventas, solicitudes y ofertas binahria.analytics@gmail.com' />
                    <ContactField title='Videollamadas' description='calendly/binahria' />
                </div>

                <div className="social second">
                    <div className="container uno">
                        <h3 className="title">LLAMADAS</h3>
                        <ContactField title='Teléfono' description='(+52) 55 2568 0859' />
                        <ContactField title='WhatsApp' description='(+52) 55 2568 0859' />
                    </div>

                    <div className="container dos">
                        <h3 className="title">HORARIO</h3>
                        <ContactField title='Lunes a viernes' description='8:00 - 10:00 hrs' />
                        <ContactField title='Sábados' description='8:00 - 12:00 hrs' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactBottom;