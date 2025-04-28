import React from "react";
import TitleAndCaption from '../actual_components/TitleAndCaption.js'; // title component
import GalleryGrid from '../actual_components/GalleryGrid.js'; // img gallery component

import image1 from '../assets/hackathons/drdodo.png';
import image2 from '../assets/hackathons/weve.jpeg';
import image3 from '../assets/hackathons/paperorchestra.png';

function HackathonsPage() {
  const galleryItems = [
    {
      imageSrc: image1,
      linkHref: 'https://devpost.com/software/doctor-dodo',
      altText: 'dr dodo devpost',
    },
    {
      imageSrc: image2,
      linkHref: 'https://devpost.com/software/weve-weve-been-here-before',
      altText: 'Image 2 description',
    },
    {
      imageSrc: image3,
      linkHref: 'https://devpost.com/software/paper-ochestra',
      altText: 'Image 3 description',
    },
    // add more if you want
  ];

  return (
    <div>
      <TitleAndCaption 
        title="hackathon projects (that won something)"
        caption1="dr. dodo | qhacks 2024 (QU) | 2nd place | best AI in education"
        caption2="weve | hackville 2024 (sheridan) | 2nd place"
        caption3="paper orchestra | methacks 2023 (TMU) | 3rd place"
      />
      <GalleryGrid items={galleryItems} />
    </div>
  );
}

export default HackathonsPage;
