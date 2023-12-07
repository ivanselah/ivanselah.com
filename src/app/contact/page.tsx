import React from 'react';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <section className="max-w-[500px] md:max-w-[850px] px-3 mx-auto flex flex-col justify-center">
      <div className="w-full flex flex-col justify-center items-center mb-20 max-md:mb-10">
        <h2 className="max-md:text-lg text-4xl mb-7">Contact</h2>
        <span className="max-md:text-sm text-xl font-sans">
          Please feel free to contact me.
        </span>
      </div>
      <ContactForm />
    </section>
  );
}
