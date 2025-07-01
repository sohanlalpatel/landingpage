import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    image: 'https://images.pexels.com/photos/1724430/pexels-photo-1724430.jpeg',
    title: 'Innovative Solutions',
    description: 'Bringing cutting-edge technology solutions to life.',
  },
  {
    image: 'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg',
    title: 'Creative Designs',
    description: 'Stunning visuals and designs that captivate users.',
  },
  {
    image: 'https://images.pexels.com/photos/31587587/pexels-photo-31587587.jpeg',
    title: 'Seamless Integration',
    description: 'Integrate with your existing tools smoothly and securely.',
  },
  {
    image: 'https://images.pexels.com/photos/6934/beach-vacation-water-summer.jpg',
    title: 'Next-Level Performance',
    description: 'Optimized for speed and scalability without compromise.',
  },
];

const SliderSection = () => {
  return (
    <section
      id="slider"
      className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Our Highlights</h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="max-w-6xl mx-auto rounded-xl shadow-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                <p className="max-w-xl text-center text-gray-300 px-4">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderSection;
