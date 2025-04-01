import React, { useState, useEffect } from "react";
import ProjectOne from '../../../imeges/Project-Delivery.jpg';
import ProjectTwo from '../../../imeges/Workforce-Solutions.jpg';
import ProjectTree from "../../../imeges/Diversity-and-Inclusion.jpg";

// Data array for services
const servicesData = [
  {
    id: 1,
    image: ProjectOne,
    title: "Managed Services and Project Delivery",
    subtitle: "Value/Flexibility/Predictability",
    description:
      "Artech Solutions leverages the larger talent-sourcing engine to build optimized delivery teams to achieve exceptional business results for our customers. We provide you with a combination of people, processes, tools and technologies that can help you maximize productivity, improve operations, facilitate agility and scale, reshape spending, and deliver innovation.",
    features: [
      "Application Services",
      "Cloud and Infrastructure",
      "Business Resiliency",
      "Digital Experience",
    ],
  },
  {
    id: 2,
    image: ProjectTwo,
    title: "Workforce Solutions",
    description:
      "Our Workforce Solutions Teams don't just deliver staffing solutions – they provide business solutions. Our understanding of client's needs, unique talent supply chain, high-performing teams, and flexible engagement models help us empower businesses by delivering human intellect that can make a difference to an organization.",
    features: [
      "Contingent Staffing",
      "Project staffing",
      "Master Vendor",
      "RPO – Projects and Programs",
      "Direct Hire",
      "Payroll and Transition Services",
    ],
  },
  {
    id: 3,
    image: ProjectTree,
    title: "Diversity and Inclusion Programs",
    description:
      "At Artech, Diversity is in our DNA and is an organizing principle in how we do business. As a certified minority and women-owned business, we are at the forefront of diverse hiring in the United States for 3 decades.",
    additionalDescription: [
      "We are committed to inclusive hiring practices internally, with our suppliers, and for our clients and outperform the national average by leaps and bounds.",
      "By partnering with Artech, clients benefit from the workforce representation we have already attained.",
    ],
    features: [], // No features for this card
  },
];

// Reusable ServiceCard Component
const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="w-full max-w-md mb-6">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      <h3 className="text-xl md:text-2xl  text-red-600 text-center">
        {service.title}
      </h3>
      {service.subtitle && (
        <p className="text-lg font-semibold text-gray-700 text-center mt-2">
          {service.subtitle}
        </p>
      )}
      <p className="text-sm md:text-xs lg:text-sm text-gray-700 text-center mt-4 flex-grow">
        {service.description}
      </p>
      {service.additionalDescription &&
        service.additionalDescription.map((desc, index) => (
          <p
            key={index}
            className="text-sm md:text-sm text-gray-700 text-center"
          >
            {desc}
          </p>
        ))}
      {service.features.length > 0 && (
        <div className="space-y-2 mt-4">
          {service.features.map((feature, index) => (
            <p
              key={index}
              className="text-center text-red-600 font-semibold text-sm md:text-sm"
            >
              {feature}
            </p>
          ))}
        </div>
      )}
      <button className="mt-8 bg-blue-800 text-white py-2 px-4 md:py-3 md:px-5 rounded-full border border-blue-800 transition-all duration-300 hover:bg-white hover:text-blue-800 text-sm md:text-base">
        Know More
      </button>
    </div>
  );
};

const ProjectTeam = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768; // Tailwind's 'md' breakpoint

  return (
    <div className="mx-auto px-4 md:px-[10%] py-8 md:py-16">
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-2xl md:text-2xl font-semibold text-blue-900">
          What We Offer
        </h2>
        <div className="w-16 md:w-24 h-1 bg-orange-400 mx-auto mt-2"></div>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {isMobile ? (
          <ServiceCard key={servicesData[0].id} service={servicesData[0]} />
        ) : (
          servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectTeam;
