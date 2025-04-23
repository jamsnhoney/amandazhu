import React from "react";
import '../pwetty/ContactPage.css'

import meee from '../assets/mememe.png'
import meee2 from '../assets/abighead.png'

function ContactPage() {
  return (
    <div className="contact-main">
      <div className="contact-left">
        <h1>contact me</h1>

        <p> email: zhuu.amanda@gmail.com</p>

        <a href="https://www.linkedin.com/in/amanda-zhu-b01422242/" target="_blank" rel="noopener noreferrer">
          <p style={{textDecoration: "underline" }}>
            linkedin </p>
        </a>

        <a href="https://github.com/jamsnhoney" target="_blank" rel="noopener noreferrer">
          <p style={{textDecoration: "underline" }}>
            github </p>
        </a>

        <a href="https://devpost.com/zhuu-amanda?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">
          <p style={{textDecoration: "underline" }}>
            devpost </p>
        </a>

        <p> personal website: you're on it </p>

        <div className="caption">
            <p> thank you for saying hi! i’m current open for biomedical research opportunities, <br></br>
              ui/ux design, and coffee chats for fun. have a comfy day ⊹ </p>
        </div>
      </div>
      <div className="contact-right">
        <img src={meee2}></img>
      </div>
    </div>
  );
}

export default ContactPage;
