import React from 'react';
import { Camera, Heart, PenTool } from 'lucide-react';

const AboutSplit = () => {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-10 px-6 py-20 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h3 className="font-serif text-3xl md:text-4xl">Our Journey</h3>
          <p className="mt-4 text-neutral-700">
            DStudioos is a collective of photographers and visual artists dedicated to crafting elegant, cinematic imagery. From intimate weddings to bold commercial campaigns, we bring precision, creativity, and emotion to every frame.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
              <PenTool className="mx-auto mb-3 text-[#D4AF37]" />
              <p className="font-medium">Creativity</p>
              <p className="mt-1 text-sm text-neutral-600">Artful composition & storytelling.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
              <Camera className="mx-auto mb-3 text-[#D4AF37]" />
              <p className="font-medium">Precision</p>
              <p className="mt-1 text-sm text-neutral-600">Technical excellence in every shot.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
              <Heart className="mx-auto mb-3 text-[#D4AF37]" />
              <p className="font-medium">Emotion</p>
              <p className="mt-1 text-sm text-neutral-600">Capturing moments that linger.</p>
            </div>
          </div>
        </div>
        <div className="order-1 overflow-hidden rounded-2xl md:order-2">
          <img
            src="https://images.unsplash.com/photo-1509321706493-6fb1b9f3b46d?q=80&w=1600&auto=format&fit=crop"
            alt="DStudioos team at work"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSplit;
