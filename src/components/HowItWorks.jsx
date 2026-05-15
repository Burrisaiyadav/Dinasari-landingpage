import React from 'react';
import { Smartphone, UserSearch, HardHat, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { 
      number: "01", 
      icon: <Smartphone size={32} />, 
      title: "Quick Registration", 
      desc: "One-tap secure login with your mobile number. No complex passwords needed." 
    },
    { 
      number: "02", 
      icon: <UserSearch size={32} />, 
      title: "Smart Matching", 
      desc: "AI connects the right workers to the right farms based on skill and location." 
    },
    { 
      number: "03", 
      icon: <HardHat size={32} />, 
      title: "Secure Operations", 
      desc: "Verified jobs and instant digital payments ensure peace of mind for everyone." 
    }
  ];

  return (
    <section id="how-it-works" style={{ background: '#f8faf9', padding: '120px 0' }}>
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
            Seamless Process
          </div>
          <h2 style={{ fontSize: '52px', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-1.5px' }}>
            How it <span className="text-gradient">Works</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0px', position: 'relative' }}>
          {steps.map((s, idx) => (
            <div key={idx} style={{ position: 'relative', padding: '0 40px' }}>
              {/* Connection Line */}
              {idx < 2 && (
                <div style={{
                  position: 'absolute',
                  top: '60px',
                  right: '-50px',
                  width: '100px',
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--primary) 0%, transparent 100%)',
                  opacity: 0.2,
                  zIndex: 0
                }} className="desktop-line" />
              )}
              
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'white', 
                borderRadius: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                marginBottom: '40px',
                color: 'var(--primary)',
                position: 'relative',
                zIndex: 1
              }}>
                {s.icon}
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  right: '-10px',
                  width: '32px',
                  height: '32px',
                  background: 'var(--primary)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '800',
                  fontSize: '14px'
                }}>
                  {s.number}
                </div>
              </div>

              <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: 'var(--text-main)' }}>{s.title}</h4>
              <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{s.desc}</p>
              
              <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', fontSize: '14px' }}>
                <CheckCircle2 size={16} /> Verified Flow
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          #how-it-works div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 80px !important;
          }
          .desktop-line { display: none; }
          #how-it-works div[style*="padding: 0 40px"] { padding: 0 !important; text-align: center; }
          #how-it-works div[style*="width: 80px"] { margin-left: auto; margin-right: auto; }
          #how-it-works div[style*="display: flex; alignItems: center; gap: 8px"] { justify-content: center; }
        }
      `}} />
    </section>
  );
};

export default HowItWorks;
