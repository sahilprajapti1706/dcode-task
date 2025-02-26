import { motion } from "framer-motion";
import React from "react";
import Menubar from "./Menubar";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen overflow-hidden flex flex-col"
    >
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./Bg-video.mp4"
        autoPlay
        loop
        muted
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <nav className="absolute top-0 left-0 w-full flex items-center justify-start gap-5 py-4 px-6 sm:px-10 md:px-20 z-20">

        <motion.div
          className="flex items-center gap-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="./Hlogo.png" alt="Logo" className="w-8 sm:w-10" />
          <span className="text-white sm:text-xl md:text-xl font-bold">
            HACKINDIA
          </span>
        </motion.div>

        <div className="lg:block hidden">
          <Menubar />
        </div>
      </nav>

      <motion.div
        className="relative flex flex-col items-center text-white text-center z-10 flex-grow pt-28 sm:pt-28 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Centered Logo */}
        <motion.img
          src="./SignityLogo.png"
          alt="Centered Logo"
          className="w-40 sm:w-52 md:w-60"
          whileHover={{ scale: 1.1 }}
        />

        <motion.div className="relative mt-5">
          
          <div
            className="absolute left-[-6px] top-[0%] sm:top-[0%] w-[60px] sm:w-[112px] h-[40px] sm:h-[70px] bg-[#F86720] -z-10 rounded-lg"
          ></div>

          <span className="relative text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide z-10">
            HACKINDIA2025
          </span>
        </motion.div>

        <div className="text-lg sm:text-2xl md:text-2xl font-medium tracking-wide my-5">
          India's Biggest Web3 & AI Hackathon
        </div>

        {/* Date */}
        <motion.div
          className="text-sm sm:text-lg md:text-xl font-medium tracking-wide bg-gradient-to-r from-[#6A1799] to-[#230833] text-white p-2 sm:p-3 sm:px-5 rounded-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          February 28 - September 28
        </motion.div>

        {/* Event Details */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-8 text-sm sm:text-xl font-semibold pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>

        <motion.div className="pt-10" whileHover={{ scale: 1.1 }}>
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
              ></path>
            </svg>
            <span className="relative z-10 text-white font-bold flex justify-center items-center h-[60px] w-[200px] transition-all duration-300 text-lg sm:text-lg">
              Register Now
            </span>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
