import React from 'react';
import HeroSpline from './components/HeroSpline';
import FeaturedGrid from './components/FeaturedGrid';
import AboutSplit from './components/AboutSplit';
import ContactBooking from './components/ContactBooking';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-black/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="font-serif text-2xl">DStudioos</a>
          <nav className="hidden gap-6 md:flex">
            <a href="#portfolio" className="text-sm hover:text-black/70">Portfolio</a>
            <a href="#about" className="text-sm hover:text-black/70">About</a>
            <a href="#booking" className="text-sm hover:text-black/70">Booking</a>
          </nav>
          <a href="#booking" className="rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-neutral-900">Book Now</a>
        </div>
      </header>

      <main className="pt-14">
        <HeroSpline />

        <section id="about" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Luxury Photography Studio</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">Where Art Meets Precision</h2>
              <p className="mt-3 text-neutral-700">We craft sophisticated visuals with a black–gold aesthetic, soft gradients, and cinematic tones inspired by high-end editorials and Instagram minimalism.</p>
            </div>
          </div>
        </section>

        <FeaturedGrid />
        <AboutSplit />
        <ContactBooking />
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-neutral-600">© {new Date().getFullYear()} DStudioos. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:text-black">Instagram</a>
              <a href="#" className="hover:text-black">Facebook</a>
              <a href="#" className="hover:text-black">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
