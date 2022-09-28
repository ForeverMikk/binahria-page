import React from 'react';

import './TestimonialCard.css';

const TestimonialCard = ({id, title, description, img}) => {
    return (
        <div className="testimonial-card">
            <span className='number'>/0{id}</span>
            <img src={img} alt={title} />
            <h2 className='title'>{title}</h2>
            <p className='description'>{description}</p>
        </div>
    )
}

export default TestimonialCard;