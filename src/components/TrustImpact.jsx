import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const TrustImpact = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Rice Farmer, Punjab",
      text: "Before Dinasari, I had to travel 20km just to find workers. Now they are at my farm in 30 minutes. It saved my harvest this year.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=rajesh"
    },
    {
      name: "Sunita Devi",
      role: "Agricultural Worker, Bihar",
      text: "I used to wait for weeks for work. Now I get job alerts on my phone every day. The payments are direct and on time.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=sunita"
    }
  ];

  return (
    <section id="trust-impact" style={{ padding: '160px 0', background: '#ffffff', overflow: 'hidden' }}>
      <div className="container">
        <div className="trust-grid">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="trust-info"
          >
            <motion.div 
              className="trust-pill"
              style={{ color: 'var(--primary)', marginBottom: '32px' }}
            >
              Real World Results
            </motion.div>
            
            <h2 style={{ fontSize: '56px', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-3px', lineHeight: '1.1', marginBottom: '32px' }}>
              Impact That <br /> <span className="text-gradient">Changes Lives.</span>
            </h2>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '20px', marginBottom: '48px', lineHeight: '1.6', maxWidth: '500px' }}>
              We're proud to be building the infrastructure for rural trust. See how Dinasari is empowering individuals across the country.
            </p>
            
            <div className="trust-stats">
              {[
                { label: "Villages Reached", val: "1,200+", growth: "+24%" },
                { label: "Worker Earnings", val: "₹15Cr+", growth: "+40%" },
                { label: "Active Users", val: "85,000+", growth: "+15%" }
              ].map((stat, i) => (
                <div key={i} className="trust-stat-item">
                  <div className="stat-label">
                    <span>{stat.label}</span>
                    <span className="stat-growth"><ArrowUpRight size={14} /> {stat.growth}</span>
                  </div>
                  <div className="stat-value">{stat.val}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="testimonials-stack">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="testimonial-card-premium"
              >
                <div className="quote-icon-bg">
                  <Quote size={40} />
                </div>
                
                <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="var(--yellow)" color="var(--yellow)" />)}
                </div>
                
                <p style={{ fontSize: '20px', fontWeight: '500', color: 'var(--text-main)', marginBottom: '32px', lineHeight: '1.6', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                
                <div className="testimonial-footer">
                  <img src={t.avatar} alt={t.name} className="avatar-img" />
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '18px', color: 'var(--text-main)' }}>{t.name}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '600' }}>{t.role}</div>
                  </div>
                  <CheckCircle2 size={24} style={{ marginLeft: 'auto', color: 'var(--primary)', opacity: 0.4 }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .trust-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 120px;
          align-items: center;
        }
        .trust-stat-item {
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .stat-label {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          font-size: 14px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }
        .stat-growth {
          color: var(--primary);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .stat-value {
          font-size: 36px;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: -1px;
        }
        .testimonial-card-premium {
          background: #f8faf9;
          border-radius: 48px;
          padding: 60px;
          position: relative;
          margin-bottom: 40px;
          border: 1px solid rgba(0,0,0,0.02);
          transition: all 0.4s ease;
        }
        .testimonial-card-premium:hover {
          background: white;
          box-shadow: 0 40px 80px rgba(0,0,0,0.06);
          border-color: rgba(31, 138, 61, 0.1);
        }
        .quote-icon-bg {
          position: absolute;
          top: 40px;
          right: 60px;
          color: var(--primary);
          opacity: 0.1;
        }
        .testimonial-footer {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .avatar-img {
          width: 56px;
          height: 56px;
          border-radius: 20px;
          object-fit: cover;
        }
        @media (max-width: 1200px) {
          .trust-grid { grid-template-columns: 1fr; gap: 80px; }
          .trust-info { text-align: center; }
          .trust-info p { margin-left: auto; margin-right: auto; }
          #trust-impact h2 { font-size: 42px; }
        }
        @media (max-width: 768px) {
          .testimonial-card-premium { padding: 40px; }
          .stat-value { font-size: 28px; }
        }
      `}} />
    </section>
  );
};

export default TrustImpact;

