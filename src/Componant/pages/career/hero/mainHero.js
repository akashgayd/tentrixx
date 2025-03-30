

import React from 'react';
import CareerBanner from '../../../../imeges/careerImg/Careers-banner.png';

const BannerCareer = () => {
  return (
    <div
      className="relative flex flex-col items-center md:items-end justify-center text-center p-5 bg-cover bg-center  h-auto lg:h-[400px]"
      style={{ backgroundImage: `url(${CareerBanner})` }}
    >
      <div className="bg-transparent bg-opacity-90 p-5 w-full md:w-[60%] lg:w-[48%]">
        <h1 className="text-white text-xl sm:text-2xl md:text-2xl font-semibold leading-snug">
          Empowering your career. <br className="hidden sm:block" /> Maximizing your intelligence
        </h1>

        <p className="mt-4 sm:mt-6 text-white text-sm sm:text-1xl">Explore Opportunities</p>

        {/* Buttons Section */}
        <div className="w-full flex justify-center mt-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-[80%] md:w-[74%]">
          <button className="w-full sm:w-auto bg-white text-blue-900 font-semibold py-1 px-4 sm:px-6 rounded-full text-sm shadow-md hover:bg-black hover:text-white">
  Consulting Jobs
</button>
<button className="w-full sm:w-auto bg-white text-blue-900 font-semibold py-1 px-4 sm:px-6 rounded-full text-sm shadow-md hover:bg-black hover:text-white">
  Corporate Jobs
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCareer;