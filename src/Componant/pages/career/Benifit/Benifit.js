import React from "react";
import Img1 from "../../../../imeges/careerImg/health-.png";
import Img2 from "../../../../imeges/careerImg/pension.png";
import Img3 from "../../../../imeges/careerImg/training.png";

const cardData = [
  {
    img: Img1,
    title:
      "Comprehensive health and welfare plans, along with other ancillary benefits, to help our employees maintain a healthy lifestyle.",
    borderColor: "border-b-[#fba91e]",
  },
  {
    img: Img2,
    title:
      "Artech offers a pension plan for our eligible employees to help them reach their long-term financial goals.",
    borderColor: "border-b-[#fba91e]",
  },
  {
    img: Img3,
    title:
      "We offer an internal training and reimbursement plan for individuals who would like to continue their education.",
    borderColor: "border-b-[#fba91e]",
  },
];

const Benefits = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 md:p-12 bg-white justify-center w-full">
      <h2 className="text-xl md:text-xl font-bold text-[#6c348d]">
        Our Benefits
      </h2>
      <div className="w-36 h-1 bg-[#fba91e] mx-auto my-2"></div>
      <p className="text-gray-700 max-w-4xl mt-4 text-xs md:text-sm font-semibold ">
        Artech is proud to be an employer of over 11,000+ diverse, talented, and
        hard-working industry professionals. We understand that there is more to
        life than work alone. Artech offers a host of benefits to eligible
        employees.
      </p>
      <div className="w-[100%] md:w-[100%] mt-12 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`text-center bg-white border-b-4 ${card.borderColor}`}
            >
              <div className="relative overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-60" />
              </div>
              <h3 className="text-sm text-center font-semibold mt-12 mb-12">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-12 mb-12 w-full text-center">
          <p className=" text-lg">Explore Opportunities</p>
          <button className="mt-3 bg-blue-900 text-white px-[35px] py-[10px] rounded-full text-[15px] border hover:bg-white hover:text-blue-900 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;