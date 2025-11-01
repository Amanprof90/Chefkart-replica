import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Vishal Mishra",
      text: `"It was essential to earn for my child's education. During tough times, ChefKart not only supported me financially but also respected my need for time off."`,
      rating: 5,
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMale_female_Cooks_ceb391c475.webp&w=256&q=75",
    },
    {
      name: "Harikesh Mishra",
      text: `"Even during difficult days, ChefKart supported me like a family member. Because of ChefKart, my respect and confidence grew tremendously."`,
      rating: 5,
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMale_female_Cooks_ceb391c475.webp&w=256&q=75",
    },
    {
      name: "Poonam Deshmukh",
      text: `"I always wanted my daughter to be independent and respected. Through ChefKart, she gained valuable experience and now works confidently in a company."`,
      rating: 5,
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMale_female_Cooks_ceb391c475.webp&w=256&q=75",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 ">
      {/* Heading */}
      
      <h2 className="bg-[#0000] text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
        Let's hear it from our Customers
      </h2>
      

      {/* Quote + Video Section */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-10 mb-16">
        {/* Left Quote */}
        <div className="md:w-1/2 text-left">
          <p className="text-7xl text-black font-serif leading-none mb-4">“</p>
          <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug mb-4">
            "Where you don’t get respect, ChefKart will never send you to that
            home."
          </p>
          <p className="text-orange-600 font-semibold text-lg">- Anjanahar Devi</p>
        </div>

        {/* Right YouTube Video */}
        <div className="md:w-1/2 w-full">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/QYsxX7kRbYI?si=XwkZiURQnBubKShH"
              title="ChefKart Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-[#193A36] text-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black border-2 border-transparent hover:border-green-900"
          >
            <div className="flex items-center mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full border-2 border-white mr-4"
              />
              <div>
                <p className="font-semibold text-lg">{t.name}</p>
                <div className="flex text-yellow-400">
                  {"★".repeat(t.rating)}
                </div>
              </div>
            </div>
            <p className="text-sm md:text-base leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
