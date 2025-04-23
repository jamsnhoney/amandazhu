import React from "react";
import "../pwetty/Footer.css"

import smiskiii from "../assets/smiski/yogasmiski.png"
import cake from "../assets/icons/cake.png"
import coffee from "../assets/icons/coffee.png"
import linkedin from "../assets/icons/linkedin.png"
import mail from "../assets/icons/mail.png"
import shrimp from "../assets/icons/shrimp.png"
import turtle from "../assets/icons/turtle.png"


function Footer() {
    return(
        <main className="footer-MAIN">
            <div className="footer-LEFT">
                <p> amandazhu.ca </p>
                <p> design & code by amanda zhu (04|2025) </p>
            </div>
            <div className="footer-MIDDLE">
                <img src={smiskiii}/>
            </div>
            <div className="footer-RIGHT">

                <a href="https://us.jellycat.com/sensational-seafood-shrimp/" target="_blank" rel="noopener noreferrer">
                    <img src={mail} alt="ugotmail" className="clickable-image" />
                </a>

                <a href="https://us.jellycat.com/sensational-seafood-shrimp/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="lockedin" className="clickable-image" />
                </a>


                <a href="https://us.jellycat.com/sensational-seafood-shrimp/" target="_blank" rel="noopener noreferrer">
                    <img src={shrimp} alt="shromp" className="clickable-image" />
                </a>

                <a href="https://us.jellycat.com/sensational-seafood-shrimp/" target="_blank" rel="noopener noreferrer">
                    <img src={coffee} alt="cawfee" className="clickable-image" />
                </a>

                <a href="https://us.jellycat.com/sensational-seafood-shrimp/" target="_blank" rel="noopener noreferrer">
                    <img src={turtle} alt="tortle" className="clickable-image" />
                </a>


            </div>

        </main>
    );
}

export default Footer