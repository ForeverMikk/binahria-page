import React from 'react';
import Popup from 'reactjs-popup';
// import Select from 'react-select';

import './CategoryDropdown.css';
const CategoryDropdown = ({title,  background, options}) => {
    return (
        <Popup 
            trigger={
                <button className='category-button' style={{backgroundImage: `url(${background})`}}>
                    <h1>{title}</h1>
                </button>
            } 
            position="bottom center"
            closeOnDocumentClick
        >
            {
                <div className="dropdown-container">
                    {options && options.map(({label}, index)=> 
                        <button key={index}>
                            {label}
                        </button>
                    )}

                </div>
            }
        </Popup>

    )
}

export default CategoryDropdown;