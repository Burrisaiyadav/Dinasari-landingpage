import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, TrendingDown, Users, Search, CreditCard, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    { icon: <TrendingDown size={28} />, title: "Labour Shortage", desc: "Farmers struggle to find help during peak harvest seasons, leading to crop loss." },
    { icon: <AlertCircle size={28} />, title: "Unemployment", desc: "Skilled rural workers can't find consistent work nearby due to information gaps." },
    { icon: <ShieldCheck size={28} />, title: "Lack of Trust", desc: "No verification system for workers or fair pay for farmers creating constant friction." },
    { icon: <Search size={28} />, title: "Offline Fragmentation", desc: "Rural services are hidden offline, making them impossible to scale or access." }
  ];

  const solutions = [
    { icon: <Zap size={28} />, title: "Instant Matching", desc: "AI-driven algorithms to connect farmers with verified workers in under 30 minutes." },
    { icon: <Users size={28} />, title: "Village-Scale Hiring", desc: "Hyper-local GPS tracking allows hiring within your own village or block." },
    { icon: <CreditCard size={28} />, title: "Escrow Payments", desc: "Secure digital wallet system ensuring transparent and guaranteed compensation." },
    { icon: <CheckCircle2 size={28} />, title: "Rating Ecosystem", desc: "Trust-based rating system for both workers and farm owners to ensure quality." }
  ];

  return (
    <section id="solutions" style={{ background: '#fcfdfc', padding: '160px 0', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '120px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="trust-pill"
            style={{ color: 'var(--primary)', marginBottom: '32px' }}
          >
            Digital Transformation
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '56px', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-3px', lineHeight: '1.1' }}
          >
            Bridging the Rural <span className="text-gradient">Opportunity Gap.</span>
          </motion.h2>
        </div>

        <div className="problem-solution-container">
          {/* Problem Section */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="ps-card problem-card"
          >
            <div className="ps-header" style={{ color: '#E53E3E' }}>
              <div className="ps-icon-bg" style={{ background: '#FFF5F5' }}>
                <AlertCircle size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '28px', fontWeight: '800' }}>The Challenge</h3>
                <p style={{ opacity: 0.7, fontSize: '15px' }}>Traditional rural labor gaps</p>
              </div>
            </div>
            
            <div className="ps-items">
              {problems.map((p, idx) => (
                <div key={idx} className="ps-item">
                  <div className="ps-item-icon" style={{ color: '#E53E3E' }}>{p.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>{p.title}</h4>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="ps-vs">
            <div className="vs-circle">VS</div>
            <div className="vs-line" />
          </div>

          {/* Solution Section */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="ps-card solution-card"
          >
            <div className="ps-header" style={{ color: 'var(--primary)' }}>
              <div className="ps-icon-bg" style={{ background: '#F0FDF4' }}>
                <Zap size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '28px', fontWeight: '800' }}>The Solution</h3>
                <p style={{ opacity: 0.7, fontSize: '15px' }}>Dinasari Digital Ecosystem</p>
              </div>
            </div>
            
            <div className="ps-items">
              {solutions.map((s, idx) => (
                <div key={idx} className="ps-item">
                  <div className="ps-item-icon" style={{ color: 'var(--primary)' }}>{s.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>{s.title}</h4>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .problem-solution-container {
          display: grid;
          grid-template-columns: 1fr 100px 1fr;
          align-items: center;
          gap: 20px;
        }
        .ps-card {
          background: white;
          border-radius: 48px;
          padding: 60px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 20px 60px rgba(0,0,0,0.02);
          height: 100%;
        }
        .ps-header {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 56px;
        }
        .ps-icon-bg {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ps-items {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .ps-item {
          display: flex;
          gap: 24px;
        }
        .ps-item-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.8;
        }
        .ps-vs {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          justify-content: center;
          position: relative;
        }
        .vs-circle {
          width: 50px;
          height: 50px;
          background: white;
          border: 2px solid rgba(0,0,0,0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          color: var(--text-muted);
          z-index: 1;
        }
        .vs-line {
          position: absolute;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.05), transparent);
        }
        @media (max-width: 1200px) {
          .problem-solution-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .ps-vs { display: none; }
          .ps-card { padding: 40px; }
        }
      `}} />
    </section>
  );
};

export default ProblemSolution;

