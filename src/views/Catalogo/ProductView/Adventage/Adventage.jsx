import React from 'react';

import './Adventage.css';

const Adventage = ({icon, title, description}) => {
    return (
        <div className='adventage'>
            <img src={icon} alt={title} className="icon" />
            
            <div className="text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Adventage;