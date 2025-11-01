import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Dororo",
    role: "CEO, Co-Founder",
    img: "/teamg1.png", // replace with your actual image path
  },
  {
    name: "Itachi",
    role: "CTO, Co-Founder",
    img: "/teamb1.png", // replace with your actual image path
  },
];

const Faces = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          The People Behind <span className="text-[#f97316]">ChefKart</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {team.map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <img
              src={person.img}
              alt={person.name}
              className="w-[280px] h-[320px] object-cover rounded-2xl shadow-lg"
            />

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              {person.name}
            </h3>
            <p className="text-gray-600">{person.role}</p>

            <div className="flex space-x-4 mt-4">
              <Link
                to="/linkedin"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
              >
                <Linkedin className="w-5 h-5 text-gray-700" />
              </Link>
              <Link
                to="/twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
              >
                <Twitter className="w-5 h-5 text-gray-700" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faces;
