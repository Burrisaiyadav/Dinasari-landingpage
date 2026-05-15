import React from 'react';
import { BarChart3, TrendingUp, Globe2, Rocket, ArrowUpRight } from 'lucide-react';

const InvestorSection = () => {
  const stats = [
    { label: "Market Size", value: "$350B+", sub: "Addressable Market" },
    { label: "Rural Users", value: "800M+", sub: "Target Audience" },
    { label: "Expansion", value: "15+", sub: "States by 2027" },
    { label: "Livelihoods", value: "1M+", sub: "Impact Target" }
  ];

  return (
    <section id="investors" style={{ background: '#0a0b0a', padding: '140px 0', color: 'white', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '100px', alignItems: 'center' }}>
          <div>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--yellow)', 
              fontWeight: '700', 
              fontSize: '14px', 
              marginBottom: '32px',
              letterSpacing: '1px'
            }}>
              <TrendingUp size={18} /> INSTITUTIONAL OPPORTUNITY
            </div>
            
            <h2 style={{ fontSize: '64px', fontWeight: '900', marginBottom: '32px', lineHeight: '1', letterSpacing: '-2px' }}>
              Building the <span style={{ color: 'var(--primary)' }}>Digital Backbone</span> <br />
              of Rural Economy.
            </h2>
            
            <p style={{ fontSize: '22px', opacity: 0.7, marginBottom: '56px', lineHeight: '1.6', maxWidth: '640px' }}>
              Dinasari scales productivity in markets that have been offline for centuries. We are creating a new asset class by digitizing rural labour and machinery.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
              {stats.map((s, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '42px', fontWeight: '900', color: 'white', marginBottom: '8px' }}>{s.value}</div>
                  <div style={{ fontWeight: '700', fontSize: '18px', marginBottom: '4px' }}>{s.label}</div>
                  <div style={{ fontSize: '15px', opacity: 0.5 }}>{s.sub}</div>
                </div>
              ))}
            </div>

            <button className="btn btn-primary" style={{ marginTop: '64px', padding: '20px 48px', fontSize: '18px' }}>
              Request Investor Access <ArrowUpRight size={22} />
            </button>
          </div>

          <div style={{ 
            background: 'rgba(255,255,255,0.03)', 
            borderRadius: '48px', 
            padding: '60px',
            border: '1px solid rgba(255,255,255,0.08)',
            position: 'relative'
          }}>
            <h4 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '40px' }}>Growth Roadmap</h4>
            
            <div style={{ position: 'relative' }}>
              {/* Roadmap Line */}
              <div style={{ position: 'absolute', top: '0', left: '7px', width: '2px', height: '100%', background: 'rgba(255,255,255,0.1)' }} />
              
              {[
                { year: "2026", task: "Platform Launch & Seed", status: "Completed" },
                { year: "2027", task: "Scale to 500+ Villages", status: "In Progress" },
                { year: "2028", task: "Series A & Pan-India Scale", status: "Upcoming" },
                { year: "2029", task: "Global Expansion & Fintech", status: "Vision" }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '32px', marginBottom: '40px', position: 'relative' }}>
                  <div style={{ 
                    width: '16px', 
                    height: '16px', 
                    borderRadius: '50%', 
                    background: item.status === 'Completed' ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
                    marginTop: '8px',
                    zIndex: 1,
                    boxShadow: item.status === 'Completed' ? '0 0 15px var(--primary)' : 'none'
                  }} />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: '900', color: 'var(--primary)', fontSize: '14px' }}>{item.year}</span>
                      <span style={{ fontSize: '12px', opacity: 0.5, textTransform: 'uppercase', fontWeight: '700' }}>{item.status}</span>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>{item.task}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1200px) {
          #investors h2 { font-size: 48px; }
        }
        @media (max-width: 992px) {
          #investors div[style*="display: grid; grid-template-columns: 1.2fr 0.8fr"] {
            grid-template-columns: 1fr !important;
            gap: 80px !important;
          }
          #investors div[style*="padding: 60px"] { padding: 40px !important; }
        }
      `}} />
    </section>
  );
};

export default InvestorSection;
