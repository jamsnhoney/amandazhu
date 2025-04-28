import React from 'react'; 
import '../pwetty_components/TitleandImage.css'

const TitleandImage = ({ title, description, image }) => {
  return (
    <div className="title-image-container">
      <div className="title-image-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="title-image-img">
        <img src={image} alt="bio-section" />
      </div>
    </div>
  );
};

export default TitleandImage;
