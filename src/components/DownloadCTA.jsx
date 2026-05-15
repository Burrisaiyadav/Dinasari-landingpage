import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Zap, Download, Users } from 'lucide-react';

const DownloadCTA = () => {
  return (
    <section id="download" className="section-padding" style={{ background: '#f8faf9', overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            background: 'linear-gradient(rgba(10, 42, 22, 0.92), rgba(10, 42, 22, 0.95)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '60px',
            padding: '100px 40px',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(10, 42, 22, 0.2)',
            textAlign: 'center'
          }}
        >
          {/* Subtle glow effect */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(31, 138, 61, 0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
            <div className="trust-pill">
              <div className="avatar-stack">
                <div className="avatar" style={{ background: '#3b82f6' }} />
                <div className="avatar" style={{ background: '#10b981' }} />
                <div className="avatar" style={{ background: '#f59e0b' }} />
              </div>
              <span>Trusted by 50,000+ Rural Workers</span>
            </div>
            
            <h2 style={{ fontSize: '64px', fontWeight: '900', marginBottom: '24px', lineHeight: '1.1', letterSpacing: '-3px' }}>
              The Power of Digital <br />
              <span className="text-gradient">in Your Hands.</span>
            </h2>
            
            <p style={{ fontSize: '22px', opacity: 0.8, marginBottom: '56px', lineHeight: '1.6', maxWidth: '640px', margin: '0 auto 56px' }}>
              Download Dinasari and start your journey towards a more productive and secure rural future.
            </p>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
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

            <div className="cta-features-minimal">
              <div className="feat-item"><ShieldCheck size={18} /> Verified Profiles</div>
              <div className="feat-item"><Zap size={18} /> Instant Match</div>
              <div className="feat-item"><Star size={18} /> 4.8 Play Store</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.06);
          padding: 8px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 32px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .avatar-stack {
          display: flex;
          align-items: center;
        }
        .avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid #0a2a16;
          margin-left: -8px;
        }
        .avatar:first-child { margin-left: 0; }
        
        .playstore-button-premium {
          background: white;
          color: black;
          padding: 16px 40px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .playstore-button-premium:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          background: #f8f9fa;
        }
        .cta-features-minimal {
          display: flex;
          gap: 40px;
          justify-content: center;
          margin-top: 64px;
          opacity: 0.6;
        }
        .feat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 600;
        }
        @media (max-width: 992px) {
          #download h2 { font-size: 48px; }
          .cta-features-minimal { flex-direction: column; gap: 16px; align-items: center; }
        }
        @media (max-width: 576px) {
          #download h2 { font-size: 36px; letter-spacing: -1.5px; }
          #download p { fontSize: 18px; }
          .playstore-button-premium { width: 100%; justify-content: center; }
        }
      `}} />
    </section>
  );
};

export default DownloadCTA;

