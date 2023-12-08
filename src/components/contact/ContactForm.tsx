'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { GiPositionMarker } from 'react-icons/gi';
import { MdOutlineMail } from 'react-icons/md';
import { useContactFormDataStore } from '@/store/store';
import ContactBanner, { ContactBannerProps } from '@/components/contact/ContactBanner';
import { sendContactEmail } from '@/service/contact';

const INIT_CONTACT_BANNER_DATA: ContactBannerProps = {
  state: null,
  message: '',
};

export default function ContactForm() {
  const [contactBannerData, setContactBannerData] = useState<ContactBannerProps>(INIT_CONTACT_BANNER_DATA);
  const { contactFormData, setContactFormData, resetContactFormData } = useContactFormDataStore();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendContactEmail(contactFormData) //
      .then(() => {
        setContactBannerData({ state: 'success', message: '메일을 성공적으로 보냈습니다.' });
        resetContactFormData();
      })
      .catch(() => {
        setContactBannerData({ state: 'failure', message: '메일전송에 실패했습니다. 다시 시도해 주세요.' });
      })
      .finally(() => {
        setTimeout(() => setContactBannerData(INIT_CONTACT_BANNER_DATA), 3000);
      });
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContactFormData(name, value);
  };

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
        <ContactBanner state={contactBannerData.state} message={contactBannerData.message} />
      </div>
      <form className="w-full flex gap-5 flex-col" onSubmit={onSubmit}>
        <input
          type="email"
          id="fromEmail"
          name="fromEmail"
          placeholder="Your Email Address"
          required
          autoFocus
          className="border p-3 rounded-md text-sm max-md:placeholder:text-sm"
          value={contactFormData.fromEmail}
          onChange={onInputChange}
        />
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          required
          className="border p-3 rounded-md text-sm max-md:placeholder:text-sm"
          value={contactFormData.title}
          onChange={onInputChange}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          className="border p-3 min-h-[150px] text-sm rounded-md max-md:placeholder:text-sm"
          value={contactFormData.message}
          onChange={onInputChange}
        />
        <button type="submit" className="bg-neutral-800 p-3 rounded-md text-neutral-300 max-md:text-sm">
          Send Message
        </button>
      </form>
    </section>
  );
}
