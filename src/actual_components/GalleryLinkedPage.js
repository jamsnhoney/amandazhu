import React from 'react';
import '../pwetty_components/GalleryLinkedPage.css';

const GalleryLinkedPage = ({ imageSrc, linkHref, altText = 'gallery item' }) => {
  return (
    <div className="gallery-linked-page">
      <a href={linkHref} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={altText} />
      </a>
    </div>
  );
};

export default GalleryLinkedPage;
