import React from 'react';

const MachinerySection = () => {
  return (
    <section 
      style={{ 
        position: 'relative',
        minHeight: '800px',
        margin: '120px 0',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background Image */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/tractor-bg-v2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: -1
        }}
      />

      {/* Solid Dark Overlay for focus */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.3)',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '580px', marginLeft: 'auto' }}>
          {/* Solid White Box Layout */}
          <div style={{
            padding: '80px 60px',
            borderRadius: '0px 40px 40px 0px',
            background: '#ffffff',
            color: 'var(--text-main)',
            boxShadow: '0 30px 100px rgba(0,0,0,0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Accent Line */}
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '8px', 
              height: '100%', 
              background: 'var(--primary)' 
            }} />

            <h2 style={{ 
              fontSize: '52px', 
              fontWeight: '900', 
              marginBottom: '28px',
              lineHeight: '1.05',
              color: 'var(--text-main)',
              letterSpacing: '-1px'
            }}>
              Scaling <br />
              <span style={{ color: 'var(--primary)' }}>Rural Capacity.</span>
            </h2>
            <p style={{ 
              fontSize: '19px', 
              color: 'var(--text-muted)', 
              marginBottom: '44px',
              lineHeight: '1.7'
            }}>
              We're not just providing tools; we're building the infrastructure for the next generation of global agriculture. Our platform ensures every village has access to world-class machinery.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div>
                <div style={{ fontSize: '36px', fontWeight: '900', color: 'var(--primary)' }}>12.5k</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Machines Registered</div>
              </div>
              <div>
                <div style={{ fontSize: '36px', fontWeight: '900', color: 'var(--primary)' }}>98%</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Uptime Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          section[style*="min-height: 800px"] { min-height: 600px !important; }
          div[style*="max-width: 580px"] { max-width: 100% !important; margin: 20px !important; }
          div[style*="padding: 80px 60px"] { padding: 50px 30px !important; border-radius: 24px !important; }
          h2 { font-size: 38px !important; }
        }
      `}} />
    </section>
  );
};

export default MachinerySection;
