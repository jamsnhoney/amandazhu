import React from "react";
import TitleAndCaption from '../actual_components/TitleAndCaption.js'; // title component
import GalleryGrid from '../actual_components/GalleryGrid.js'; // img gallery component

import drdodo1 from '../assets/hackathons/drdodo.png';
import drdodo2 from '../assets/hackathons/drdodo2.png'

import weve1 from '../assets/hackathons/weve.png'
import weve2 from '../assets/hackathons/weve2.png';

import po1 from '../assets/hackathons/po1.png';
import po2 from '../assets/hackathons/po2.png'


function HackathonsPage() {
  const galleryItems = [
    {
      imageSrc: drdodo1,
      hoverImageSrc: drdodo2,
      linkHref: 'https://devpost.com/software/doctor-dodo',
      altText: 'dr dodo devpost',
    },
    {
      imageSrc: weve1,
      hoverImageSrc: weve2,
      linkHref: 'https://devpost.com/software/weve-weve-been-here-before',
      altText: 'Image 2 description',
    },
    {
      imageSrc: po1,
      hoverImageSrc: po2,
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
