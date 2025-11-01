import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ added useNavigate
import { GiHamburger } from "react-icons/gi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // ✅ hook for smooth redirect

  const handleNavigateContact = () => {
    setMenuOpen(false);
    navigate("/contact"); // ✅ instantly redirects to Contact page
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ smooth scroll to top
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-wrap justify-between items-center gap-y-3">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FLogo_black_9e78b44631.webp&w=1920&q=75"
                alt="ChefKart Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-base sm:text-lg font-medium text-gray-800 items-center">
            {/* Our Services Dropdown */}
            <div className="relative group cursor-pointer">
              <span className="flex items-center hover:text-orange-500 transition">
                Our Services
                <svg
                  className="w-4 h-4 ml-1 mt-[2px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              {/* Dropdown */}
              <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 py-2 w-44 border border-gray-200 left-1/2 -translate-x-1/2 z-50">
                <Link
                  to="/Services/OneTimeCook/OneTimeCook"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  One-Time Cook
                </Link>
                <Link
                  to="/Services/PartyChef/PartyChef"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Party Chef
                </Link>
                <Link
                  to="/Services/MonthlyCook/MonthlyCook"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Monthly Cook
                </Link>
                <Link
                  to="/Services/Chefconnection/ChefConnection"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Join Chefkart
                </Link>
              </div>
            </div>

            {/* Cooks Near Me */}
            <Link to="#" className="hover:text-orange-500 transition">
              Cooks Near Me
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* ✅ Fixed redirect with smooth scroll */}
            <button
              onClick={handleNavigateContact}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-md transition text-sm sm:text-base"
            >
              Contact Us
            </button>

            {/* Burger Icon */}
            <button
              onClick={() => setMenuOpen(true)}
              className="w-11 h-11 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition"
            >
              <GiHamburger className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* SIDE SLIDER MENU */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-black transition"
          >
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-5 py-4 space-y-4 text-gray-700 font-medium">
          <Link
            to="/Components/About/About"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 transition"
          >
            About Us
          </Link>
          <Link to="#" className="hover:text-orange-500 transition">
            Blog
          </Link>
          <Link
            to="/Components/Careers/Positions"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 transition"
          >
            Career
          </Link>
          <Link
            to="./Components/Testimonial/Testimonial"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 transition"
          >
            Testimonial
          </Link>

          {/* Divider */}
          <div className="border-t border-gray-200 my-2"></div>

          {/* ✅ Fixed redirect with smooth scroll */}
          <button
            onClick={handleNavigateContact}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-md transition text-center"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
