import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SiteFooter = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"  data-aos="fade-up"
  data-aos-duration="1000">
        <div>
          <h3 className="text-xl font-bold mb-4">MyBrand</h3>
          <p>Empowering ideas with modern tech and design. Let's build something amazing together.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; 2025 MyBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
