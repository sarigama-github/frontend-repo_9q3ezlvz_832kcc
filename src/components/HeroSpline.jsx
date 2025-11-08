import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const HeroSpline = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to add luxury feel without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 70% 20%, rgba(212, 175, 55, 0.15) 0%, rgba(0,0,0,0) 60%)' }} />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="font-serif text-4xl leading-tight md:text-6xl">
          Capturing Moments with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F8E9D2]">Style</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          DStudioos is a luxury photography & creative studio crafting cinematic visuals with a modern, minimalist aesthetic.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#booking" className="group rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F8E9D2] px-6 py-3 font-medium text-black transition hover:opacity-90">
            Book Now
          </a>
          <a href="#portfolio" className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-white/40">
            View Portfolio <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSpline;
