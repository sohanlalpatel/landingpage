import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen text-center text-white"
    >
      {/* Background Image */}
      <div
        className="absolute top-4 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg')`,
        }}
      >
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4" data-aos="fade-up"
  data-aos-duration="1000">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our Platform</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          We deliver high-quality, cutting-edge solutions to help your business grow.
        </p>
        <a
          href="#features"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 px-8 rounded-full shadow-lg"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
};

export default Hero;
