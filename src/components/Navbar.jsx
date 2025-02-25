const Navbar = () => {
    return (
      <div className="flex items-center justify-between px-4 sm:px-10 py-4 bg-black shadow-md">
        {/* Logo */}
        <a href="/">
          <img src="/Logo.png" alt="logo" className="h-10 sm:h-[40px] w-auto" />
        </a>
  
        {/* Sign In Button */}
        <a 
          href="#" 
          className="relative flex items-center justify-center w-40 md:w-48 h-12 md:h-[53px] text-gray-700 hover:text-purple-500"
        >
          {/* SVG Button */}
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 150 53" fill="none">
            <path 
              d="M55.2183 5.79534L55.3456 5.88201H55.4997H149.5V45.0939L139.271 51.7824H8.93774V0.5H47.4392L55.2183 5.79534Z" 
              fill="#D9D9D9" 
              fillOpacity="0.05" 
              stroke="#B026FF">
            </path>
            <path 
              d="M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z" 
              stroke="#B026FF" 
              strokeWidth="0.7">
            </path>
          </svg>
  
          {/* Centered Text */}
          <span className="absolute inset-0 flex justify-center items-center font-semibold text-white text-sm md:text-base">
            Sign In
          </span>
        </a>
      </div>
    );
  };
  
  export default Navbar;
  