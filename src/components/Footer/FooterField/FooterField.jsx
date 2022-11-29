import React from 'react';

import './FooterField.css';

const FooterField = ({title, description}) => {
    return <div className='footer-field'>
        <h4 className='title'>{title}</h4>
        <p className='description'>{description}</p>
    </div>
}

export default FooterField;