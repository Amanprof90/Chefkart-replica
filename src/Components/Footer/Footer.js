import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  // Instantly scroll to top and navigate
  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + App Download */}
        <div className="flex flex-col">
          {/* Logo Section */}
          <div className="flex items-center mb-6">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FLogo_black_9e78b44631.webp&w=1920&q=75"
                alt="ChefKart Logo"
                className="h-14 object-contain"
              />
            </Link>
          </div>

          {/* App Download Section */}
          <p className="font-bold mb-4 text-xl text-center">Get the app now!</p>

          <div className="flex flex-row items-center gap-3">
            <Link
              to="#"
              className="flex items-center justify-center bg-black text-white px-4 py-3 rounded-lg w-full sm:w-auto"
            >
              <FaApple className="text-3xl mr-3" />
              <div className="leading-tight text-left text-xs">
                <p className="text-[10px]">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </Link>

            <Link
              to="#"
              className="flex items-center justify-center bg-black text-white px-4 py-3 rounded-lg w-full sm:w-auto"
            >
              <FaGooglePlay className="text-2xl mr-3" />
              <div className="leading-tight text-left text-xs">
                <p className="text-[10px]">GET IT ON</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => handleNavigation("/Services/OneTimeCook/OneTimeCook")}
            className="hover:underline text-left"
          >
            One-Time Cook
          </button>
          <button
            onClick={() => handleNavigation("/Services/Chefconnection/ChefConnection")}
            className="hover:underline text-left"
          >
            Join ChefKart
          </button>
          <Link to="#" className="hover:underline">
            Cooks Near Me
          </Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => handleNavigation("/Services/PartyChef/PartyChef")}
            className="hover:underline text-left"
          >
            Chef for Party
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className="hover:underline text-left"
          >
            Contact Us
          </button>
        </div>

        {/* Column 3 */}
        <div>
          <a
            href="https://foundationfarming.blogspot.com/"
            className="block mb-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <button
            onClick={() => handleNavigation("/Components/About/About")}
            className="block mb-6 hover:underline text-left"
          >
            About Us
          </button>

          <p className="font-semibold mb-3">Follow Us</p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/thechefkart"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/thechefkart"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/thechefkart/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/42762980/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex gap-4 mb-3 sm:mb-0">
            <Link to="#" className="hover:text-orange-500">
              Terms & Services
            </Link>
            <Link to="#" className="hover:text-orange-500">
              Privacy Policy
            </Link>
          </div>

          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} ChefKart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
