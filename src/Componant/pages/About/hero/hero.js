import React from 'react';
import AboutImg from '../../../../imeges/aboutHeroImg.jpg'; // Update with your correct path

const AboutHero = () => {
  return (
    <div className="relative w-full h-auto">
      <img
        src={AboutImg}
        alt="About Hero"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default AboutHero;
