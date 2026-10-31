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

          {/* App download quick buttons */}
          <div className="footer-app-box">
            <span className="footer-app-title">Get the Dinasari App:</span>
            <div className="footer-app-chips">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-store-btn footer-playstore"
                aria-label="Google Play"
              >
                <svg viewBox="0 0 512 512" width="14" height="14" style={{ flexShrink: 0 }}>
                  <path d="M32.5 7.3c-4.5 4.5-7 11.4-7 20.3v456.8c0 8.9 2.5 15.8 7 20.3l1.1 1.1L259.1 281.3v-10.6L33.6 6.2l-1.1 1.1z" fill="#ea4335"/>
                  <path d="M366.4 389.2l-107.3-107.9v-10.6L366.4 162.8l1.1.6 126.9 72.1c36.2 20.5 36.2 54.1 0 74.7L367.5 388.6l-1.1.6z" fill="#fbbc04"/>
                  <path d="M367.5 388.6L259.1 280.2 34.7 504.6c11.3 11.3 29.5 11.3 40.8 0l292-116z" fill="#34a853"/>
                  <path d="M367.5 123.4L75.5 8.1C64.2-3.2 46-3.2 34.7 8.1l224.4 224.4 108.4-109.1z" fill="#4285f4"/>
                </svg>
                <span>Google Play</span>
              </a>

              <a
                href="/dinasari.apk"
                download="dinasari.apk"
                className="footer-store-btn footer-apk"
                aria-label="Download APK"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.68 2.23 12.63 2 11.5 2c-1.13 0-2.18.23-3.14.63L6.88 1.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C5.64 4.3 4.41 6.01 4.23 8h14.54c-.18-1.99-1.41-3.7-3.24-4.84zM9 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
                <span>Download APK</span>
              </a>
            </div>
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
            <li><Link to="/about"          className="footer-link">About Us</Link></li>
            <li><Link to="/download"       className="footer-link" style={{ color: '#fff', fontWeight: '700' }}>Download App (APK &amp; Store)</Link></li>
            <li><Link to="/contact"        className="footer-link">Contact & Office</Link></li>
            <li><Link to="/careers"        className="footer-link">Careers</Link></li>
            <li><Link to="/investors"      className="footer-link">Investors</Link></li>
            <li><Link to="/impact"         className="footer-link">Impact Report</Link></li>
            <li><Link to="/help"           className="footer-link">Help Center</Link></li>
          </ul>
        </div>

        {/* Col 4 — Contact info, 2-sub-column layout */}
        <div className="footer-info-col">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h4 className="footer-col-heading" style={{ margin: 0 }}>Contact Us</h4>
            <Link to="/contact" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', textDecoration: 'underline' }}>View Office →</Link>
          </div>

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
                  <a href="mailto:support@dinasari.in" className="info-value">support@dinasari.in</a>
                </div>
              </div>
            </div>

            {/* Right sub-col: address + hours */}
            <div className="footer-info-sub">
              <div className="info-item">
                <MapPin size={14} className="info-icon" />
                <div>
                  <span className="info-label">Address</span>
                  <span className="info-value">Tarlupadu Village,</span>
                  <span className="info-value">Markapur, AP — 523332</span>
                </div>
              </div>
              <div className="info-item">
                <Clock size={14} className="info-icon" />
                <div>
                  <span className="info-label">Office Hours</span>
                  <span className="info-value">Mon–Fri (09:00 - 18:00)</span>
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
          © 2026 · <strong>Dinasari</strong> · Registered at Tarlupadu, AP · All Rights Reserved.
        </p>
        <div className="footer-legal-links">
          <Link to="/terms"         className="footer-link-sm">Terms & Conditions</Link>
          <Link to="/privacy"       className="footer-link-sm">Privacy Policy</Link>
          <Link to="/refund-policy" className="footer-link-sm">Refund & Cancellation</Link>
          <Link to="/contact"       className="footer-link-sm">Contact Us</Link>
          <Link to="/cookies"       className="footer-link-sm">Cookies</Link>
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
