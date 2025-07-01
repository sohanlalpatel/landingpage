import React from 'react';
import { FaCheckCircle, FaBug, FaRocket, FaShieldAlt } from 'react-icons/fa';

const tests = [
  {
    icon: <FaCheckCircle className="text-green-500 text-4xl mb-4" />,
    title: 'Automated Tests',
    description: 'Run comprehensive automated tests to ensure your app is always stable.',
  },
  {
    icon: <FaBug className="text-red-500 text-4xl mb-4" />,
    title: 'Bug Tracking',
    description: 'Identify and fix bugs quickly with integrated bug tracking tools.',
  },
  {
    icon: <FaRocket className="text-purple-500 text-4xl mb-4" />,
    title: 'Performance Testing',
    description: 'Measure load times and optimize for blazing fast experiences.',
  },
  {
    icon: <FaShieldAlt className="text-blue-500 text-4xl mb-4" />,
    title: 'Security Checks',
    description: 'Advanced security testing to keep your data and users safe.',
  },
];

const Testing = () => {
  return (
    <section
      id="testing"
      className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center"
    >
        <div data-aos="fade-up"
  data-aos-duration="1000"> 
      <h2 className="text-3xl font-bold mb-4">Testing & QA</h2>
      <p className="max-w-2xl mx-auto mb-12 text-gray-300">
        Our advanced testing pipeline ensures your application is reliable, fast, and secure at all times.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {tests.map((test, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-2xl hover:scale-105 transition transform duration-300"
          >
            {test.icon}
            <h3 className="text-xl font-semibold mb-2">{test.title}</h3>
            <p className="text-gray-400">{test.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Testing;
