import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const GetSocial = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-white">
      {/* Main Section */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/food1.png"
            alt="Dish"
            className="rounded-2xl shadow-2xl shadow-gray-600 object-cover w-[500px] h-[400px]"
          />
        </div>

        {/* Right Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
            Operating in Gurgaon!
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
            />
            <select
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
            >
              <option value="">City</option>
              <option value="gurgaon">Gurgaon</option>
              <option value="noida">Noida</option>
              <option value="delhi">Delhi</option>
            </select>

            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <span className="flex items-center px-3 bg-gray-50 text-gray-600 text-sm">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                placeholder="Mobile"
                className="w-full px-4 py-2 outline-none"
              />
            </div>

            <textarea
              placeholder="Message..."
              rows="3"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
            ></textarea>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="agree" className="accent-orange-500" />
              <label
                htmlFor="agree"
                className="text-sm text-gray-600 cursor-pointer"
              >
                I agree to Chefkart’s terms of service &{" "}
                <span className="text-orange-500">Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-medium py-2 rounded-md hover:bg-orange-600 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Social Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Let’s Get Social
        </h3>

        <div className="flex justify-center space-x-6 text-2xl text-gray-700">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetSocial;
