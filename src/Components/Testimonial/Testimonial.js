import React from "react";
import Reviews from "./Review";
import Aboutus from "./Aboutus";

const testimonials = [
  {
    id: 1,
    text: "Everyone was amazed by the kind of party we threw, and the food was the talk of the party!",
    author: "Kavita",
    video: null,
  },
  {
    id: 2,
    text: "",
    author: "",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    text: "",
    author: "",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 4,
    text: "It was a great experience working with ChefKart.",
    author: "Customer",
    video: null,
  },
  {
    id: 5,
    text: "I will never go back to ordering food online because ChefKart just works great for me!",
    author: "Pramiti Upadhyay",
    video: null,
  },
  {
    id: 6,
    text: "",
    author: "",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const Testimonial = () => {
  return (
    <section className="w-full bg-white">
      {/* Fullscreen About Section */}
      <div className="h-screen w-full">
        <Aboutus />
      </div>

      {/* Reviews Section */}
      <div className="px-6 md:px-16 py-12">
        <Reviews />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-start gap-3"
            >
              {item.text && (
                <>
                  <span className="text-6xl leading-none text-gray-400">“</span>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.text}
                  </p>
                  <p className="text-[#ff5722] font-semibold text-sm">
                    {item.author}
                  </p>
                </>
              )}
              {item.video && (
                <video
                  src={item.video}
                  controls
                  className="rounded-xl w-full h-[220px] object-cover shadow-md"
                ></video>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
