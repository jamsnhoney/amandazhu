/* Section.js */

import React from "react";
import "../pwetty/Section.css";

function Section({ title, image1, image2, subheading, description }) {
  return (
    <div className="section">
      <h1>{title}</h1>
      <div className="image-wrapper">
        <img className="image-normal" src={image1} alt="normal" />
        <img className="image-hover" src={image2} alt="hover" />
      </div>
      <h3>{subheading}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Section;
