import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "हफिज़ुल्लाह मियाँ",
    text: "बेटे के इलाज के लिए पैसों की बहुत ज़रूरत थी। इस कठिन समय में मुझे ChefKart ने ना सिर्फ़ आर्थिक सहायता दी बल्कि छुट्टियाँ लेने में भी बहुत सहयोग दिखाया।",
    img: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 2,
    name: "Amit Sharma",
    text: "Chefkart has made life so much easier. Having a reliable home cook has saved me both time and stress!",
    img: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: 3,
    name: "Diwakar Kumar",
    text: "I like cooking my own meals, but when I am occupied with work, I book Chefkart. It's a much-required service that is convenient and more affordable than ordering online.",
    img: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 4,
    name: "Tarun Gehlaut",
    text: "I joined a home with a Chefkart cook 5 months ago. It has been very easy for me to be onboarded and to manage my cook timings.",
    img: "https://i.pravatar.cc/150?img=12",
  },
];

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full bg-[#0000-] py-16 px-6 md:px-12">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-14">
        Don’t take our word for it
      </h2>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-4">
              <div className="relative bg-[#123f2e] text-white rounded-2xl px-6 py-10 text-center shadow-xl min-h-[320px] flex flex-col justify-between">
                {/* Profile Image */}
                <div className="absolute -top-0 left-1/2 -translate-x-1/2">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-20 h-20 rounded-full border-0 border-white shadow-lg object-cover"
                  />
                </div>

                {/* Stars */}
                <div className="mt-12 mb-3 flex justify-center gap-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                </div>

                {/* Review Text */}
                <p className="text-base leading-relaxed italic mb-4">
                  “{review.text}”
                </p>

                {/* Divider */}
                <div className="w-16 h-[1px] bg-white mx-auto mb-2 opacity-60" />

                {/* Name */}
                <p className="font-semibold text-sm md:text-base">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Review;
