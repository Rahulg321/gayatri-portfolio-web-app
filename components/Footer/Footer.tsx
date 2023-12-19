import React from 'react';

import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <section className="big-container">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h4>Law Offices of Gayatri</h4>
          <span>1282/2 Rupa Mistri Street, Ludhiana</span>
          <span>&copy; 2023 All Rights Reserved </span>
        </div>

        <div>
          <h4>About</h4>
          <ul>
            <li>Company</li>
            <li>Community</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4>Blog</h4>
          <ul>
            <li>Tech</li>
            <li>Adventure</li>
            <li>Music</li>
            <li>Video</li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className="flex gap-4">
            <FaDiscord size="32" />
            <FaInstagram size="32" />
            <FaXTwitter size="32" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
