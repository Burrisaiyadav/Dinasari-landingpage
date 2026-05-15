import React from 'react';
import { Shield, Zap, Globe, MessageSquare, CloudRain, Lock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare size={28} />,
      title: "Real-time Chat",
      desc: "Direct, instant communication between workers and farmers with built-in translation. Connect without barriers.",
      size: "large",
      color: "#3B82F6"
    },
    {
      icon: <Lock size={28} />,
      title: "Secure Payments",
      desc: "Instant digital escrow payments once the job is verified. Safe and transparent.",
      size: "small",
      color: "#10B981"
    },
    {
      icon: <Globe size={28} />,
      title: "Multilingual",
      desc: "Available in 12+ local dialects. Your language, your app.",
      size: "small",
      color: "#F59E0B"
    },
    {
      icon: <CloudRain size={28} />,
      title: "Weather Advisory",
      desc: "Localized hyper-accurate weather alerts for your specific village coordinates.",
      size: "small",
      color: "#6366F1"
    },
    {
      icon: <Shield size={28} />,
      title: "Verified",
      desc: "Aadhaar-verified profiles for total safety and reliability across the platform.",
      size: "small",
      color: "#EF4444"
    },
    {
      icon: <Zap size={28} />,
      title: "Offline Sync",
      desc: "Works even with patchy internet. Sync your data once you're back online. Never lose progress in low-signal areas.",
      size: "large",
      color: "#8B5CF6"
    }
  ];

  return (
    <section id="features" style={{ background: '#fcfdfc', padding: '140px 0', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              display: 'inline-block', 
              padding: '8px 20px', 
              background: 'rgba(31, 138, 61, 0.08)', 
              borderRadius: '50px',
              color: 'var(--primary)',
              fontWeight: '700',
              fontSize: '14px',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Powerful Ecosystem
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '64px', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-3px', lineHeight: '1' }}
          >
            Built for the <span className="text-gradient">Next Billion.</span>
          </motion.h2>
        </div>

        <div className="bento-grid">
          {features.map((f, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`feature-card ${f.size}`}
            >
              <div className="feature-content">
                <div className="icon-wrapper" style={{ '--icon-color': f.color }}>
                  {f.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px', color: 'var(--text-main)' }}>{f.title}</h4>
                  <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{f.desc}</p>
                </div>
                <div className="card-footer">
                  <span style={{ fontSize: '14px', fontWeight: '700', color: f.color }}>Learn More</span>
                  <ChevronRight size={16} color={f.color} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(320px, auto);
          gap: 30px;
        }
        .feature-card {
          background: white;
          border-radius: 40px;
          border: 1px solid rgba(0,0,0,0.06);
          padding: 48px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .feature-card.large {
          grid-column: span 2;
        }
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.06);
          border-color: rgba(31, 138, 61, 0.2);
        }
        .feature-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .icon-wrapper {
          width: 64px;
          height: 64px;
          background: var(--icon-color);
          background: color-mix(in srgb, var(--icon-color), transparent 90%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--icon-color);
          margin-bottom: 32px;
        }
        .card-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }
        .feature-card:hover .card-footer {
          opacity: 1;
          transform: translateX(0);
        }
        @media (max-width: 1200px) {
          #features h2 { font-size: 48px; }
        }
        @media (max-width: 992px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .feature-card.large {
            grid-column: span 1 !important;
          }
          .feature-card {
            padding: 32px;
          }
          #features {
            padding: 80px 0 !important;
          }
        }
      `}} />
    </section>
  );
};

export default Features;

