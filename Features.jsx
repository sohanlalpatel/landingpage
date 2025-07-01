import React from 'react';
import { FaRocket, FaPaintBrush, FaMobileAlt, FaPlug, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const features = [
  { title: "Fast Performance", desc: "Lightning-fast loading with optimized code.", icon: <FaRocket /> },
  { title: "Modern Design", desc: "Beautiful, clean, and modern UI components.", icon: <FaPaintBrush /> },
  { title: "Responsive", desc: "Looks great on all devices and screen sizes.", icon: <FaMobileAlt /> },
  { title: "Easy Integration", desc: "Easily connect with other services and tools you use.", icon: <FaPlug /> },
  { title: "Secure", desc: "Built with security best practices to protect your data.", icon: <FaShieldAlt /> },
  { title: "24/7 Support", desc: "Our team is always ready to help you when you need it.", icon: <FaHeadset /> },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 text-center">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-3xl text-white font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-600"
            >
              <div className="text-indigo-500 text-4xl mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
