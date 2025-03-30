import React from 'react';
import logos from '../../../../imeges/careerImg/Great-Place-to-WorkTM-Certification-2.jpg';
import teamImg from '../../../../imeges/careerImg/Group-1000009189-2.png';

const certificationData = {
    title: "Great Place to Work™ Certification",
    description: "The certificates were received after extremely positive feedback from our employees on established parameters including:",
    values: [
        "Fairness: irrespective of age, gender, orientation, or race",
        "Respect: for the safety and dignity of all",
        "Credibility: evinced by the responsibility given to our people",
        "Pride: in what we accomplish at work",
        "Camaraderie: at the workplace",
        "Credibility of Management",
        "Training and Development"
    ],
    conclusion: "These certificates are testaments to our belief that people thrive when you show confidence in them and nurture growth. We are proud of our people and the organization that we are!",
    teamImageAlt: "Team Collaboration",
    logosImageAlt: "Great Place to Work Certification"
};


const Certification = () => {
  return (
    <div className="bg-blue-900 text-white py-4 md:py-6 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <img src={teamImg} alt={certificationData.teamImageAlt} className="w-32 md:w-40 relative top-[-17px] md:top-[-24px]" />
          <h2 className="text-2xl md:text-1xl font-semibold mb-2">
            {certificationData.title}
          </h2>
          <div className="w-16 h-1 bg-[#fba91e] mb-4 md:mb-6"></div>
          <p className="mb-4 text-sm md:text-base">
            {certificationData.description}
          </p>
          <ul className="list-disc pl-5 text-sm md:text-sm font-semibold space-y-2">
            {certificationData.values.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm md:text-base">
            {certificationData.conclusion}
          </p>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img src={logos} alt={certificationData.logosImageAlt} className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Certification;
