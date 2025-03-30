import React from "react";
import PaceImg from "../../../../imeges/careerImg/pace-logo.png";

const paceData = [
  {
    title: "Perform",
    description:
      "Perform from the very beginning and make an impactful head start in the journey with Artech. The program is designed to enhance capability, capacity, productivity, and performance.",
    bgColor: "#ed4a42",
  },
  {
    title: "Accelerate",
    description:
      "Accelerate learning during the training program which packs in both classroom and on-the-job training. This multi-dimensional approach helps trainees in learning faster and better.",
    bgColor: "#05b6b2",
  },
  {
    title: "Connect",
    description:
      "Connect with multiple colleagues, mentors, and trainers. A trainee gets to network early on in their career with multiple stakeholders, ensuring a highly productive work environment in the long run.",
    bgColor: "#253e91",
  },
  {
    title: "Educate",
    description:
      "Trainees are educated and trained under the most talented, proficient, and qualified trainers in the recruitment industry. All trainers possess a diverse skill set and rich work experience.",
    bgColor: "#6c348d",
  },
];

const Pace = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center mt-6 mb-6">
      {/* Header Section */}
      <div className="w-full flex justify-center py-3 items-center bg-[#253e91]">
        <img src={PaceImg} alt="Pace Program" className="p-5 w-[280px]" />
      </div>

      {/* Main Content Section */}
      <div className="w-full flex justify-center">
        <div className="w-full md:w-full">
          {/* Introduction Text */}
          <div className="w-full flex justify-center">
            <div className="text-center mt-8 mb-8 w-full md:w-[80%]">
              <p className="text-[13px] font-semibold text-gray-700">
                At Artech, we believe that intelligence is inherent in each of
                us. We invest in our employees and have deployed a structured
                recruitment & trainee program, aimed at identifying,
                on-boarding, and nurturing intellect.
              </p>
              <p className="text-[13px] font-semibold mt-2 text-gray-700">
                We are creating tomorrow’s leaders, through our interventions,
                today.
              </p>
              <p className="text-[13px] font-semibold mt-2 text-gray-700">
                Candidates through our recruitment initiative, join Artech as a
                part of our Management Trainee Program:{" "}
                <strong>PACE</strong>
              </p>
            </div>
          </div>

          {/* Grid Items - Refactored with Map */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-3 md:px-6 mt-8">
            {paceData.map((item, index) => (
              <div
                key={index}
                className="text-white py-12 px-3 text-center flex flex-col justify-center items-center rounded-lg"
                style={{ backgroundColor: item.bgColor }}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="flex w-full justify-center">
                  <div className="w-10 h-1 bg-[#fba91e] my-2"></div>
                </div>
                <p className="mt-2 text-[13px] font-semibold">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action Text */}
          <div className="w-full flex justify-center">
            <p className="text-center text-[13px] font-semibold mt-8 px-6 w-full md:w-[70%]">
              If you are a fresher and are looking for an opportunity to
              kick-start your career with a global, fast-growing organization,
              apply for a position with us.
            </p>
          </div>
        </div>
      </div>

      {/* Apply Now Button */}
      <div className="mt-12 mb-3 w-full text-center">
        <p className="text-lg">Explore Opportunities</p>
        <button className="mt-3 bg-blue-900 text-white px-[35px] py-[10px] rounded-full text-[15px] border hover:bg-white hover:text-blue-900 transition">
          Apply Now
        </button>
      </div>

      {/* Footer Section */}
      <div className="w-full flex justify-center mb-12">
        <p className="text-center text-[13px] font-semibold mt-8 px-6 w-full md:w-[80%] text-gray-700">
          Artech is an equal employment opportunity employer. For job
          opportunities in the US, if you need accommodation for any part of the
          application process because of a disability, please send an email to
          <a
            href="mailto:AskHR@artech.com"
            className="text-blue-600 hover:text-blue-900"
          >
            AskHR@artech.com
          </a>{" "}
          or call
          <a href="tel:9739982500" className="text-blue-600 hover:text-blue-900">
            973 998 2500
          </a>{" "}
          to let us know the nature of your request.​ For job opportunities in
          India,{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-900"
            target="_blank"
            rel="noopener noreferrer"  // Added security attribute
          >
            visit here for Consultant roles
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-900"
            target="_blank"
            rel="noopener noreferrer"  // Added security attribute
          >
            here for Corporate roles.​
          </a>
        </p>
      </div>
    </div>
  );
};

export default Pace;
