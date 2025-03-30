import React from "react";
import Leader1 from "../../../../imeges/careerImg/Performance-Oriented-Culture-01.png";
import Leader2 from "../../../../imeges/careerImg/Global-Client-Base-02.png";
import leaders3 from "../../../../imeges/careerImg/Thought-Leadership-03.png";
import leader4 from "../../../../imeges/careerImg/Diversity-Inclusion-04.png";
import leaders5 from "../../../../imeges/careerImg/Rewards-Recognition-05.png";
import leaders6 from "../../../../imeges/careerImg/Continuous-Learning-06.png";

const talentData = [
  {
    image: Leader1,
    title: "Performance Oriented Culture",
    description:
      "Performance oriented work environment that empowers you to thrive and shine",
    bgColor: "#253e91",
  },
  {
    image: Leader2,
    title: "Global Client Base",
    description: "Work with the biggest and best organizations in the world",
    bgColor: "#fba91e",
  },
  {
    image: leaders3,
    title: "Throught Leadership",
    description: "Recognized and acknowledged thought leadership in shaffing",
    bgColor: "#6c348d",
  },
  {
    image: leader4,
    title: "Diversity & Inclusion",
    description:
      "Equal oppurtunity employer, founded on the principles of Diversity & Inclusion",
    bgColor: "#ed4a42",
  },
  {
    image: leaders5,
    title: "Rewards & Recognition",
    description: "Be part of a work culture driven by Reward & Recognition",
    bgColor: "#11bcce",
  },
  {
    image: leaders6,
    title: "Learning & Development",
    description:
      "Continous learning focus, providing opportunities to upskill and grow",
    bgColor: "#05b6b2",
  },
];

const TalentCard = ({ image, title, description, bgColor }) => {
  return (
    <div className="w-full lg:w-1/4  flex flex-col lg:flex-row flex-wrap items-center m-1 md:m-10 rounded-md shadow-md">
      <div className=" lg:w-1/2   md:h-[350px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div
        className={`w-full lg:w-1/2 h-[350px] text-white text-center  flex flex-col justify-center items-center rounded-md `}
        style={{ backgroundColor: bgColor }}
      >
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs mt-2">{description}</p>
        <p className="text-xs font-semibold mt-4 underline cursor-pointer">
          Watch Video
        </p>
      </div>
    </div>
  );
};

const TalentTeam = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col lg:flex-wrap lg:flex-row items-center justify-center">
        {talentData.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>

      <div className="mt-8 mb-12 w-full text-center">
        <p className="text-lg">Explore Opportunities</p>
        <button className="mt-3 bg-blue-900 text-white px-8 py-2 rounded-full text-sm border hover:bg-white hover:text-blue-900 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default TalentTeam;
