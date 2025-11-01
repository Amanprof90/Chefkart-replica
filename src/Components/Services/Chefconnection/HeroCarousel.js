import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChefConnection = () => {
  const slides = [
    {
      id: 1,
      title: "Earn with Your Talent",
      desc: "Give your cooking skills a new beginning and start earning with ChefKart.",
      //img: "/images/chef1.png",
      bg: "/fc1.png",
    },
    {
      id: 2,
      title: "Empower Your Culinary Journey",
      desc: "Become a trained professional cook and turn your passion into income.",
     // img: "/images/chef2.png",
      bg: "/fc2.png",
    },
    {
      id: 3,
      title: "Cook. Serve. Grow.",
      desc: "Join thousands of home chefs growing their careers with ChefKart.",
     // img: "/images/chef3.png",
      bg: "/fc3.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    arrows: false,
    autoplaySpeed: 3000,
    speed: 1000,
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((s) => (
          <div key={s.id}>
            <div
              className="relative flex flex-col md:flex-row justify-between items-center h-screen text-white px-8 md:px-20"
              style={{
                background: `url(${s.bg}) center/cover no-repeat`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text */}
              <div className="relative z-10 max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {s.title}
                </h1>
                <p className="text-lg mb-6">{s.desc}</p>
                <button className="bg-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-600">
                  Join ChefKart
                </button>
              </div>

              {/* Image */}
              <div className="relative z-10 mt-8 md:mt-0">
                {/* <img
                  src={s.img}
                  alt="chef"
                  className="max-h-[400px] object-contain drop-shadow-lg"
                /> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ChefConnection;
