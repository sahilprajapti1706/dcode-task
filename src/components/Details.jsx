import React from "react";

const Details = () => {
  return (
    <div className="relative min-h-[90vh] w-full bg-black flex flex-col px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-[url('./bg-2.png')] bg-cover bg-center bg-no-repeat opacity-30"
      ></div>

      {/* Effect Image (Positioned Absolutely) */}
      <div className="absolute top-10 left-0 transform -translate-x-1/2">
        <img src="./effect.png" alt="Effect" className="w-[150px] sm:w-[200px] md:w-[350px]"/>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row flex-grow w-full items-center justify-between py-10 text-white">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-end space-y-8 text-center md:text-left">
          {/* Main Heading */}
          <div className="text-3xl sm:text-4xl font-bold flex flex-col relative z-10">
            <span className="text-2xl sm:text-6xl">150+</span> Universities Participating
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <span className="font-bold text-2xl sm:text-5xl">72+</span>
              <span className="text-2xl">Judges</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl sm:text-5xl">21</span>
              <span className="text-2xl">Hackathons</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl sm:text-5xl">36+</span>
              <span className="text-2xl">Great Speakers</span>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="yt-img.png"
            alt="Right Section"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
