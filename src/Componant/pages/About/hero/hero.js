

import React from 'react';
import CareerBanner from '../../../../imeges/aboutHeroImg.jpg';

const AboutHero = () => {
  return (
    <div
      className="relative flex flex-col items-center md:items-end justify-center text-center p-5 bg-cover bg-center  h-auto lg:h-[400px]"
      style={{ backgroundImage: `url(${CareerBanner})` }}
    >
      <div className="bg-transparent bg-opacity-90 p-5 w-full md:w-[60%] lg:w-[48%]">
        <h1 className="text-white text-xl sm:text-2xl md:text-lg font-semibold leading-snug">
        The Largest Women-Owned IT <br className="hidden sm:block" /> Staffing Firm in the US with
        </h1>
  
        <p className="text-sm text-yellow-400 font-semibold mb-6 mt-10">
            Expertise in most Non-IT <br className="hidden sm:block" /> Professional Verticals
          </p>

        {/* Buttons Section */}

        <p className="mt-4 sm:mt-6 text-white text-sm sm:text-1xl mb-2 font-semibold">
            To find out how we can help you
          </p>
        <div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-sm text-blue-900 font-bold py-1 px-6 rounded-full transition-colors">
              CONTACT US TODAY!
            </button>
          </div>


         
        </div>
      </div>
  
  );
};

export default AboutHero 