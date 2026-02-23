import React, { useState, useEffect } from 'react';
import ReactGA from "react-ga4";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already answered the consent prompt
    const consent = localStorage.getItem("ga_consent");
    
    if (!consent) {
      setIsVisible(true);
    } else if (consent === "granted") {
      initializeGA();
    }
  }, []);

  const initializeGA = () => {
    // Only fire GA if they accepted
    ReactGA.initialize("G-ST08W906FZ");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Landing Page" });
  };

  const handleAccept = () => {
    localStorage.setItem("ga_consent", "granted");
    setIsVisible(false);
    initializeGA();
  };

  const handleDecline = () => {
    localStorage.setItem("ga_consent", "denied");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t-2 border-brand-gold p-4 md:p-6 z-50 flex flex-col md:flex-row justify-between items-center gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="text-gray-300 text-sm md:text-base flex-1">
        <h3 className="text-brand-gold font-bold mb-1">Your Privacy</h3>
        <p>We use cookies to measure ad performance and improve your experience. Do you accept the use of these cookies?</p>
      </div>
      <div className="flex gap-4 w-full md:w-auto">
        <button 
          onClick={handleDecline} 
          className="flex-1 md:flex-none px-6 py-2 border border-gray-600 rounded text-gray-400 hover:text-white transition"
        >
          Decline
        </button>
        <button 
          onClick={handleAccept} 
          className="flex-1 md:flex-none px-6 py-2 bg-brand-gold text-black font-bold rounded hover:bg-[#b08d4a] transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
}