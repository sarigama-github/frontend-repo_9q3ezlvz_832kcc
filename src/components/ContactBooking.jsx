import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const ContactBooking = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="booking" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h3 className="font-serif text-3xl md:text-4xl">Book Your Session</h3>
          <p className="mt-2 text-neutral-600">Tell us about your vision—let's create something timeless.</p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-neutral-600">Name</label>
                <input required className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:border-black focus:outline-none" />
              </div>
              <div>
                <label className="text-sm text-neutral-600">Phone</label>
                <input required className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:border-black focus:outline-none" />
              </div>
              <div>
                <label className="text-sm text-neutral-600">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:border-black focus:outline-none" />
              </div>
              <div>
                <label className="text-sm text-neutral-600">Date</label>
                <input type="date" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:border-black focus:outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-neutral-600">Type of Service</label>
                <select className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:border-black focus:outline-none">
                  <option>Wedding Photography</option>
                  <option>Event Coverage</option>
                  <option>Portrait Session</option>
                  <option>Product & Commercial</option>
                  <option>Editing / Retouching</option>
                  <option>Album Printing</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-neutral-600">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:border-black focus:outline-none" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F8E9D2] px-6 py-3 font-medium text-black shadow-sm transition hover:opacity-90">
              {submitted ? 'Thank you for booking with us!' : 'Submit'}
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h4 className="mb-3 font-serif text-2xl">Visit Our Studio</h4>
              <div className="flex items-center gap-3 text-neutral-700"><MapPin className="text-[#D4AF37]" /> 123 Studio Lane, Creative District, Mumbai</div>
              <div className="mt-2 flex items-center gap-3 text-neutral-700"><Phone className="text-[#D4AF37]" /> +91 98765 43210</div>
              <div className="mt-2 flex items-center gap-3 text-neutral-700"><Mail className="text-[#D4AF37]" /> hello@dstudioos.com</div>
              <div className="mt-6 overflow-hidden rounded-xl">
                <iframe
                  title="DStudioos Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610012862!2d72.7410988043439!3d19.082522323946576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630f33b1fb3%3A0x96f1b4a9a9e7f0!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare />
      </a>
    </section>
  );
};

export default ContactBooking;
