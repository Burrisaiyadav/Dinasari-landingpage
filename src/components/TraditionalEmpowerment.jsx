import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const TraditionalEmpowerment = () => {
  return (
    <section id="empowerment" style={{ padding: '160px 0', background: '#0a2a16', overflow: 'hidden', position: 'relative' }}>
      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'var(--primary)', filter: 'blur(150px)', borderRadius: '50%', opacity: 0.1 }} />

      <div className="container">
        <div className="empowerment-grid">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="empowerment-content"
          >
            <Quote size={60} style={{ color: 'var(--primary)', marginBottom: '40px', opacity: 0.4 }} />
            
            <h2 style={{ fontSize: '56px', fontWeight: '900', color: 'white', marginBottom: '32px', lineHeight: '1.1', letterSpacing: '-2px' }}>
              Empowering the <br /> <span style={{ color: 'var(--primary)' }}>Traditional Heart</span> <br /> of our Nation.
            </h2>
            
            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', marginBottom: '48px', lineHeight: '1.7', maxWidth: '500px' }}>
              We believe in combining ancient wisdom with modern technology. Dinasari provides the tools rural communities need to thrive in a digital world without losing their identity.
            </p>

            <button className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '18px' }}>
              Our Mission <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="empowerment-image"
            style={{ position: 'relative' }}
          >
            <div className="image-frame">
              <img 
                src="/traditional-farming.jpg" 
                alt="Traditional Farming" 
              />
              <div className="image-overlay" />
            </div>

            <div className="heritage-badge">
              <div style={{ fontSize: '32px', fontWeight: '900', lineHeight: '1' }}>Heritage</div>
              <div style={{ fontSize: '12px', fontWeight: '700', marginTop: '4px', textTransform: 'uppercase' }}>Meets Innovation</div>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .empowerment-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 100px;
        }
        .image-frame {
          position: relative;
          border-radius: 60px;
          overflow: hidden;
          aspect-ratio: 1/1;
          box-shadow: 0 40px 80px rgba(0,0,0,0.4);
        }
        .image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.1);
        }
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(10, 42, 22, 0.4));
        }
        .heritage-badge {
          position: absolute;
          top: 40px;
          right: -40px;
          background: var(--yellow);
          color: white;
          padding: 24px 32px;
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(244, 180, 0, 0.3);
          text-align: center;
          z-index: 10;
        }
        @media (max-width: 1200px) {
          .empowerment-grid { grid-template-columns: 1fr; gap: 80px; text-align: center; }
          .empowerment-content { display: flex; flex-direction: column; align-items: center; order: 2; }
          .empowerment-image { order: 1; }
          .empowerment-content p { margin-left: auto; margin-right: auto; }
          #empowerment h2 { font-size: 42px; }
          .image-frame { max-width: 500px; margin: 0 auto; border-radius: 40px; }
          .heritage-badge { right: 0; top: 20px; padding: 16px 24px; }
          .heritage-badge div:first-child { font-size: 24px !important; }
        }
        @media (max-width: 576px) {
          #empowerment { padding: 80px 0; }
          #empowerment h2 { font-size: 32px; letter-spacing: -1px; }
          .image-frame { border-radius: 30px; }
          .heritage-badge { padding: 12px 20px; }
          .heritage-badge div:first-child { font-size: 20px !important; }
        }
      `}} />
    </section>
  );
};

export default TraditionalEmpowerment;
