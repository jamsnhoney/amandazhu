import React from 'react';
import '../pwetty/PAGEPAGE.css';

import weve from "../assets/hackathons/weve.jpeg"

const FruitItem = ({ image, name, caption, captionPosition }) => {
  return (
    <div className={`fruit-item ${captionPosition}`}>
      {captionPosition === 'left' && <h2 className="fruit-caption">{caption}</h2>}
      <img src={image} alt={name} />
      {captionPosition === 'right' && <h2 className="fruit-caption">{caption}</h2>}
    </div>
  );
};

const FruitSection = ({ heading, subheading, fruits, isAlternate }) => {
  return (
    <section className="fruit-section">
      <h1>{heading}</h1>
      <p>{subheading}</p>
      <div className="fruit-container">
        {fruits.map((fruit, index) => (
          <FruitItem
            key={index}
            image={fruit.image}
            name={fruit.name}
            caption={fruit.caption}
            captionPosition={isAlternate ? (index % 2 === 0 ? 'left' : 'right') : 'left'}
          />
        ))}
      </div>
      <div className="button-group">
        <button className="primary-btn">button1</button>
        <button className="secondary-btn">button2</button>
      </div>
    </section>
  );
};

const PAGEPAGE = () => {
  const sections = [
    {
      heading: "hackathon ui & designs",
      subheading: "i've found myself drawn to the front-end/ui/design roles whenever i joined hackathons. here's some of those projects that won something!",
      fruits: [
        { image: weve, name: "Fruit 1", caption: "dr.dodo" },
        { image: weve, name: "Fruit 2", caption: "weve" },
        { image: weve, name: "Fruit 2", caption: "weve" }
      ],
      isAlternate: false
    },
    {
      heading: "personal",
      subheading: "A subheading for this section, as long or as short as you like",
      fruits: [
        { image: "fruit3.jpg", name: "Fruit 3", caption: "Caption for Fruit 3" },
        { image: "fruit4.jpg", name: "Fruit 4", caption: "Caption for Fruit 4" }
      ],
      isAlternate: true
    }
  ];

  return (
    <div className="app">
      {sections.map((section, index) => (
        <FruitSection
          key={index}
          heading={section.heading}
          subheading={section.subheading}
          fruits={section.fruits}
          isAlternate={section.isAlternate}
        />
      ))}
    </div>
  );
};

export default PAGEPAGE;