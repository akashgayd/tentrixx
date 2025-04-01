import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Home1 from "../../../imeges/USA-85x85.png";
import Home2 from "../../../imeges/Canada-85x85.png";
import Home3 from "../../../imeges/India-85x85.png";
import Home4 from "../../../imeges/philippines-flag.png";
import Home5 from "../../../imeges/homeSlider1.jpeg";
import Home6 from "../../../imeges/homeSlider2.jpeg";

const HomeSlider = () => {
  const countryFlags = [
    { name: "USA", imageUrl: Home1 },
    { name: "Canada", imageUrl: Home2 },
    { name: "India", imageUrl: Home3 },
    { name: "Philippines", imageUrl: Home4 }, // Fixed spelling
  ];

  const heroImages = [Home5, Home6];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  React.useEffect(() => {
    heroImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [heroImages]);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-blue-950 text-white h-screen max-h-[650px]"
        style={{
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div></div>
        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        </div>
        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 z-10 rounded-full"
          onClick={goToPrevious}
          aria-label="Previous Slide"
        >
          <ChevronLeft className="text-white" size={36} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 z-10 rounded-full"
          onClick={goToNext}
          aria-label="Next Slide"
        >
          <ChevronRight className="text-white" size={36} />
        </button>


        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          <div className=" mx-auto px-4">
            <div className="grid grid-cols-4 bg-white rounded-t-lg overflow-hidden w-[80%] shadow-md mx-auto">
              <div className="p-3 text-center border-r border-gray-200 hover:bg-blue-900 hover:text-white transition-colors">
                <h3 className="text-gray-900 font-medium underline hover:text-white text-auto">
                  Managed Services and
                  <br />
                  Project Delivery
                </h3>
              </div>
              <div className="p-3 text-center border-r border-gray-200 hover:bg-blue-900 hover:text-white transition-colors">
                <h3 className="text-gray-900 font-medium underline hover:text-white text-lg">
                  Workforce
                  <br />
                  Solutions
                </h3>
              </div>
              <div className="p-3 text-center border-r border-gray-200 hover:bg-blue-900 hover:text-white transition-colors">
                <h3 className="text-gray-900 font-medium underline hover:text-white text-lg">
                  Diversity and Inclusion
                  <br />
                  Programs
                </h3>
              </div>
              <div className="p-6 text-center hover:bg-blue-900 hover:text-white transition-colors">
                <h3 className="text-gray-900 font-medium underline hover:text-white text-lg">
                  Consulting
                  <br />
                  Opportunities
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Flags Section */}
      <section className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* Title on small devices */}
            <div className="md:hidden text-center mb-4">
              <p className="text-lg">
                To find out how we can empower you, contact us now!
              </p>
            </div>

            {/* Desktop view */}
            <div className="hidden md:flex md:flex-row md:justify-between md:items-center md:w-full">
              <div>
                <p className="text-sm font-semibold">
                  To find out how we can empower you, contact us now!
                </p>
              </div>

              <div className="flex space-x-8 justify-center">
                {countryFlags.map((flag) => (
                  <div className="flex flex-col items-center" key={flag.name}>
                    <div className="rounded-full overflow-hidden w-16 h-16 mb-2 border-2 shadow-md">
                      <div className="bg-white h-full w-full flex items-center justify-center">
                        <img
                          src={flag.imageUrl}
                          alt={`${flag.name} Flag`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium">{flag.name}</span>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Our Partner Office Locations:
                  <br />
                  Singapore, Ireland, Poland, & Mexico
                </p>
              </div>
            </div>

            {/* Mobile view - 2x2 grid */}
            <div className="md:hidden grid grid-cols-2 gap-x-16 gap-y-4 justify-items-center mb-4">
              {countryFlags.map((flag) => (
                <div className="flex flex-col items-center" key={flag.name}>
                  <div className="rounded-full overflow-hidden w-16 h-16 mb-2 border-2 border-white shadow-md">
                    <div className="bg-white h-full w-full flex items-center justify-center">
                      <img
                        src={flag.imageUrl}
                        alt={`${flag.name} Flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium">
                    {flag.name === "Philippines"
                      ? "PHILIPPINES"
                      : flag.name.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>

            {/* Partner locations on small devices */}
            <div className="md:hidden text-center mt-2">
              <p className="text-sm font-semibold">
                Our Partner Office Locations:
                <br />
                Singapore, Ireland, Poland, & Mexico
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSlider;