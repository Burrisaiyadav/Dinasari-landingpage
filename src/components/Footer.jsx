import React from 'react';
import Logo from './Logo';
import { Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      background: '#0a2a16', 
      paddingTop: '100px', 
      paddingBottom: '40px', 
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(31, 138, 61, 0.15) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr', gap: '60px', marginBottom: '80px' }}>
          <div>
            <Logo size={32} light={true} />
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '24px', maxWidth: '300px', fontSize: '15px', lineHeight: '1.8' }}>
              Building the future of rural commerce and workforce empowerment. Join thousands of farmers growing with Dinasari.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: 'white' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Investors</a></li>
              <li><a href="#" className="footer-link">Impact Report</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: 'white' }}>Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Safety</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: 'white' }}>Stay Updated</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', marginBottom: '20px' }}>
              Get the latest news on rural tech and agricultural trends.
            </p>
            <div style={{ 
              display: 'flex', 
              background: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '12px', 
              padding: '6px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <input 
                type="email" 
                placeholder="Email address" 
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  padding: '10px 15px', 
                  color: 'white', 
                  flex: 1,
                  outline: 'none',
                  fontSize: '14px'
                }} 
              />
              <button style={{ 
                background: 'var(--primary)', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                width: '40px', 
                height: '40px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <ArrowRight size={18} />
              </button>
            </div>
            
            <div style={{ marginTop: '30px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
                <Phone size={18} color="var(--primary-light)" style={{ marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>9441082056</span>
                  <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>6301910135</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--primary-light)" style={{ marginTop: '2px' }} />
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.4' }}>
                  3-32 sivalayam street Tarlupadu Markapur district AP - 523332
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
          paddingTop: '40px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          fontSize: '14px',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
          <p>© 2026 Dinasari Agritech Pvt Ltd. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              Made with <span style={{ color: '#ff4d4d' }}>❤</span> for rural India
            </span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-link { 
          color: rgba(255, 255, 255, 0.6); 
          transition: all 0.3s ease; 
          font-size: 15px;
          text-decoration: none;
        }
        .footer-link:hover { 
          color: var(--primary-light); 
          transform: translateX(5px);
          display: inline-block;
        }
        @media (max-width: 992px) {
          footer div[style*="grid-template-columns"] {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 576px) {
          footer div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          footer {
            padding-top: 60px !important;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
