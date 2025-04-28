// GalleryLinkedPage.js

import React, { useState } from 'react';
import '../pwetty_components/GalleryLinkedPage.css';

const GalleryLinkedPage = ({ imageSrc, hoverImageSrc, linkHref, altText = 'gallery item' }) => {
  // Set initial state for the image
  const [currentImage, setCurrentImage] = useState(imageSrc);

  // Handle mouse hover
  const handleMouseEnter = () => {
    setCurrentImage(hoverImageSrc); // Change to hover image
  };

  const handleMouseLeave = () => {
    setCurrentImage(imageSrc); // Revert to original image
  };

  return (
    <div className="gallery-linked-page">
      <a href={linkHref} target="_blank" rel="noopener noreferrer">
        <img
          src={currentImage}
          alt={altText}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </a>
    </div>
  );
};

export default GalleryLinkedPage;
