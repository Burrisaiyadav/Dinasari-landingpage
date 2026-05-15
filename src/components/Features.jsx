import React from 'react';
import { Shield, Zap, Globe, MessageSquare, CloudRain, Lock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare size={32} />,
      title: "Real-time Chat",
      desc: "Direct communication with built-in translation between farmers and workers.",
      color: "#3B82F6"
    },
    {
      icon: <Lock size={32} />,
      title: "Secure Payments",
      desc: "Instant digital escrow payments verified by our smart security system.",
      color: "#10B981"
    },
    {
      icon: <Globe size={32} />,
      title: "Local Language",
      desc: "Use Dinasari in your preferred dialect. Supporting 12+ regional languages.",
      color: "#F59E0B"
    },
    {
      icon: <CloudRain size={32} />,
      title: "Weather Alerts",
      desc: "Hyper-accurate, localized weather reports sent directly to your phone.",
      color: "#6366F1"
    },
    {
      icon: <Shield size={32} />,
      title: "KYC Verified",
      desc: "Aadhaar-linked worker profiles for maximum safety and institutional trust.",
      color: "#EF4444"
    },
    {
      icon: <Zap size={32} />,
      title: "Offline Mode",
      desc: "Register and log tasks without internet. Auto-syncs when signal returns.",
      color: "#8B5CF6"
    }
  ];

  return (
    <section id="features" style={{ background: '#ffffff', padding: '140px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              display: 'inline-block', 
              padding: '8px 24px', 
              background: 'var(--primary)', 
              borderRadius: '50px',
              color: 'white',
              fontWeight: '700',
              fontSize: '13px',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '1.5px'
            }}
          >
            Core Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '56px', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-2px', lineHeight: '1.1' }}
          >
            Digital Tools for the <br /> <span className="text-gradient">Modern Rural Workforce.</span>
          </motion.h2>
        </div>

        <div className="features-grid">
          {features.map((f, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="modern-feature-card"
            >
              <div className="card-inner">
                <div className="icon-box" style={{ '--accent': f.color }}>
                  {f.icon}
                </div>
                <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px' }}>{f.title}</h4>
                <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.7' }}>{f.desc}</p>
                
                <div className="accent-line" style={{ background: f.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .modern-feature-card {
          position: relative;
          background: #fff;
          border-radius: 32px;
          padding: 50px 40px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .modern-feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
          border-color: rgba(31, 138, 61, 0.1);
        }
        .icon-box {
          width: 70px;
          height: 70px;
          background: color-mix(in srgb, var(--accent), transparent 90%);
          color: var(--accent);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          transition: all 0.3s ease;
        }
        .modern-feature-card:hover .icon-box {
          background: var(--accent);
          color: white;
          transform: rotate(10deg);
        }
        .accent-line {
          position: absolute;
          bottom: 0;
          left: 40px;
          right: 40px;
          height: 3px;
          border-radius: 3px 3px 0 0;
          opacity: 0;
          transform: scaleX(0.5);
          transition: all 0.4s ease;
        }
        .modern-feature-card:hover .accent-line {
          opacity: 1;
          transform: scaleX(1);
        }
        @media (max-width: 1200px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr; gap: 30px; }
          #features h2 { font-size: 36px; }
          .modern-feature-card { padding: 40px 30px; }
        }
      `}} />
    </section>
  );
};

export default Features;

