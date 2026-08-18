import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Phone, MapPin, Mail, Clock, ArrowUp, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="footer" className="site-footer">

      {/* ── Top Links Grid ── */}
      <div className="container footer-top-grid">

        {/* Col 1 — Brand + Social */}
        <div className="footer-brand-col">
          <Logo size={32} light={true} />
          <p className="footer-brand-desc">
            Building the future of rural commerce and workforce empowerment. Join thousands of farmers growing with Dinasari.
          </p>
          <div className="footer-social-row">
            {[
              { Icon: Facebook,  href: '#', label: 'Facebook' },
              { Icon: Twitter,   href: '#', label: 'Twitter'  },
              { Icon: Instagram, href: '#', label: 'Instagram'},
              { Icon: Youtube,   href: '#', label: 'YouTube'  },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} className="social-chip" aria-label={label}>
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Services */}
        <div className="footer-link-col">
          <h4 className="footer-col-heading">Services</h4>
          <ul className="footer-link-list">
            <li><Link to="/about" className="footer-link">Farmer Workforce Hiring</Link></li>
            <li><Link to="/about" className="footer-link">Machinery Rental</Link></li>
            <li><Link to="/about" className="footer-link">Crop Advisory</Link></li>
            <li><Link to="/about" className="footer-link">Digital Payments</Link></li>
            <li><Link to="/about" className="footer-link">Weather Alerts</Link></li>
          </ul>
        </div>

        {/* Col 3 — Company */}
        <div className="footer-link-col">
          <h4 className="footer-col-heading">Company</h4>
          <ul className="footer-link-list">
            <li><Link to="/about"     className="footer-link">About Us</Link></li>
            <li><Link to="/careers"   className="footer-link">Careers</Link></li>
            <li><Link to="/investors" className="footer-link">Investors</Link></li>
            <li><Link to="/impact"    className="footer-link">Impact Report</Link></li>
            <li><Link to="/help"      className="footer-link">Help Center</Link></li>
          </ul>
        </div>

        {/* Col 4 — Contact info, 2-sub-column layout */}
        <div className="footer-info-col">
          <h4 className="footer-col-heading">Contact Us</h4>

          <div className="footer-info-two-col">

            {/* Left sub-col: phone + email */}
            <div className="footer-info-sub">
              <div className="info-item">
                <Phone size={14} className="info-icon" />
                <div>
                  <span className="info-label">Phone</span>
                  <a href="tel:9441082056" className="info-value">9441082056</a>
                  <a href="tel:6301910135" className="info-value">6301910135</a>
                </div>
              </div>
              <div className="info-item">
                <Mail size={14} className="info-icon" />
                <div>
                  <span className="info-label">Email</span>
                  <a href="mailto:hello@dinasari.com" className="info-value">hello@dinasari.com</a>
                </div>
              </div>
            </div>

            {/* Right sub-col: address + hours */}
            <div className="footer-info-sub">
              <div className="info-item">
                <MapPin size={14} className="info-icon" />
                <div>
                  <span className="info-label">Address</span>
                  <span className="info-value">Tarlupadu, Markapur,</span>
                  <span className="info-value">AP — 523332</span>
                </div>
              </div>
              <div className="info-item">
                <Clock size={14} className="info-icon" />
                <div>
                  <span className="info-label">Office Hours</span>
                  <span className="info-value">Mon–Sat</span>
                  <span className="info-value">09 am – 06 pm</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Giant Brand Wordmark ── */}
      <div className="footer-brand-bar">
        <span className="footer-wordmark" aria-hidden="true">DINASARI</span>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="container footer-bottom-bar">
        <p className="footer-copy">
          © 2026 · <strong>Dinasari Agritech Pvt Ltd</strong> · All Rights Reserved.
        </p>
        <div className="footer-legal-links">
          <Link to="/privacy" className="footer-link-sm">Privacy Policy</Link>
          <Link to="/terms"   className="footer-link-sm">Terms of Service</Link>
          <Link to="/cookies" className="footer-link-sm">Cookie Policy</Link>
        </div>
        <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
          <ArrowUp size={17} />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ───── Shell ───── */
        .site-footer {
          background: #157030;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        /* ───── Top grid ───── */
        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.9fr;
          gap: 44px;
          padding-top: 72px;
          padding-bottom: 52px;
        }

        /* Brand */
        .footer-brand-desc {
          color: rgba(255,255,255,0.72);
          font-size: 14px;
          line-height: 1.75;
          margin-top: 18px;
          max-width: 280px;
        }
        .footer-social-row { display: flex; gap: 9px; margin-top: 22px; }
        .social-chip {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.22);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          transition: all 0.22s ease;
        }
        .social-chip:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.45);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Link cols */
        .footer-col-heading {
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 18px;
          letter-spacing: 0.2px;
        }
        .footer-link-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 11px;
        }
        .footer-link {
          color: rgba(255,255,255,0.68);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.18s, padding-left 0.18s;
          display: inline-block;
        }
        .footer-link:hover { color: #ffffff; padding-left: 4px; }

        /* Contact info col */
        .footer-info-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .footer-info-sub {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .info-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .info-icon {
          color: rgba(255,255,255,0.55);
          margin-top: 3px;
          flex-shrink: 0;
        }
        .info-label {
          display: block;
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.7px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 3px;
        }
        .info-value {
          display: block;
          font-size: 13.5px;
          color: rgba(255,255,255,0.88);
          text-decoration: none;
          line-height: 1.45;
          transition: color 0.15s;
        }
        a.info-value:hover { color: #ffffff; }

        /* ───── Wordmark bar ───── */
        .footer-brand-bar {
          border-top: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
        }
        .footer-wordmark {
          display: block;
          font-size: clamp(5rem, 14vw, 13rem);
          font-weight: 900;
          color: rgba(255,255,255,0.9);
          letter-spacing: clamp(-2px, -0.5vw, -8px);
          line-height: 1;
          text-align: center;
          text-transform: uppercase;
          user-select: none;
          clip-path: inset(0 0 13% 0);
          margin-bottom: -2px;
        }

        /* ───── Bottom bar ───── */
        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          padding-top: 18px;
          padding-bottom: 22px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .footer-copy { font-size: 13px; color: rgba(255,255,255,0.55); margin: 0; }
        .footer-copy strong { color: rgba(255,255,255,0.82); }
        .footer-legal-links { display: flex; gap: 18px; }
        .footer-link-sm {
          font-size: 12.5px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.18s;
        }
        .footer-link-sm:hover { color: #ffffff; }
        .scroll-top-btn {
          width: 38px; height: 38px; border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.22);
          color: #ffffff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.22s ease;
          flex-shrink: 0;
        }
        .scroll-top-btn:hover { background: rgba(255,255,255,0.18); transform: translateY(-3px); }

        /* ───── Responsive ───── */
        @media (max-width: 1100px) {
          .footer-top-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 640px) {
          .footer-top-grid { grid-template-columns: 1fr; gap: 28px; padding-top: 48px; }
          .footer-brand-desc { max-width: 100%; }
          .footer-info-two-col { grid-template-columns: 1fr; gap: 18px; }
          .footer-bottom-bar { flex-direction: column; align-items: flex-start; gap: 12px; }
          .footer-legal-links { flex-wrap: wrap; gap: 12px; }
          .footer-wordmark { font-size: clamp(3.5rem, 18vw, 7rem); }
        }
      `}} />
    </footer>
  );
};

export default Footer;
