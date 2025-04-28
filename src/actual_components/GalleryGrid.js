import React from 'react';
import GalleryLinkedPage from '../actual_components/GalleryLinkedPage';
import '../pwetty_components/GalleryGrid.css';

const GalleryGrid = ({ items }) => {
  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <GalleryLinkedPage
          key={index}
          imageSrc={item.imageSrc}
          linkHref={item.linkHref}
          altText={item.altText}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
