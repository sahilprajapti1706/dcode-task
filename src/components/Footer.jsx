import React from 'react';

const Footer = () => {
  return (
    <div className="relative h-[20vh] w-full bg-black flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 text-white">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-[url('./bg-2.png')] bg-cover bg-center bg-no-repeat opacity-30"
      ></div>

      {/* Footer Content */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Section - Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-lg font-medium">
          <span>© 2024 DcodeBlock</span>
        </div>

        {/* Right Section - Links */}
        <div className="flex flex-wrap items-center gap-6 text-sm sm:text-lg mt-3 md:mt-0">
          <p className="cursor-pointer hover:text-gray-400 transition">Help Center</p>
          <p className="hidden sm:block">|</p>
          <p className="cursor-pointer hover:text-gray-400 transition">Terms & Conditions</p>
          <p className="hidden sm:block">|</p>
          <p className="cursor-pointer hover:text-gray-400 transition">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
