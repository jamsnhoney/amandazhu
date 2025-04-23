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
                <img src={mail}></img>
                <img src={linkedin}></img>
                <img src={shrimp}></img>
                <img src={coffee}></img>
                <img src={turtle}></img>


            </div>

        </main>
    );
}

export default Footer