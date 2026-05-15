import React from 'react';
import { Smartphone, UserSearch, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    { 
      number: "01", 
      icon: <Smartphone size={32} />, 
      title: "One-Tap Entry", 
      desc: "Register securely using just your mobile number. No complex passwords or forms. AI verifies your identity instantly.",
      color: "#3B82F6"
    },
    { 
      number: "02", 
      icon: <UserSearch size={32} />, 
      title: "AI Matching", 
      desc: "Our platform intelligently matches workers to farm requirements based on proximity, skill, and seasonal needs.",
      color: "#10B981"
    },
    { 
      number: "03", 
      icon: <HardHat size={32} />, 
      title: "Verified Output", 
      desc: "Work is logged digitally. Payments are released instantly upon job completion through our secure escrow system.",
      color: "#F59E0B"
    }
  ];

  return (
    <section id="how-it-works" style={{ background: '#f8faf9', padding: '160px 0', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '120px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="trust-pill"
            style={{ color: 'var(--primary)', marginBottom: '32px' }}
          >
            The Journey
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '56px', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-3px', lineHeight: '1.1' }}
          >
            Simple. Secure. <span className="text-gradient">Scaleable.</span>
          </motion.h2>
        </div>

        <div className="steps-container">
          {steps.map((s, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="step-card"
            >
              <div className="step-number-bg">{s.number}</div>
              
              <div className="step-icon-wrapper" style={{ '--step-color': s.color }}>
                {s.icon}
              </div>
              
              <div className="step-content">
                <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>{s.title}</h4>
                <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{s.desc}</p>
              </div>

              {idx < 2 && (
                <div className="step-connector">
                  <ArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .steps-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
          position: relative;
        }
        .step-card {
          position: relative;
          background: white;
          padding: 60px 40px;
          border-radius: 40px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 20px 50px rgba(0,0,0,0.02);
          transition: all 0.4s ease;
        }
        .step-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(31, 138, 61, 0.08);
          border-color: rgba(31, 138, 61, 0.2);
        }
        .step-number-bg {
          position: absolute;
          top: 30px;
          right: 40px;
          font-size: 80px;
          font-weight: 900;
          color: rgba(0,0,0,0.03);
          line-height: 1;
        }
        .step-icon-wrapper {
          width: 80px;
          height: 80px;
          background: color-mix(in srgb, var(--step-color), transparent 90%);
          color: var(--step-color);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }
        .step-content {
          position: relative;
          z-index: 1;
        }
        .step-connector {
          position: absolute;
          right: -42px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
        }
        @media (max-width: 1200px) {
          .steps-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .step-connector {
            display: none;
          }
          .step-card {
            padding: 40px;
          }
        }
      `}} />
    </section>
  );
};

export default HowItWorks;

