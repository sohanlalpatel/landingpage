  import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleClose = () => setShowLogin(false);

  return (
    <>
      <nav
        className="fixed w-full z-50 bg-transparent backdrop-blur-md bg-opacity-30 text-white transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-indigo-500 hover:text-indigo-400 transition">MyBrand</h1>
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 items-center font-medium">
            <li><a href="#hero" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="#features" className="hover:text-indigo-400 transition">Features</a></li>
            <li><a href="#gallery" className="hover:text-indigo-400 transition">Gallery</a></li>
            <li><a href="#testing" className="hover:text-indigo-400 transition">Testing</a></li>
            <li><a href="#slider" className="hover:text-indigo-400 transition">Highlights</a></li>
            <li><a href="#reviews" className="hover:text-indigo-400 transition">Reviews</a></li>
            <li>
              <button
                onClick={handleLoginClick}
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition shadow-md"
              >
                Login
              </button>
            </li>
          </ul>
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-indigo-400 transition focus:outline-none"
            >
              {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/70 backdrop-blur-md text-white shadow-lg transition-all duration-300">
            <ul className="flex flex-col space-y-4 py-6 px-6 font-medium">
              <li><a href="#hero" className="block hover:text-indigo-400" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#features" className="block hover:text-indigo-400" onClick={() => setMenuOpen(false)}>Features</a></li>
              <li><a href="#gallery" className="block hover:text-indigo-400" onClick={() => setMenuOpen(false)}>Gallery</a></li>
              <li><a href="#testing" className="block hover:text-indigo-400" onClick={() => setMenuOpen(false)}>Testing</a></li>
              <li><a href="#slider" className="block hover:text-indigo-400" onClick={() => setMenuOpen(false)}>Highlights</a></li>
              <li><a href="#reviews" className="block hover:text-indigo-400" onClick={() => setMenuOpen(false)}>Reviews</a></li>
              <li>
                <button
                  onClick={() => {
                    setShowLogin(true);
                    setMenuOpen(false);
                  }}
                  className="bg-indigo-600 text-white w-full py-2 rounded-full hover:bg-indigo-700 transition shadow-md"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-[90%] max-w-sm relative animate-fade-in-down">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black transition"
              onClick={handleClose}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition shadow-md"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;