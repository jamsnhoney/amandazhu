import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pwetty/Navbar.css"; // Ensure the CSS file path is correct
import logo_img from "../assets/logo.png"; // Adjust path to your logo image

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle mobile menu
  const navigate = useNavigate();

  // Navigation handlers for each menu item
  const handleLogoClick = () => {
    console.log("clicked logo");
    navigate("/");
    closeMenu(); // Close the menu when logo is clicked
  };

  const handleNavigateBio = () => {
    console.log("clicked bioinformatics");
    navigate("/bioinformatics");
    closeMenu(); // Close the menu when bio link is clicked
  };

  const handleNavigateDesign = () => {
    console.log("clicked design");
    navigate("/design");
    closeMenu(); // Close the menu when design link is clicked
  };

  const handleNavigateExtra = () => {
    console.log("clicked extracurriculars");
    navigate("/extracurriculars");
    closeMenu(); // Close the menu when extracurricular link is clicked
  };

  const handleNavigateContact = () => {
    console.log("clicked contact");
    navigate("/contact");
    closeMenu(); // Close the menu when contact link is clicked
  };

  // Toggle mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking outside of it
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <main className="navbar-main">
      <div className="navbar-LEFT" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <img src={logo_img} alt="logo" />
      </div>

      {/* Desktop Navbar Links */}
      <div className={`navbar-RIGHT ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <p onClick={handleNavigateBio} style={{ cursor: "pointer" }}>
            bioinformatics & research
          </p>
        </nav>
        <nav>
          <p onClick={handleNavigateDesign} style={{ cursor: "pointer" }}>
            design & creatives
          </p>
        </nav>
        <nav>
          <p onClick={handleNavigateExtra} style={{ cursor: "pointer" }}>
            extracurriculars
          </p>
        </nav>
        <div className="navbar-BUTTON">
          <button onClick={handleNavigateContact}>contact me</button>
        </div>
      </div>

      {/* Mobile Menu Hamburger Icon */}
      <div className="navbar-mobile" onClick={toggleMobileMenu}>
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu" onClick={closeMenu}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="close-btn" onClick={closeMenu}>X</button>
            <ul>
              <li><a href="#bioinformatics" onClick={handleNavigateBio}>bioinformatics & research</a></li>
              <li><a href="#design" onClick={handleNavigateDesign}>design & creatives</a></li>
              <li><a href="#extracurriculars" onClick={handleNavigateExtra}>extracurriculars</a></li>
              <li><a href="#contact" onClick={handleNavigateContact}>contact me</a></li>
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}

export default Navbar;
