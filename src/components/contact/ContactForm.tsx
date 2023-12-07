'use client';

import React from 'react';
import { PiStarThin } from 'react-icons/pi';
import { GiPositionMarker } from 'react-icons/gi';
import { MdOutlineMail } from 'react-icons/md';

export default function ContactForm() {
  return (
    <section className="flex max-md:flex-col justify-between">
      <div className="w-full text-neutral-700 dark:text-neutral-400 mb-3">
        <div className="text-xl mb-2 max-md:text-sm">
          <h3>Hahm Song Min</h3>
        </div>
        <div className="flex items-center gap-1 text-xl max-md:text-sm mb-2">
          <GiPositionMarker />
          <span className="text-sm">Seoul, Republic of Korea</span>
        </div>
        <div className="flex items-center gap-1 text-xl max-md:text-sm mb-2">
          <MdOutlineMail />
          <span className="text-sm">tft0720@gmail.com</span>
        </div>
      </div>
      <form className="w-full flex gap-5 flex-col">
        <input
          type="email"
          id="fromEmail"
          name="fromEmail"
          placeholder="Your Email Address"
          required
          autoFocus
          className="border p-3 rounded-md max-md:placeholder:text-sm"
        />
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          required
          className="border p-3 rounded-md max-md:placeholder:text-sm"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          className="border p-3 min-h-[150px] rounded-md max-md:placeholder:text-sm"
        />
        <button className="bg-neutral-800 p-3 rounded-md text-neutral-300 max-md:text-sm">
          Send Message
        </button>
      </form>
    </section>
  );
}
