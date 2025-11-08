import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1519961655809-34fa156820f9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922215-cf1bd6bffe46?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505740106531-4243f3831a70?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516646255117-8c52a3cbcf5e?q=80&w=1600&auto=format&fit=crop',
];

const FeaturedGrid = () => {
  return (
    <section id="portfolio" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Featured Work</h2>
            <p className="mt-2 text-sm text-neutral-600">An Instagram-inspired grid with subtle luxury accents.</p>
          </div>
          <a href="#booking" className="hidden rounded-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white md:inline-block">Book a Session</a>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
          {images.map((src, i) => (
            <div key={i} className="relative mb-4 overflow-hidden rounded-lg bg-neutral-100">
              <img
                src={src}
                alt={`DStudioos shot ${i + 1}`}
                className="h-full w-full scale-100 object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity hover:opacity-100" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;
