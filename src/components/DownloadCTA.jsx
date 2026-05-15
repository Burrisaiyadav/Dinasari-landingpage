import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Zap, Download } from 'lucide-react';

const DownloadCTA = () => {
  return (
    <section id="download" className="section-padding" style={{ background: '#f8faf9', overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ 
            background: '#0a2a16',
            borderRadius: '60px',
            padding: '0',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(10, 42, 22, 0.2)'
          }}
        >
          {/* Background effects */}
          <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(31, 138, 61, 0.2) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }} />
          
          <div className="cta-grid">
            <div className="cta-text-content">
              <div className="trust-badge">
                <Star size={16} fill="var(--yellow)" color="var(--yellow)" />
                <span>4.8/5 Rating on Google Play</span>
              </div>
              
              <h2 style={{ fontSize: '56px', fontWeight: '900', marginBottom: '24px', lineHeight: '1.1', letterSpacing: '-2px' }}>
                The Future of Rural <br />
                <span style={{ color: 'var(--primary)' }}>Work is Here.</span>
              </h2>
              
              <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '48px', lineHeight: '1.6', maxWidth: '500px' }}>
                Join over 50,000+ farmers and workers who are already scaling their productivity with Dinasari.
              </p>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <button className="playstore-button-premium">
                  <svg viewBox="0 0 512 512" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.5 7.3c-4.5 4.5-7 11.4-7 20.3v456.8c0 8.9 2.5 15.8 7 20.3l1.1 1.1L259.1 281.3v-10.6L33.6 6.2l-1.1 1.1z" fill="#ea4335"/>
                    <path d="M366.4 389.2l-107.3-107.9v-10.6L366.4 162.8l1.1.6 126.9 72.1c36.2 20.5 36.2 54.1 0 74.7L367.5 388.6l-1.1.6z" fill="#fbbc04"/>
                    <path d="M367.5 388.6L259.1 280.2 34.7 504.6c11.3 11.3 29.5 11.3 40.8 0l292-116z" fill="#34a853"/>
                    <path d="M367.5 123.4L75.5 8.1C64.2-3.2 46-3.2 34.7 8.1l224.4 224.4 108.4-109.1z" fill="#4285f4"/>
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '11px', fontWeight: '500', marginBottom: '-2px' }}>GET IT ON</div>
                    <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-0.5px' }}>Google Play</div>
                  </div>
                </button>
              </div>

              <div className="feature-badges">
                <div className="badge-item"><ShieldCheck size={18} /> Verified</div>
                <div className="badge-item"><Zap size={18} /> Instant</div>
                <div className="badge-item">Free for Farmers</div>
              </div>
            </div>

            <div className="cta-visual">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mockup-phone"
              >
                <div className="phone-screen">
                  <div className="screen-header">
                    <div className="dot" />
                    <span>Dinasari App</span>
                  </div>
                  <div className="screen-content">
                    <div className="content-line" style={{ width: '80%' }} />
                    <div className="content-line" style={{ width: '60%' }} />
                    <div className="content-box" />
                    <div className="content-line" style={{ width: '90%' }} />
                    <div className="content-btn" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .cta-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .cta-text-content {
          padding: 80px 100px;
        }
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 32px;
          color: var(--primary);
        }
        .playstore-button-premium {
          background: white;
          color: black;
          padding: 14px 32px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .playstore-button-premium:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
          background: #f0f0f0;
        }
        .feature-badges {
          display: flex;
          gap: 24px;
          margin-top: 60px;
          opacity: 0.6;
        }
        .badge-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
        }
        .cta-visual {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%);
        }
        .mockup-phone {
          width: 280px;
          height: 560px;
          background: #111;
          border-radius: 40px;
          border: 8px solid #222;
          padding: 12px;
          box-shadow: -20px 40px 80px rgba(0,0,0,0.4);
          transform: rotate(-5deg);
        }
        .phone-screen {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 24px;
          overflow: hidden;
        }
        .screen-header {
          padding: 15px;
          background: #f8f9fa;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #111;
          font-size: 12px;
          font-weight: 800;
          border-bottom: 1px solid #eee;
        }
        .dot { width: 8px; height: 8px; background: var(--primary); borderRadius: 50%; }
        .screen-content { padding: 20px; }
        .content-line { height: 8px; background: #eee; border-radius: 4px; margin-bottom: 12px; }
        .content-box { height: 120px; background: #f0f0f0; border-radius: 12px; margin: 20px 0; }
        .content-btn { height: 40px; background: var(--primary); border-radius: 10px; }

        @media (max-width: 1200px) {
          .cta-text-content { padding: 60px 40px; }
          .cta-grid { grid-template-columns: 1fr; text-align: center; }
          .cta-text-content { display: flex; flexDirection: column; alignItems: center; }
          .cta-visual { display: none; }
          #download h2 { font-size: 42px; }
        }
        @media (max-width: 768px) {
          .cta-text-content { padding: 40px 24px; }
          #download h2 { font-size: 32px; }
          .feature-badges { flexDirection: column; gap: 12px; }
        }
      `}} />
    </section>
  );
};

export default DownloadCTA;
