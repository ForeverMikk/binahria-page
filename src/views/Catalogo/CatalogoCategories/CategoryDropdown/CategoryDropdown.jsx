import React from 'react';
// import Popup from 'reactjs-popup';
// import Select from 'react-select';

import './CategoryDropdown.css';

const scrollToElement = (element) => {
    const scrolledElement = document.getElementById(element);

    scrolledElement.scrollIntoView();
}

const CategoryDropdown = ({title,  background, options, id}) => {

    return (
        <div className="dropdown-card">
            
            <button className='dropdown-img' style={{backgroundImage: `url(${background})`}}>
                <h1>{title}</h1>
            </button> 

            <div className="content">
                <div className="dropdown-list">
                    {options && options.map(({label}, index)=> 
                        <button key={index} onClick={() => scrollToElement(`category-${id}`)}>
                            {label}
                        </button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default CategoryDropdown;