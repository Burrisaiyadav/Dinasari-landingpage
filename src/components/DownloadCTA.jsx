import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, X, ArrowUpRight, Smartphone, Leaf, Users } from 'lucide-react';

const DownloadCTA = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', role: 'Farmer' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsContactOpen(false);
      setSubmitted(false);
      setFormData({ name: '', phone: '', role: 'Farmer' });
    }, 2000);
  };

  const pills = [
    { icon: <Leaf size={15} />, label: 'Eco Farming' },
    { icon: <Users size={15} />, label: '10,000+ Farmers' },
    { icon: <Smartphone size={15} />, label: 'Android App' },
  ];

  return (
    <section id="download" className="final-cta-section">
      <div className="container cta-inner">

        {/* ── Left: Text + Button ── */}
        <div className="cta-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-pill-row"
          >
            {pills.map((p, i) => (
              <span key={i} className="cta-pill">
                {p.icon} {p.label}
              </span>
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="cta-heading"
          >
            Start Your <span className="cta-heading-green">Digital Farm</span><br />
            Journey Today.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="cta-desc"
          >
            Join thousands of farmers across Andhra Pradesh using Dinasari to hire workers,
            rent machinery, and grow smarter — all from one app.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26 }}
            className="cta-actions"
          >
            {/* Google Play Badge */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-playstore-btn"
              aria-label="Download on Google Play"
            >
              <svg viewBox="0 0 512 512" width="26" height="26" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <path d="M32.5 7.3c-4.5 4.5-7 11.4-7 20.3v456.8c0 8.9 2.5 15.8 7 20.3l1.1 1.1L259.1 281.3v-10.6L33.6 6.2l-1.1 1.1z" fill="#ea4335"/>
                <path d="M366.4 389.2l-107.3-107.9v-10.6L366.4 162.8l1.1.6 126.9 72.1c36.2 20.5 36.2 54.1 0 74.7L367.5 388.6l-1.1.6z" fill="#fbbc04"/>
                <path d="M367.5 388.6L259.1 280.2 34.7 504.6c11.3 11.3 29.5 11.3 40.8 0l292-116z" fill="#34a853"/>
                <path d="M367.5 123.4L75.5 8.1C64.2-3.2 46-3.2 34.7 8.1l224.4 224.4 108.4-109.1z" fill="#4285f4"/>
              </svg>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '500', opacity: 0.75, letterSpacing: '0.4px' }}>GET IT ON</div>
                <div style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px', lineHeight: 1.1 }}>Google Play</div>
              </div>
            </a>

            {/* Secondary — Contact */}
            <button
              className="cta-contact-btn"
              onClick={() => setIsContactOpen(true)}
            >
              Talk to Us
            </button>
          </motion.div>
        </div>

        {/* ── Right: Green stats card ── */}
        <motion.div
          className="cta-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="cta-card">
            <div className="cta-card-badge">Live on Android</div>
            <p className="cta-card-tagline">Trusted by farmers across 12 districts of AP</p>

            <div className="cta-stat-grid">
              {[
                { val: '10K+', lbl: 'Farmers' },
                { val: '50K+', lbl: 'Jobs Posted' },
                { val: '₹2Cr+', lbl: 'Wages Paid' },
                { val: '99%',  lbl: 'Satisfaction' },
              ].map((s, i) => (
                <div key={i} className="cta-stat-item">
                  <span className="cta-stat-val">{s.val}</span>
                  <span className="cta-stat-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>

            <div className="cta-card-divider" />

            <p className="cta-card-quote">
              "Dinasari helped me find skilled workers within hours for my paddy harvest — right from my phone."
            </p>
            <span className="cta-card-author">— Ravi Kumar, Farmer · Nandyal</span>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="cta-modal-overlay" onClick={() => setIsContactOpen(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="cta-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={() => setIsContactOpen(false)}>
              <X size={20} />
            </button>

            {submitted ? (
              <div className="modal-success-state">
                <CheckCircle2 size={56} color="#1F8A3D" style={{ margin: '0 auto 16px' }} />
                <h3>Thank You!</h3>
                <p>Our team will reach out to you shortly.</p>
              </div>
            ) : (
              <div>
                <div className="modal-badge">Direct Connect</div>
                <h3 className="modal-title">Get in Touch with Dinasari</h3>
                <p className="modal-subtitle">Join thousands of farmers modernizing rural agriculture.</p>

                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" required placeholder="Enter your name"
                      value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" required placeholder="e.g. +91 98765 43210"
                      value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>I am a</label>
                    <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
                      <option value="Farmer">Farmer (Hiring Workers / Machinery)</option>
                      <option value="Worker">Agricultural Worker</option>
                      <option value="Machinery Owner">Machinery / Tractor Owner</option>
                      <option value="Investor / Partner">Investor / Partner</option>
                    </select>
                  </div>
                  <button type="submit" className="modal-submit-btn">
                    Submit Request <ArrowUpRight size={16} />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        /* ─── Section shell ─── */
        .final-cta-section {
          background: #F4FAF6;
          padding: 100px 0;
          overflow: hidden;
          position: relative;
        }
        .final-cta-section::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(31,138,61,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ─── Two-column layout ─── */
        .cta-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* ─── Left ─── */
        .cta-pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 28px;
        }
        .cta-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 50px;
          border: 1.5px solid rgba(31,138,61,0.3);
          color: #1F8A3D;
          font-size: 13px;
          font-weight: 600;
          background: rgba(31,138,61,0.06);
        }
        .cta-heading {
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 900;
          color: #1A1C19;
          line-height: 1.12;
          letter-spacing: -1.5px;
          margin-bottom: 20px;
        }
        .cta-heading-green {
          color: #1F8A3D;
        }
        .cta-desc {
          font-size: 16px;
          color: #5C6259;
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 440px;
        }
        .cta-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Play Store button */
        .cta-playstore-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #1F8A3D;
          color: #ffffff;
          padding: 13px 28px;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(31,138,61,0.28);
        }
        .cta-playstore-btn:hover {
          background: #15662D;
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(31,138,61,0.38);
        }

        /* Secondary button */
        .cta-contact-btn {
          background: transparent;
          border: 2px solid rgba(31,138,61,0.35);
          color: #1F8A3D;
          padding: 13px 28px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .cta-contact-btn:hover {
          background: #1F8A3D;
          color: #fff;
          border-color: #1F8A3D;
        }

        /* ─── Right card ─── */
        .cta-right {}
        .cta-card {
          background: #1F8A3D;
          border-radius: 28px;
          padding: 44px 40px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .cta-card::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 220px; height: 220px;
          background: rgba(255,255,255,0.06);
          border-radius: 50%;
        }
        .cta-card::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -50px;
          width: 240px; height: 240px;
          background: rgba(0,0,0,0.08);
          border-radius: 50%;
        }
        .cta-card-badge {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          padding: 5px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 14px;
          position: relative; z-index: 1;
        }
        .cta-card-tagline {
          font-size: 17px;
          font-weight: 600;
          color: rgba(255,255,255,0.88);
          margin-bottom: 32px;
          line-height: 1.5;
          position: relative; z-index: 1;
        }
        .cta-stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 28px;
          position: relative; z-index: 1;
        }
        .cta-stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .cta-stat-val {
          font-size: 2rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -1px;
          line-height: 1;
        }
        .cta-stat-lbl {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          font-weight: 500;
        }
        .cta-card-divider {
          height: 1px;
          background: rgba(255,255,255,0.18);
          margin-bottom: 24px;
          position: relative; z-index: 1;
        }
        .cta-card-quote {
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 10px;
          position: relative; z-index: 1;
        }
        .cta-card-author {
          font-size: 12.5px;
          color: rgba(255,255,255,0.6);
          font-weight: 600;
          position: relative; z-index: 1;
        }

        /* ─── Modal ─── */
        .cta-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          padding: 20px;
        }
        .cta-modal-card {
          background: #fff;
          border-radius: 24px;
          padding: 40px;
          max-width: 460px;
          width: 100%;
          position: relative;
          color: #1a202c;
          box-shadow: 0 30px 60px rgba(0,0,0,0.25);
        }
        .modal-close-btn {
          position: absolute; top: 18px; right: 18px;
          background: #f1f5f9; border: none;
          border-radius: 50%; width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #64748b; transition: all 0.2s;
        }
        .modal-close-btn:hover { background: #e2e8f0; color: #0f172a; }
        .modal-badge {
          display: inline-block; padding: 4px 12px;
          background: rgba(31,138,61,0.1); color: #1F8A3D;
          font-weight: 700; font-size: 12px; border-radius: 50px; margin-bottom: 12px;
        }
        .modal-title { font-size: 22px; font-weight: 800; margin: 0 0 8px; color: #111827; }
        .modal-subtitle { font-size: 14px; color: #64748b; margin: 0 0 24px; line-height: 1.5; }
        .modal-form .form-group { margin-bottom: 16px; text-align: left; }
        .modal-form label { display: block; font-size: 13px; font-weight: 700; color: #334155; margin-bottom: 6px; }
        .modal-form input, .modal-form select {
          width: 100%; padding: 11px 15px;
          border: 1.5px solid #e2e8f0; border-radius: 10px;
          font-size: 14px; color: #0f172a; outline: none;
          transition: border-color 0.2s; background: #f8fafc; font-family: 'Outfit', sans-serif;
        }
        .modal-form input:focus, .modal-form select:focus { border-color: #1F8A3D; background: #fff; }
        .modal-submit-btn {
          width: 100%; padding: 13px;
          background: #1F8A3D; color: white; border: none;
          border-radius: 10px; font-weight: 800; font-size: 15px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          cursor: pointer; margin-top: 20px; transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
        }
        .modal-submit-btn:hover { background: #15662D; transform: translateY(-2px); }
        .modal-success-state { text-align: center; padding: 30px 10px; }

        /* ─── Responsive ─── */
        @media (max-width: 900px) {
          .cta-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .cta-right { order: -1; }
          .cta-card { padding: 32px; }
        }
        @media (max-width: 480px) {
          .final-cta-section { padding: 72px 0; }
          .cta-actions { flex-direction: column; align-items: flex-start; }
          .cta-playstore-btn, .cta-contact-btn { width: 100%; justify-content: center; }
        }
      `}} />
    </section>
  );
};

export default DownloadCTA;
