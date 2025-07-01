import React from 'react';

const images = [
  {
    url: 'https://images.pexels.com/photos/2227774/pexels-photo-2227774.jpeg',
    alt: 'Tech image 1',
  },
  {
    url: 'https://images.pexels.com/photos/7903136/pexels-photo-7903136.jpeg',
    alt: 'Tech image 2',
  },
  {
    url: 'https://images.pexels.com/photos/4450337/pexels-photo-4450337.jpeg',
    alt: 'Tech image 3',
  },
  {
    url: 'https://images.pexels.com/photos/1661566/pexels-photo-1661566.jpeg',
    alt: 'Tech image 4',
  },
  {
    url: 'https://images.pexels.com/photos/2964163/pexels-photo-2964163.jpeg',
    alt: 'Tech image 5',
  },
  {
    url: 'https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg',
    alt: 'Tech image 6',
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center"
    >
        <div data-aos="fade-up"
  data-aos-duration="1000"> 
      <h2 className="text-3xl font-bold mb-12">Our Gallery</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
              <p className="text-lg font-semibold">View Image</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Gallery;
