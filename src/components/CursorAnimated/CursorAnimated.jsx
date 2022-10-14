import gsap from 'gsap';
import React, { useEffect } from 'react';

import './CursorAnimated.css';


const CursorAnimated = () => {
    
    useEffect(() => {
        let cursor = document.querySelector('.cursor'),
            mouseX = 0,
            mouseY = 0;

        gsap.to({}, 0.016, {
            repeat: -1,

            onRepeat: function() {
                gsap.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                })
            }
        });

        window.addEventListener("mousemove", function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        })

        let links = Array.from(document.querySelectorAll("a"));
        let buttons = Array.from(document.querySelectorAll("button"));

        // console.log('buttons',buttons)
        // console.log('links',links)
        
        links.forEach((link) => {
            link.addEventListener("mouseover", () => {
                cursor.classList.add("grow");
            });
            link.addEventListener("mouseleave", () => {
                cursor.classList.remove("grow");
            });
        });

        buttons.forEach((button) => {
            button.addEventListener("mouseover", () => {
                cursor.classList.add("grow");
            });
            button.addEventListener("mouseleave", () => {
                cursor.classList.remove("grow");
            });
        });


    }, [])
    

    return (
       <div className="cursor"></div>
    )
 }

 export default CursorAnimated;