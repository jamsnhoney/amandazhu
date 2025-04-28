import React from 'react';
import '../pwetty_components/TitleAndCaption.css';

const TitleAndCaption = ({ title, caption1, caption2, caption3 }) => {
  return (
    <div className="title-caption-container">
      <h1>{title}</h1>
      <p>{caption1}</p>
      <p>{caption2}</p>
      <p>{caption3}</p>
    </div>
  );
};

export default TitleAndCaption;
