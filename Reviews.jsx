import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: "Emily Carter",
    title: "Product Manager",
    quote: "This product has completely transformed the way we work. Incredible quality and support!",
  },
  {
    name: "David Lee",
    title: "Startup Founder",
    quote: "I can't imagine launching our startup without this. It’s fast, reliable, and beautifully designed.",
  },
  {
    name: "Sarah Johnson",
    title: "Designer",
    quote: "A true game changer. The UI is fantastic and our clients love it too.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-center mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{review.quote}"</p>
              <div className="mt-auto">
                <h4 className="text-lg text-white font-semibold">{review.name}</h4>
                <p className="text-sm text-gray-400">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
