import React from 'react';
// Import your images from the assets folder
import logo from './assets/logo.jpg';
import heroBg from './assets/hero-bg.jpg'; 
import van from './assets/van.jpg';
import sedan from './assets/sedan.jpg';
import CookieBanner from './CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-light font-sans overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-black border-b border-brand-gold/20 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ZCabs Logo" className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-full border border-brand-gold" />
          <span className="text-xl md:text-2xl font-serif text-brand-gold tracking-widest uppercase">ZCabs</span>
        </div>
        {/* Mobile: Hidden menu (Simplified for now) */}
        <div className="hidden md:flex gap-6 text-sm uppercase tracking-wide">
          <a href="#services" className="hover:text-brand-gold transition">Services</a>
          <a href="#fleet" className="hover:text-brand-gold transition">Our Fleet</a>
          <a href="#contact" className="hover:text-brand-gold transition">Contact</a>
        </div>
        {/* Mobile Call Action */}
        <a href="tel:+35699927097" className="md:hidden text-brand-gold text-sm font-bold border border-brand-gold px-3 py-1 rounded">
          CALL
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full min-h-[700px] md:h-[650px] flex items-center justify-center py-12 md:py-0 px-4 md:px-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black md:bg-gradient-to-r md:from-black md:via-black/70 md:to-transparent"></div>

        {/* Content & Booking Box Stacked on Mobile */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-10 w-full max-w-6xl items-center">
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-serif text-brand-gold mb-4 leading-tight">
              Luxury Transport <br className="hidden md:block"/> Service
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6 max-w-md mx-auto lg:mx-0">
              Experience unparalleled comfort and reliability. Book your premium ride across Malta today.
            </p>
          </div>

          {/* Booking Widget: Full width on mobile */}
          <div className="w-full max-w-md bg-white text-black p-5 md:p-8 rounded-lg shadow-2xl border-t-4 border-brand-gold">
            <h2 className="text-xl md:text-2xl font-bold mb-5">Book Your Ride</h2>
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Pick-up Location</label>
                <input type="text" placeholder="Enter pickup address" className="w-full p-3 h-12 bg-gray-100 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-gold" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Drop-off Location</label>
                <input type="text" placeholder="Where to?" className="w-full p-3 h-12 bg-gray-100 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-gold" />
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Date</label>
                  <input type="date" className="w-full p-3 h-12 bg-gray-100 border border-gray-200 rounded text-sm focus:outline-none" />
                </div>
                <div className="flex-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Time</label>
                  <input type="time" className="w-full p-3 h-12 bg-gray-100 border border-gray-200 rounded text-sm focus:outline-none" />
                </div>
              </div>
              <button className="w-full bg-brand-gold text-black font-bold uppercase tracking-wider py-4 rounded hover:bg-[#b08d4a] active:scale-[0.98] transition-all mt-2">
                Get Fare Estimate
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fleet Section */}
      <section id="fleet" className="py-16 px-4 md:px-8 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-gold mb-3">Our Premium Fleet</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-4"></div>
            <p className="text-gray-400 text-sm md:text-base">Arrive in style with our top-of-the-line vehicles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Sedan Card */}
            <div className="bg-black rounded-lg overflow-hidden border border-gray-800">
              <img src={sedan} alt="Luxury Sedan" className="w-full h-56 md:h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl text-brand-gold mb-2">Executive Sedans</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Perfect for corporate travel, airport transfers, and private city tours. Featuring the Mercedes-Benz S-Class.</p>
              </div>
            </div>

            {/* Van Card */}
            <div className="bg-black rounded-lg overflow-hidden border border-gray-800">
              <img src={van} alt="Luxury Van" className="w-full h-56 md:h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl text-brand-gold mb-2">Luxury Minivans</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Spacious comfort for groups and excess luggage. Featuring the Mercedes-Benz V-Class.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-12 px-4 border-t border-brand-gold/20 text-center">
        <h2 className="text-2xl font-serif text-brand-gold mb-6 italic">ZCabs Malta</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm text-gray-400 mb-8">
          <a href="tel:+35699927097" className="hover:text-brand-gold transition">📞 +356 9992 7097 bU!J7ukp</a>
          <a href="mailto:zcabsmalta@gmail.com" className="hover:text-brand-gold transition">✉️ zcabsmalta@gmail.com</a>
        </div>
        <p className="text-[10px] text-gray-600 uppercase tracking-widest">&copy; 2026 ZCabs Luxury Transport Service. All rights reserved.</p>
      </footer>
      <CookieBanner />
    </div>
  );
}

export default App;