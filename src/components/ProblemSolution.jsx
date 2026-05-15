import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, TrendingDown, Users, Search, CreditCard, ShieldCheck, Zap } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    { icon: <TrendingDown size={24} />, title: "Labour Shortage", desc: "Farmers struggle to find help during peak harvest seasons." },
    { icon: <AlertCircle size={24} />, title: "Unemployment", desc: "Skilled rural workers can't find consistent work nearby." },
    { icon: <ShieldCheck size={24} />, title: "Lack of Trust", desc: "No verification system for workers or fair pay for farmers." },
    { icon: <Search size={24} />, title: "Zero Digital Access", desc: "Rural services are fragmented and hard to reach offline." }
  ];

  const solutions = [
    { icon: <Zap size={24} />, title: "Instant Matching", desc: "AI-driven algorithms to connect farmers with verified workers in minutes." },
    { icon: <Users size={24} />, title: "GPS-Based Hiring", desc: "Find workers or jobs within your village or immediate vicinity." },
    { icon: <CreditCard size={24} />, title: "Secure Payments", desc: "Digital wallet system ensuring fast, transparent, and fair compensation." },
    { icon: <CheckCircle2 size={24} />, title: "Verified Profiles", desc: "Trust-based rating system for both workers and farm owners." }
  ];

  return (
    <section id="solutions" className="section-padding" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
            Bridging the Rural <span style={{ color: 'var(--primary)' }}>Opportunity Gap</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
            We've identified the core challenges of rural workforce management and built a digital-first ecosystem to solve them.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Problem Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              background: '#FFF5F5', 
              padding: '40px', 
              borderRadius: '32px',
              border: '1px solid #FFEBEB'
            }}
          >
            <h3 style={{ fontSize: '24px', color: '#C53030', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <AlertCircle /> The Problem
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {problems.map((p, idx) => (
                <div key={idx}>
                  <div style={{ color: '#C53030', marginBottom: '12px' }}>{p.icon}</div>
                  <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>{p.title}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ 
              background: '#F0FDF4', 
              padding: '40px', 
              borderRadius: '32px',
              border: '1px solid #DCFCE7'
            }}
          >
            <h3 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 /> The Dinasari Solution
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {solutions.map((s, idx) => (
                <div key={idx}>
                  <div style={{ color: 'var(--primary)', marginBottom: '12px' }}>{s.icon}</div>
                  <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>{s.title}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          #solutions div[style*="display: grid; grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
};

export default ProblemSolution;
