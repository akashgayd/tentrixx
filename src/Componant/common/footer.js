import { FaLinkedin, FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const FooterAlt = () => {  // Renamed to FooterAlt
  const footerLinks = [
    {
      title: "OUR SOLUTIONS",
      links: [
        "Contingent Staffing",
        "Recruitment Process Outsourcing (RPO)",
        "Direct Hire",
        "Master Vendor Program",
        "Payroll & Transition Services",
        "Managed Services and Project Delivery",
      ],
    },
    {
      title: "DIVERSITY & INCLUSION",
      links: [],
      careerTitle: "CAREER",
      careerLinks: ["Corporate Jobs", "Consultant Jobs"],
      communityTitle: "COMMUNITY FIRST INITIATIVES",
    },
    {
      title: "RESOURCES",
      links: ["Articles", "Blogs", "Case Studies", "Notices", "FAQs", "Web Stories"],
    },
    {
      title: "ABOUT US",
      links: [
        "Artech Advantage",
        "Great Place to Work",
        "Awards",
        "Certifications & Accolades",
      ],
    },
  ];

  const locations = ["USA", "Canada", "India", "Philippines"];

  return (
    <>
      <footer className="bg-gray-900 text-white py-8 px-6 md:px-16 lg:px-32"> {/* Using gray-900 instead of black/90 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-medium mb-4 text-lg">{section.title}</h3> {/* Slightly smaller heading */}
              <ul className="space-y-1">
                {section.links.map((link, i) => (
                  <li key={i} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link}
                  </li>
                ))}
              </ul>
              {section.careerTitle && (
                <>
                  <h3 className="font-medium text-lg mt-6 mb-2">{section.careerTitle}</h3>
                  <ul className="space-y-1">
                    {section.careerLinks && section.careerLinks.map((link, i) => (
                      <li key={i} className="text-sm text-gray-300 hover:text-white transition-colors">
                        {link}
                      </li>
                    ))}
                  </ul>
                  {section.communityTitle && (
                    <h3 className="font-medium text-lg mt-6 mb-2">{section.communityTitle}</h3>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h2 className="text-xl font-medium text-center md:text-left">CONTACT US</h2> {/* Smaller heading */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center gap-1">
                  <FaLocationDot className="text-white" />
                  <span className="text-sm">{location}</span> {/* Smaller font */}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <h2 className="text-lg font-medium">FOLLOW US</h2>  {/* Smaller heading */}
            <div className="flex space-x-3">
              <FaLinkedin className="cursor-pointer text-xl text-gray-400 hover:text-blue-400 transition" aria-label="LinkedIn" />
              <FaFacebookF className="cursor-pointer text-xl text-gray-400 hover:text-blue-400 transition" aria-label="Facebook" />
              <FaXTwitter className="cursor-pointer text-xl text-gray-400 hover:text-blue-400 transition" aria-label="X (Twitter)" />
              <FaInstagram className="cursor-pointer text-xl text-gray-400 hover:text-blue-400 transition" aria-label="Instagram" />
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-gray-800 text-center text-xs text-gray-300 w-full flex justify-around py-3">  {/* Darker background, smaller font */}
        <p>© 2025 - Telenttrix LLC.</p>
        <p>| Sitemap | Privacy Policy | Terms of Use | Telenttrix Employee Online Forum Policy</p>
      </div>
    </>
  );
};

export default FooterAlt;
