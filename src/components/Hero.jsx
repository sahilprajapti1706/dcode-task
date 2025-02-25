import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./Bg-video.mp4"
        autoPlay
        loop
        muted
      />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between py-4 px-6 sm:px-10 md:px-20 z-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="./Hlogo.png" alt="Logo" className="w-8 sm:w-10" />
          <span className="text-white  sm:text-xl md:text-xl font-bold">
            HACKINDIA
          </span>
        </div>
      </nav>

      {/* Centered Content */}
      <div className="relative flex flex-col items-center text-white text-center z-10 flex-grow pt-28 sm:pt-28 mb-4">
        {/* Centered Logo */}
        <img src="./SignityLogo.png" alt="Centered Logo" className="w-40 sm:w-52 md:w-60" />

        {/* Event Name */}
        <div className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide mt-5">
          HACKINDIA2025
        </div>
        <div className="text-lg sm:text-2xl md:text-2xl font-medium tracking-wide my-5">
          India's Biggest Web3 & AI Hackathon
        </div>

        {/* Date */}
        <div className="text-sm sm:text-lg md:text-xl font-medium tracking-wide bg-gradient-to-r from-[#6A1799] to-[#230833] text-white p-2 sm:p-3 sm:px-5 rounded-lg">
          February 28 - September 28
        </div>

        {/* Event Details */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-8 text-sm sm:text-xl font-semibold pt-6">
          <p>
            <span className="text-[#F86720]">$150+ </span>Prize Pool
          </p>
          <span className="hidden sm:inline">|</span>
          <p>
            <span className="text-[#F86720]">150+ </span>University
          </p>
          <span className="hidden sm:inline">|</span>
          <p>
            <span className="text-[#F86720]">25,000+ </span>Students
          </p>
        </div>

        {/* Register Button */}
        <div className="pt-10">
          <a href="#" className="relative block group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="58"
              viewBox="0 0 200 70"
              fill="none"
              className="absolute top-0 left-0 transition-all duration-300 group-hover:stroke-[#D026FF]"
            >
              <path
                d="M65.2183 7.79534L65.3456 7.88201H65.4997H189.5V60.0939L179.271 68.7824H12.9377V0.5H57.4392L65.2183 7.79534Z"
                fill="#D9D9D9"
                fillOpacity="0.05"
                stroke="#B026FF"
                className="transition-all duration-300 group-hover:stroke-[#D026FF]"
              ></path>
              <path
                d="M2.35937 62.8035H0.35V67.65H5.54843V0.349998H0.35V48.6037L2.61222 50.9673L2.70937 51.0688V51.2093V62.4535V62.8035H2.35937Z"
                stroke="#B026FF"
                strokeWidth="0.7"
                className="transition-all duration-300 group-hover:stroke-[#D026FF]"
              ></path>
            </svg>
            <span className="relative z-10 text-white font-bold flex justify-center items-center h-[60px] w-[200px] transition-all duration-300 group-hover:text-[#B026FF] text-lg sm:text-lg">
              Register Now
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
