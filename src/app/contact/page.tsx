import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Ivanselah에게 메일로 연락하기',
};

export default function ContactPage() {
  return (
    <section className="max-w-[500px] md:max-w-[850px] px-3 mx-auto flex flex-col justify-center">
      <div className="w-full flex flex-col justify-center items-center mb-20 max-md:mb-10">
        <h2 className="max-md:text-lg text-4xl mb-7">Contact</h2>
        <p className="max-md:text-sm text-xl text-center font-sans">
          언제든지 편하게 연락 주시기 바랍니다. <br />
          빠르게 답변 드리겠습니다.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
