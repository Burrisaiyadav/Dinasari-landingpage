import React from 'react';
import { Shield, Zap, Globe, MessageSquare, CloudRain, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare size={28} />,
      title: "Real-time Chat",
      desc: "Direct, instant communication between workers and farmers with built-in translation.",
      size: "large"
    },
    {
      icon: <Lock size={28} />,
      title: "Secure Payments",
      desc: "Instant digital escrow payments once the job is verified.",
      size: "small"
    },
    {
      icon: <Globe size={28} />,
      title: "Multilingual Support",
      desc: "Use Dinasari in your local language—available in 12+ dialects.",
      size: "small"
    },
    {
      icon: <CloudRain size={28} />,
      title: "Weather Advisory",
      desc: "Localized hyper-accurate weather alerts for your specific village.",
      size: "small"
    },
    {
      icon: <Shield size={28} />,
      title: "Worker Verification",
      desc: "Every member is Aadhaar-verified and background checked for total safety.",
      size: "small"
    },
    {
      icon: <Zap size={28} />,
      title: "Offline Sync",
      desc: "Works even with patchy internet. Sync your data once you're back online.",
      size: "large"
    }
  ];

  return (
    <section id="features" style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '8px 20px', 
            background: 'rgba(31, 138, 61, 0.08)', 
            borderRadius: '50px',
            color: 'var(--primary)',
            fontWeight: '700',
            fontSize: '14px',
            marginBottom: '24px',
            textTransform: 'uppercase'
          }}>
            Powerful Ecosystem
          </div>
          <h2 style={{ fontSize: '52px', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-1.5px' }}>
            Built for the <span className="text-gradient">Next Billion.</span>
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gridAutoRows: 'minmax(280px, auto)',
          gap: '30px'
        }}>
          {features.map((f, idx) => (
            <div 
              key={idx} 
              style={{ 
                gridColumn: f.size === 'large' ? 'span 2' : 'span 1',
                background: 'white',
                padding: '48px',
                borderRadius: '32px',
                border: '1px solid rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
              }}
              className="feature-card"
            >
              <div>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'rgba(31, 138, 61, 0.05)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--primary)',
                  marginBottom: '32px'
                }}>
                  {f.icon}
                </div>
                <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px', color: 'var(--text-main)' }}>{f.title}</h4>
                <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '400px' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .feature-card:hover {
          border-color: var(--primary) !important;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(31, 138, 61, 0.08) !important;
        }
        @media (max-width: 992px) {
          #features div[style*="display: grid"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="grid-column: span 2"] {
            grid-column: span 1 !important;
          }
        }
      `}} />
    </section>
  );
};

export default Features;
