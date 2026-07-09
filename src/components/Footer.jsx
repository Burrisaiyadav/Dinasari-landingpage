import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Phone, MapPin, ArrowRight, Loader2 } from 'lucide-react';
import { db } from '../services/mockDb';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.trim()) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await db.newsletter.subscribe(email.trim());
      if (res && res.success) {
        setStatus({ type: 'success', message: res.message || 'Successfully subscribed.' });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: res?.message || 'Subscription failed.' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Failed to connect. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

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
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1.5fr', gap: '40px', marginBottom: '80px' }}>
          <div>
            <Logo size={32} light={true} />
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '24px', maxWidth: '300px', fontSize: '15px', lineHeight: '1.8' }}>
              Building the future of rural commerce and workforce empowerment. Join thousands of farmers growing with Dinasari.
            </p>
          </div>

          <div className="footer-column">
            <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '18px' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/investors" className="footer-link">Investors</Link></li>
              <li><Link to="/impact" className="footer-link">Impact Report</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '18px' }}>Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><Link to="/help" className="footer-link">Help Center</Link></li>
              <li><Link to="/safety" className="footer-link">Safety & Trust</Link></li>
              <li><Link to="/about" className="footer-link">Contact Us</Link></li>
              <li><Link to="/help" className="footer-link">FAQs</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '18px' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="footer-link">Cookie Policy</Link></li>
              <li><Link to="/terms" className="footer-link">User Agreement</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: 'white' }}>Stay Updated</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', marginBottom: '20px' }}>
              Get the latest news on rural tech and agricultural trends.
            </p>
            <form onSubmit={handleSubscribe} style={{ 
              display: 'flex', 
              background: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '12px', 
              padding: '6px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <input 
                type="email" 
                placeholder="Email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
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
              <button 
                type="submit"
                disabled={loading}
                style={{ 
                  background: 'var(--primary)', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '8px', 
                  width: '40px', 
                  height: '40px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  transition: 'all 0.2s ease'
                }}
              >
                {loading ? <Loader2 size={18} className="spin-icon" /> : <ArrowRight size={18} />}
              </button>
            </form>

            {status.message && (
              <div style={{
                marginTop: '12px',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                background: status.type === 'success' ? 'rgba(31, 138, 61, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                color: status.type === 'success' ? '#4ade80' : '#f87171',
                border: `1px solid ${status.type === 'success' ? 'rgba(74, 222, 128, 0.2)' : 'rgba(248, 113, 113, 0.2)'}`
              }}>
                {status.message}
              </div>
            )}
            
            <div style={{ marginTop: '30px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
                <Phone size={18} color="var(--primary-light)" style={{ marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>9014369419</span>
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
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-icon {
          animation: spin 1s linear infinite;
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
