import React from 'react';

import './ContactBottom.css';
import ContactField from './ContactField/ContactField';

const ContactBottom = () => {
    return (
        <section className="contact-bottom">
            
            <div className="main">
                <div className="text">
                    <h3>Déjanos llevarte más lejos de lo que nunca has estado.</h3>
                    <button>PROGRAMA UNA REUNIÓN &rarr;</button>
                </div>
                <div className="video">

                </div>
            </div>

            <div className="social-media">
                
                <div className="social main">
                    <h3 className="title">CONTACTO</h3>
                    <ContactField title='Dirección' description='C. 20 de noviembre, Santiago Tlapacoya, Pachuca, Hgo' />
                    <ContactField title='Correo electrónico' description='Ventas, solicitudes y ofertas binahria.analytics@gmail.com' />
                </div>

                <div className="social second">

                    <div className="social uno">
                        <h3 className="title">LLAMADAS</h3>
                        <ContactField title='Teléfono' description='(+52) 55 2568 0859' />
                        <ContactField title='Videollamadas' description='calendly/binahria' />
                    </div>

                    <div className="social dos">
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