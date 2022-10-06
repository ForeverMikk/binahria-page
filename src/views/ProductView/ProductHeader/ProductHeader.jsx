import React from "react"

import './ProductHeader.css';
import Navbar from "../../../components/Navbar/Navbar"
import logo from '../../../assets/images/logo/logo-white.png';

const ProductHeader = () => {
    return (
        <div className='product-header'>  
            <Navbar logo={logo}/>
            <div className="video-container">
                <iframe 
                    // width="1349" 
                    // height="480" 
                    src="https://www.youtube.com/embed/mkhvraSWqS0?controls=0&autoplay=1&mute=1&playsinline=1&playlist=mkhvraSWqS0&loop=1" 
                    title=" " 
                    frameborder="0" 
                    allow="autoplay; loop; mute;" 
                    >
                </iframe>
            </div>
        </div>
    )
}

export default ProductHeader;