import React from 'react';
// import Popup from 'reactjs-popup';
// import Select from 'react-select';

import './CategoryDropdown.css';

const CategoryDropdown = ({title,  background, options}) => {

    return (
        <div className="dropdown-card">
            
            <button className='dropdown-img' style={{backgroundImage: `url(${background})`}}>
                <h1>{title}</h1>
            </button> 

            <div className="content">
                <div className="dropdown-list">
                    {options && options.map(({label}, index)=> 
                        <button key={index}>
                            {label}
                        </button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default CategoryDropdown;