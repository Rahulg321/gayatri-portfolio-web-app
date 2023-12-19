import React from 'react';
import ContactForm from '@/components/Forms/ContactForm';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import FaqSection from '@/sections/FaqSection';

const page = () => {
  return (
    <>
      <section className="narrow-container">
        <h1 className="heading">Get in Touch!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ContactForm />
          <div>
            <div>
              <h4>Email</h4>
              <span>advocategayatrigupta@gmail.com</span>
            </div>
            <div>
              <h4>Get in Touch</h4>
              <span>advocategayatrigupta@gmail.com</span>
            </div>
            <div>
              <h4>Follow me</h4>
              <FaDiscord />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </div>
        </div>
      </section>
      <FaqSection />
    </>
  );
};

export default page;
