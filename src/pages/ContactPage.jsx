import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import SEO from '../components/SEO';

const navTabs = [
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Refund and Cancellation', path: '/refund-policy' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Safety & Trust', path: '/safety' },
  { name: 'Cookie Policy', path: '/cookies' },
  { name: 'User Agreement', path: '/agreement' },
];

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <SEO 
        title="Contact us | dinasari" 
        description="Contact details for dinasari, tarlupadu. Phone: 9441082056, Time: Monday - Friday(9:00 - 18:00)."
      />

      <section className="contact-hero">
        <div className="container" style={{ maxWidth: '820px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1>Contact us</h1>
          </motion.div>
        </div>
      </section>

      {/* Document Navigation Tabs */}
      <div className="contact-tabs-bar">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="tabs-scroller">
            {navTabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) => 
                  `contact-tab-item ${isActive ? 'active' : ''}`
                }
              >
                {tab.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <section className="contact-content section-padding">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="contact-text-box">
            <h2>Contact us:</h2>
            <p>
              <strong>Company:</strong> dinasari
            </p>
            <p>
              <strong>Registered Office / Village:</strong> tarlupadu
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:9441082056">9441082056</a>
            </p>
            <p>
              <strong>Time:</strong> Monday - Friday(9:00 - 18:00)
            </p>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-page {
          background: #ffffff;
          font-family: 'Outfit', sans-serif;
          color: #1a1c19;
          min-height: 70vh;
        }

        .contact-hero {
          padding-top: 150px;
          padding-bottom: 30px;
          text-align: left;
          background: #ffffff;
          border-bottom: 1px solid #eef2ed;
        }

        .contact-hero h1 {
          font-size: 42px;
          font-weight: 800;
          letter-spacing: -1px;
          color: #1a1c19;
          margin: 0;
        }

        .contact-tabs-bar {
          background: #fbfdfa;
          border-bottom: 1px solid #e4ebe1;
          position: sticky;
          top: 76px;
          z-index: 100;
        }

        .tabs-scroller {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding: 10px 0;
          scrollbar-width: thin;
        }

        .contact-tab-item {
          font-size: 13.5px;
          font-weight: 600;
          color: #4f574d;
          text-decoration: none;
          padding: 7px 16px;
          border-radius: 50px;
          white-space: nowrap;
          transition: all 0.2s;
        }

        .contact-tab-item:hover {
          background: rgba(31, 138, 61, 0.08);
          color: var(--primary);
        }

        .contact-tab-item.active {
          background: var(--primary);
          color: #ffffff;
        }

        .contact-content {
          padding-top: 40px;
          padding-bottom: 100px;
        }

        .contact-text-box {
          background: #ffffff;
          padding: 24px 0;
        }

        .contact-text-box h2 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 24px;
          color: #1a1c19;
        }

        .contact-text-box p {
          font-size: 17px;
          color: #333a30;
          line-height: 2;
          margin-bottom: 16px;
        }

        .contact-text-box a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .contact-hero h1 { font-size: 32px; }
        }
      `}} />
    </div>
  );
};

export default ContactPage;
