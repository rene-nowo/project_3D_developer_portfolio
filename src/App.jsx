import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import CookieBanner from './components/CookieBanner';
import Amazon from './components/Amazon';

const App = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieBanner(false);
  }


  return (
    
    <BrowserRouter>
    {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} />}
      <Navbar />

      

      <Routes>
        <Route path="/" element={
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            {/* <Feedbacks /> */}
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        } />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/amazon" element={<Amazon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;