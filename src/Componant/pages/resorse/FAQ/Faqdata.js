import React, { useState } from 'react';

const FAQAccordion = () => {

  const faqData = [
    {
      id: 1,
      question: "What does Artech Do?",
      answer: "Artech provides a unique blend of services to Fortune and Global 500 and Government clients, ranging from comprehensive staffing to IT project support. Our services include:",
      listItems: [
        "Recruiting contingent/temporary consultants for our client's projects",
        "Staffing permanent employees to fill open job positions at our clients' sites",
        "Deploying teams of consultants for IT projects and initiatives",
        "Planning, managing, and executing IT projects",
        "Managing suppliers that provide staffing and IT project services to our clients"
      ],
      linkText: "Explore Artech's services",
      linkUrl: "#"
    },
    {
      id: 2,
      question: "How do I know Artech is a dependable company?",
      answer: "Artech is recognized as a global staffing and IT services company by all well-known business rating bureaus, industry associations, diversity organizations, and respected media sources. We are the #1 Largest Women-Owned IT Staffing Company in the U.S. and the #8 Largest IT Staffing Company in the U.S. as per Staffing Industry Analysts 2020 ranking."
    },
    {
      id: 3,
      question: "Someone from Artech called me and asked me for my social security number. Is this necessary?",
      answer: "Some of our clients require us to provide your social security number at the time we submit your resume to them. Our clients use this information to confirm eligibility. Artech does not use your social security number for any purpose other than submission to our client. We may ask you for the last four, five, or all nine digits of your SSN during the interview process depending on our client’s requirements.If you have any concerns about this, the Artech recruiter or their manager will be able to provide more details."
    },
    {
      id: 4,
      question: "How do I apply for a job with Artech?",
      answer: "Start out by visiting our job posting page and browse the type of positions you are interested in. Second, submit your resume online. If your profile matches our requirements, our team will contact you."
    },

    {
        id: 5,
        question: "I've told your recruiter that I'm not interested in a job. Why does your company still contact me?",
        answer: "Start out by visiting our job posting page and browse the type of positions you are interested in. Second, submit your resume online. If your profile matches our requirements, our team will contact you."
      },

      {
        id: 6,
        question: "Once I am offered a job, how long will it take to get started?",
        answer: "Artech interfaces with most of the major online job boards like Dice, Monster, CareerBuilder, and so on. So, if your resume remains posted online and is listed as “active,” it appears to us that you’re still looking for a job."
      },

      {
        id: 7,
        question: "Do I have to take a test to be eligible for one of your jobs?",
        answer: "It depends on the type of job, background checks, and other details regarding the position. On an average, a qualified candidate can begin working for our clients within 8-10 business days."
      },

      {
        id: 8,
        question: "How long has Artech been in business?",
        answer: "We will ask job related questions during the telephone and/or in-person interviews. However, some of our clients require potential candidates to take a written test, online test, or advanced telephone screening. This mostly applies to IT positions."
      },

      {
        id:9,
        question: "Does Artech offer immigration assistance?",
        answer: "We were established in 1992 – that’s close to three decades of experience successfully placing top-notch professionals at our Fortune and Global 500 clients. To learn more about our company, refer to our About Us section."
      },

      {
        id: 10,
        question: "What kind of rates does Artech pay?",
        answer: "Yes, Artech is an American company. The company was founded and is registered in the State of New Jersey. Since 1992, Artech has grown dramatically and now has offices throughout the U.S., India, China, and Canada. Our global operational model enables us to provide service on a 24×7 basis and is a key factor in supporting our Fortune and Global 500 clients around the world.Because we operate globally and around the clock, you may be contacted by an employee from any of our global offices. Our employees all have the same goal – to find the best talent"
      },
     
  ];
  const [openItem, setOpenItem] = useState(1);

  const toggleItem = (id) => {
    if (openItem === id) {
      setOpenItem(null); 
    } else {
      setOpenItem(id); 
    }
  };

  return (
    <div className="  container max-w-3xl mx-auto bg-gray-50">
      {faqData.map((item) => (
        <div key={item.id} className="border-b border-gray-200">
          <div 
            className="flex items-center p-4 cursor-pointer"
            onClick={() => toggleItem(item.id)}
          >
            <span className="text-1xl mr-3">
              {openItem === item.id ? "v" : ">"}
            </span>
            <h3 className="text-medium text-semibold opacity-60 font-semibold">{item.question}</h3>
            <div className='border border-red-600'></div>
          </div>
          
          {openItem === item.id && (
            <div className="p-4 pt-0 pl-10">
              <p className="mb-4 text-gray-600">{item.answer}</p>
              
              {item.listItems && (
                <ul className="list-disc pl-8 mb-4">
                  {item.listItems.map((listItem, index) => (
                    <li key={index} className="mb-2 text-gray-600">{listItem}</li>
                  ))}
                </ul>
              )}
              
              {item.linkText && (
                <p>
                  <a 
                    href={item.linkUrl} 
                    className="text-blue-600 hover:underline"
                  >
                    {item.linkText}
                  </a>
                  {item.linkText.includes("services") && " for more information"}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;