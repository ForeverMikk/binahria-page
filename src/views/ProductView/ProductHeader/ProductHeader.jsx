import React from "react"

import './ProductHeader.css';
import Navbar from "../../../components/Navbar/Navbar"
import logo from '../../../assets/images/logo/logo-white.png';
import background from '../../../assets/videos/product-background.mp4';

const ProductHeader = () => {
    return (
        <div className='product-header'>  
            <Navbar logo={logo}/>
            <video className="video-container" autoPlay muted loop>
                <source src={background} type="video/mp4" />
                {/* <iframe
                    src="https://www.youtube.com/embed/mkhvraSWqS0?controls=0&autoplay=1&mute=1&playsinline=1&playlist=mkhvraSWqS0&loop=1&showinfo=0" 
                    title=" " 
                    frameborder="0" 
                    allow="autoplay;" 
                    >
                </iframe> */}
            </video>
        </div>
    )
}

export default ProductHeader;