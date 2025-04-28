import GalleryGrid from '../actual_components/GalleryGrid'; // component

import image1 from '../assets/abstract.png';
import image2 from '../assets/logo.png';
import image3 from '../assets/metro.jpg';

function HacksPage() {
  const galleryItems = [
    {
      imageSrc: image1,
      linkHref: 'https://link-to-page-1.com',
      altText: 'Image 1 description',
    },
    {
      imageSrc: image2,
      linkHref: 'https://link-to-page-2.com',
      altText: 'Image 2 description',
    },
    {
      imageSrc: image3,
      linkHref: 'https://link-to-page-3.com',
      altText: 'Image 3 description',
    },
    // add more if you want
  ];

  return (
    <div>
      <GalleryGrid items={galleryItems} />
    </div>
  );
}

export default HacksPage;
