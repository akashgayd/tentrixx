import React from "react";
import Video from "../../../../imeges/careerImg/Values-Film-Cut-05-without-overlay-MP4-1000.mp4";

const Values = () => {
  const evolveData = [
    { letter: "E", color: "#ed4a42", visionaryText: "Empathy", description: "We create leaders out of our team members. Each individual leads by example." },
    { letter: "V", color: "#fba91e", visionaryText: "Versatility", description: "Adaptable and resourceful, we embrace change and new challenges." },
    { letter: "O", color: "#11bcce", visionaryText: "Originality", description: "Creativity and innovation drive us to create unique solutions." },
    { letter: "L", color: "#253e91", visionaryText: "Leadership", description: "Guiding with integrity and inspiring others to achieve excellence." },
    { letter: "V", color: "#9cdbf5", visionaryText: "Valor", description: "Courage and resilience in the face of adversity." },
    { letter: "E", color: "#6c348d", visionaryText: "Excellence", description: "Striving for the highest standards in everything we do." },
  ];

  const buttonStyle =
    "bg-blue-900 text-white font-semibold py-1 px-8 sm:px-10 rounded-2xl shadow-md hover:bg-white hover:text-blue-900 transition w-full sm:w-auto";

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header Section */}
      <div className="bg-[#253e91] text-white text-center py-6 text-xl sm:text-2xl md:text-[28px] font-semibold w-full">
        Our Values
        <div className="w-20 h-1 bg-[#fba91e] mx-auto my-2"></div>
      </div>

      {/* Content Section */}
      <div className="w-[100%] md:w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 mt-6 sm:mt-8">
        {/* Video Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <video
            className="w-full max-w-[450px] lg:max-w-[523px] h-auto"
            controls
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text & Buttons Section */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-8 text-center md:text-left">
          {/* EVOLVE Boxes */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {evolveData.map((item, index) => (
              <div
                key={index}
                className={`text-white font-bold text-3xl sm:text-[40px] px-5 py-4 rounded`}
                style={{ backgroundColor: item.color }}
              >
                {item.letter}
              </div>
            ))}
          </div>

          {/* Visionary Text */}
          <div className="w-full mt-4">
            {evolveData.length > 0 && (
              <>
                <h3 className="text-blue-900 text-lg sm:text-xl">
                  {evolveData[0].visionaryText}
                </h3>
                <p className="text-gray-900 mt-2 font-semibold text-sm sm:text-[13px]">
                  {evolveData[0].description}
                </p>
              </>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-6">
              <button className={buttonStyle}>Watch Video</button>
              <button className={buttonStyle}>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
