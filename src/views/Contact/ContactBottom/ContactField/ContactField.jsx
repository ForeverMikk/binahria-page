import React from 'react';

const ContactField = ({title, description}) => {
    return <div className='contact-field'>
        <h4 className='title'>{title}</h4>
        <p className='description'>{description}</p>           
    </div>
}

export default ContactField;