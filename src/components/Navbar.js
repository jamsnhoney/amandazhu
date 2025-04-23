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

    const handleNavigateBio = () => {
        console.log("clicked contact");
        navigate("/bioinformatics");
        };

    const handleNavigateDesign = () => {
        console.log("clicked contact");
        navigate("/design");
        };

    const handleNavigateExtra = () => {
        console.log("clicked contact");
        navigate("/extracurriculars");
        };

    const handleNavigateContact = () => {
        console.log("clicked contact");
        navigate("/contact");
        };
  
    return (
        <main className="navbar-main">
            <div className="navbar-LEFT" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
                <img src={logo_img} alt="wompwomp" />
            </div>
            <div className="navbar-RIGHT">
            <nav>
                <p
                    onClick={handleNavigateBio}
                    style={{ cursor: "pointer"}}>
                    bioinformatics & research
                </p>
            </nav>

            <nav>
                <p
                    onClick={handleNavigateDesign}
                    style={{ cursor: "pointer"}}>
                    design & creatives
                </p>
            </nav>

            <nav>
                <p
                    onClick={handleNavigateExtra}
                    style={{ cursor: "pointer"}}>
                    extracurriculars
                </p>
            </nav>

            <div className="navbar-BUTTON">
                <nav>
                    <button onClick={handleNavigateContact}>
                    contact me </button>
                </nav>
            </div>

            </div>
        </main>
    );
}

export default Navbar;