import React, { useEffect } from 'react';

import './CursorAnimated.css';


const CursorAnimated = () => {
    
    useEffect(() => {
      
        let innerCursor = document.querySelector('.inner-cursor');
        let outerCursor = document.querySelector('.outer-cursor');
        let links = Array.from(document.querySelectorAll("a"));
        let buttons = Array.from(document.querySelectorAll("button"));
        
        document.addEventListener('mousemove', moveCursor);
        
        function moveCursor (e) {
            let x = e.clientX;
            let y = e.clientY;
        
            // console.log(x, y)
        
            innerCursor.style.left = `${x}px`;
            innerCursor.style.top = `${y}px`;
            outerCursor.style.left = `${x}px`;
            outerCursor.style.top = `${y}px`;
        }

        console.log('buttons',buttons)
        console.log('links',links)
        
        links.forEach((link) => {
            link.addEventListener("mouseover", () => {
                innerCursor.classList.add("grow");
            });
            link.addEventListener("mouseleave", () => {
                innerCursor.classList.remove("grow");
            });
        });

        buttons.forEach((button) => {
            button.addEventListener("mouseover", () => {
                innerCursor.classList.add("grow");
            });
            button.addEventListener("mouseleave", () => {
                innerCursor.classList.remove("grow");
            });
        });


    }, [])
    

    return (
       <>
        <div className="inner-cursor"></div>
        <div className="outer-cursor"></div>
       </>
    )
 }

 export default CursorAnimated;