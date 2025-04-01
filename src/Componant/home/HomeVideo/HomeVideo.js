import React, { useState } from "react";
import video from "../../../imeges/Intelligence-AV.mp4";
 // Import your image

const HomeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 flex flex-col md:flex-row items-center overflow-hidden gap-8">
      {/* Text Content Section */}
      <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
        <h1 className="text-[20px] md:text-[30px] font-medium text-[#253e91]">
          Achieve Optimized Efficiencies Intelligently.
        </h1>

        <div className="text-gray-700 space-y-5 sm:space-y-4">
          <p className="text-[13px] font-semibold">
            Workforce Solutions to Managed Services, today most organizations
            need a complete spectrum of intelligent business solutions. They
            need experienced partners with expertise who can provide value,
            flexibility and financial predictability.
          </p>

          <p className="text-[13px] font-semibold">
            Plus talent needs opportunities to apply their intellect and
            progress in their career.
          </p>

          <p className="text-[13px] font-semibold">
            We empower both and are the eco system that connects people,
            technologies and opportunities with intelligence.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
        <div className="aspect-video w-full relative">
          {!isPlaying ? (
            <div className="relative w-full h-full overflow-hidden">
             
              <button
                onClick={handleVideoToggle}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                aria-label="Play video"
              >
             
              </button>
            </div>
          ) : (
            <div className="overflow-hidden">
              <video
                src={video}
                className="w-full h-full object-cover"
                controls
                autoPlay
                onEnded={() => setIsPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;