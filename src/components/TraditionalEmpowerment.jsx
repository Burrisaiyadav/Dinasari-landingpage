import React from 'react';

const TraditionalEmpowerment = () => {
  return (
    <section style={{ background: '#fcfcfc', padding: '120px 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '100px', 
          alignItems: 'center' 
        }}>
          {/* Image Side - Traditional Hero */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              borderRadius: '40px', 
              overflow: 'hidden', 
              boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
              aspectRatio: '1/1'
            }}>
              <img 
                src="/traditional-farming.jpg" 
                alt="Traditional Farming with Bulls"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            {/* Float Badge */}
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '-40px',
              background: 'var(--yellow)',
              padding: '24px 40px',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(244, 180, 0, 0.3)',
              color: 'white',
              zIndex: 2
            }}>
              <div style={{ fontSize: '42px', fontWeight: '900', lineHeight: '1' }}>Heritage</div>
              <div style={{ fontSize: '14px', fontWeight: '700', marginTop: '4px' }}>Meets Innovation</div>
            </div>
          </div>

          {/* Text Side - Modern Narrative */}
          <div>
            <div style={{ 
              display: 'inline-block', 
              padding: '8px 20px', 
              background: 'rgba(31, 138, 61, 0.08)', 
              borderRadius: '50px',
              color: 'var(--primary)',
              fontWeight: '700',
              fontSize: '14px',
              marginBottom: '32px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Empowering Every Hand
            </div>
            
            <h2 style={{ 
              fontSize: '56px', 
              fontWeight: '900', 
              color: 'var(--text-main)', 
              marginBottom: '32px',
              lineHeight: '1.1',
              letterSpacing: '-2px'
            }}>
              Respecting Roots, <br />
              <span className="text-gradient">Building Futures.</span>
            </h2>
            
            <p style={{ 
              fontSize: '20px', 
              color: 'var(--text-muted)', 
              marginBottom: '48px',
              lineHeight: '1.6'
            }}>
              At Dinasari, we believe technology shouldn't replace tradition—it should empower it. We provide the digital tools that give local farmers the same opportunities as large-scale industrial operations.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
              {[
                { title: "Localized Solutions", desc: "Digital services designed specifically for small-hold farmers and their unique needs." },
                { title: "Direct Market Access", desc: "Removing middle-men to ensure farmers get the full value of their hard work." }
              ].map((benefit, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '16px', 
                    background: 'white', 
                    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    flexShrink: 0,
                    fontSize: '20px',
                    fontWeight: '800'
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>{benefit.title}</h4>
                    <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          section div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 80px !important;
            text-align: center;
          }
          div[style*="right: -40px"] { right: 0 !important; top: -30px !important; }
          div[style*="display: flex; gap: 24px"] { text-align: left; }
        }
      `}} />
    </section>
  );
};

export default TraditionalEmpowerment;
