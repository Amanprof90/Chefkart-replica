import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Majorslider = () => {
  const slides = [
    {
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FNCVET_01_2_97436de85c.png&w=384&q=75",
      title: "A Major Initiative",
      text: "NCVET regulates and monitors the functioning of vocational training institutions both in the short and long term, ensuring quality and standards.",
    },
    {
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSkill_India_Preview_removebg_preview_1_03db4e9828.png&w=384&q=75",
      title: "Skill Development",
      text: "NSDC works to promote skill development by catalyzing the creation of large, quality, and for-profit vocational institutions across India.",
    },
    {
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FScreenshot_2023_07_10_at_4_52_1_658c10251b.png&w=384&q=75",
      title: "Empowering Workforce",
      text: "MSDE aims to empower India’s workforce by providing better access to quality training and creating employment-ready youth.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    cssEase: "linear",
  };

  return (
    <section className="w-full bg-[#FFF8F3] py-16">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          A Major Initiative
        </h2>

        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="p-6">
              <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-48 h-48 object-contain mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {slide.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{slide.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Majorslider;
