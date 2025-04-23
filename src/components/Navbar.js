import React from "react";
import { useNavigate } from "react-router-dom";

import "../pwetty/Navbar.css"

import logo_img from "../assets/logo.png"

function Navbar() {
    const navigate = useNavigate(); 

    /* LOGO -> HOMEPAGE */
    const handleLogoClick = () => {
    console.log("clicked logo");
    navigate("/");
    };

    /* CONTACT ME -> CONTACT PAGE */
    const handleNavigate = () => {
        console.log("clicked contact");
        navigate("/contact");
        };
        
  
    return (
        <main className="navbar-main">
            <div className="navbar-LEFT" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
                <img src={logo_img} alt="wompwomp" />
            </div>
            <div className="navbar-RIGHT">
                <p>bioinformatics & research</p>
                <p>design &amp; creatives</p>
                <p>extracurriculars</p>
            <div className="navbar-BUTTON">
                <nav>
                    <button onClick={handleNavigate}>contact me </button>
                </nav>
            </div>

            </div>
        </main>
    );
}

export default Navbar;