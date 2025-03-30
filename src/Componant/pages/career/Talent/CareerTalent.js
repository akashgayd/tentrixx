import React from 'react';
import CareerVideo from '../../../../imeges/careerImg/Artech-Limitless-21.09.2021-.mp4';

const Talent = () => {



  const heading = `Empowering your career  Maximizing your intelligence.`;
  const paragraph1 = "At Artech, we enable our team to maximize their intellect by providing unlimited opportunities for growth.";
  const paragraph2 = "We have created a performance-oriented culture where our people are able to thrive while working with some of the largest organizations in the world, inspired by thought leaders among us, in a diverse and inclusive work environment that acknowledges and rewards performers while ensuring that they continue to learn and improve.";
  const paragraph3 = "Because when they are empowered, they become achievers in spirit and LIMITLESS at heart.";

  return (
    <div className="bg-white py-8 md:py-10">
      {/* Header Section */}
      <div className="bg-[#ee4d42] text-white text-center py-4 md:py-6 text-xl md:text-2xl lg:text-[28px]">
        Ou<span className="border-b-2 md:border-b-4 border-orange-400">r Talen</span>t Promise
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center px-4 md:px-8 lg:px-14 mt-6 md:mt-10">
        {/* Video Section */}
        <div>
          <video controls className="w-full rounded-md shadow-lg">
            <source src={CareerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold text-blue-900 mb-3 md:mb-4">
            {heading}
          </h2>
          <div className="border-b-2 md:border-b-3 border-[#fba91e] w-16 md:w-24 mb-3 md:mb-4"></div>
          <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-[13px] font-semibold leading-relaxed">
            {paragraph1}
          </p>
          <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-[13px] font-semibold leading-relaxed">
            {paragraph2}
          </p>
          <p className="text-gray-700 text-sm md:text-[13px] font-semibold leading-relaxed">
            {paragraph3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Talent;
