 import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner'; // If you renamed Hero
import Features from './components/Features';
import Reviews from './components/Reviews';
import SiteFooter from './components/SiteFooter';
import Navbar from './components/navbar';
import Gallery from './components/Gallery';
import Testing from './components/testing';
import SliderSection from './components/SliderSection';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home route (landing page with all sections) */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Features />
              <Gallery/>
              <Testing/>
              <SliderSection/>
              <Reviews />
              <SiteFooter />
            </>
          }
        />

        {/* Separate route for Features */}
        <Route
          path="/features"
          element={
            <>
              <Features />
              <SiteFooter />
            </>
          }
        />

        {/* Separate route for Reviews */}
        <Route
          path="/reviews"
          element={
            <>
              <Reviews />
              <SiteFooter />
            </>
          }
        />

        {/* Separate route for Contact */}
        <Route
          path="/contact"
          element={
            <>
              <SiteFooter />
            </>
          }
        />

        {/* Optional: 404 Not Found route */}
        <Route
          path="*"
          element={
            <>
              <h2 className="text-center text-3xl mt-20">404 - Page Not Found</h2>
              <SiteFooter />
            </>
          }
        />
      </Routes>
    </>
  );
}
export default App;