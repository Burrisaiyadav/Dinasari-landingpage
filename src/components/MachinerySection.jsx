import React from 'react';
import { motion } from 'framer-motion';
import { Tractor, Drill, Zap, ChevronRight } from 'lucide-react';

// Helper for color mixing
const color_mix = (hex) => hex + '1A';
const color_mix_light = (hex) => hex + '0D';

const MachinerySection = () => {
  const machines = [
    {
      name: "Smart Tractor",
      desc: "GPS-enabled heavy duty tractors with specialized attachments for multi-crop harvesting.",
      price: "₹800/hr",
      icon: <Tractor size={32} />,
      tag: "Heavy Duty",
      color: "#1F8A3D"
    },
    {
      name: "Precision Seeder",
      desc: "automated seeding machinery ensuring perfect depth and spacing for maximum yield.",
      price: "₹400/hr",
      icon: <Drill size={32} />,
      tag: "Precision",
      color: "#3B82F6"
    },
    {
      name: "Solar Sprayer",
      desc: "Eco-friendly autonomous spraying units for uniform nutrient and pesticide distribution.",
      price: "₹250/hr",
      icon: <Zap size={32} />,
      tag: "Eco-Friendly",
      color: "#F59E0B"
    }
  ];

  return (
    <section id="machinery" style={{ background: '#ffffff', padding: '160px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '100px' }} className="machinery-header">
          <div style={{ maxWidth: '600px' }}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="trust-pill"
              style={{ color: 'var(--primary)', marginBottom: '32px' }}
            >
              Mechanized Farming
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '56px', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-3px', lineHeight: '1.1' }}
            >
              High-End Machinery <br /> <span className="text-gradient">On Demand.</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '400px', marginBottom: '10px' }}
          >
            Access the latest agricultural technology without the heavy investment. Pay only for what you use.
          </motion.p>
        </div>

        <div className="machinery-grid">
          {machines.map((m, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="machine-card"
            >
              <div className="machine-tag" style={{ background: color_mix(m.color), color: m.color }}>{m.tag}</div>
              
              <div className="machine-icon" style={{ color: m.color, background: color_mix_light(m.color) }}>
                {m.icon}
              </div>
              
              <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px' }}>{m.name}</h4>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.6' }}>{m.desc}</p>
              
              <div className="machine-footer">
                <div className="price-tag">
                  <span style={{ fontSize: '24px', fontWeight: '900', color: 'var(--text-main)' }}>{m.price}</span>
                  <span style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '600' }}> /hour</span>
                </div>
                <button className="book-btn" style={{ '--accent': m.color }}>
                  Book Now <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .machinery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .machine-card {
          background: white;
          border-radius: 40px;
          padding: 48px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .machine-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
          border-color: rgba(31, 138, 61, 0.15);
        }
        .machine-tag {
          position: absolute;
          top: 48px;
          right: 48px;
          font-size: 12px;
          font-weight: 800;
          padding: 6px 16px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .machine-icon {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
        }
        .machine-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .book-btn {
          background: none;
          color: var(--accent);
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .book-btn:hover {
          gap: 12px;
        }
        .text-gradient {
            background: linear-gradient(135deg, var(--primary), #10B981);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        @media (max-width: 1200px) {
          .machinery-grid { grid-template-columns: repeat(2, 1fr); }
          .machinery-header { flex-direction: column; align-items: flex-start; gap: 32px; }
        }
        @media (max-width: 768px) {
          .machinery-grid { grid-template-columns: 1fr; }
          .machine-card { padding: 32px; }
          #machinery h2 { font-size: 36px; }
        }
      `}} />
    </section>
  );
};

export default MachinerySection;
