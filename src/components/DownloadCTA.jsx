import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Apple } from 'lucide-react';

const DownloadCTA = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
            borderRadius: '48px',
            padding: '80px 40px',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(31, 138, 61, 0.3)'
          }}
        >
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '-80px', right: '-20px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />

          <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px' }}>
            Ready to Transform Your <br /> Rural Experience?
          </h2>
          <p style={{ fontSize: '20px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 48px' }}>
            Join thousands of farmers and workers already using Dinasari. Download the app today.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="playstore-button">
              <svg viewBox="0 0 512 512" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.5 7.3c-4.5 4.5-7 11.4-7 20.3v456.8c0 8.9 2.5 15.8 7 20.3l1.1 1.1L259.1 281.3v-10.6L33.6 6.2l-1.1 1.1z" fill="#ea4335"/>
                <path d="M366.4 389.2l-107.3-107.9v-10.6L366.4 162.8l1.1.6 126.9 72.1c36.2 20.5 36.2 54.1 0 74.7L367.5 388.6l-1.1.6z" fill="#fbbc04"/>
                <path d="M367.5 388.6l-108.4-108.4-108.4 108.4c-11.9 11.9-31.2 11.9-43.1 0l-1.1-1.1-1.1-1.1L259.1 281.3l108.4 108.4c11.9 11.9 11.9 31.2 0 43.1l-1.1 1.1-1.1 1.1c-11.9 11.9-31.2 11.9-43.1 0z" fill="#34a853" opacity="0"/>
                <path d="M367.5 388.6L259.1 280.2 34.7 504.6c11.3 11.3 29.5 11.3 40.8 0l292-116z" fill="#34a853"/>
                <path d="M367.5 123.4L75.5 8.1C64.2-3.2 46-3.2 34.7 8.1l224.4 224.4 108.4-109.1z" fill="#4285f4"/>
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '11px', fontWeight: '500', marginBottom: '-2px' }}>GET IT ON</div>
                <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-0.5px' }}>Google Play</div>
              </div>
            </button>
          </div>

          <div style={{ 
            marginTop: '60px', 
            display: 'flex', 
            gap: '40px', 
            justifyContent: 'center',
            fontSize: '15px',
            fontWeight: '600',
            opacity: 0.8
          }}>
            <a href="#" className="hover-underline">Partner with us</a>
            <a href="#" className="hover-underline">Join as a Worker</a>
            <a href="#" className="hover-underline">Success Stories</a>
          </div>
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hover-underline:hover { text-decoration: underline; }
        .playstore-button {
          background: #000;
          color: white;
          padding: 12px 28px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .playstore-button:hover {
          background: #111;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          border-color: rgba(255,255,255,0.2);
        }
        @media (max-width: 768px) {
          #download-cta h2 { font-size: 32px; }
        }
      `}} />
    </section>
  );
};

export default DownloadCTA;
