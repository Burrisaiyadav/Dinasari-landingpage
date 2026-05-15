import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TrustImpact = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Rice Farmer, Punjab",
      text: "Before Dinasari, I had to travel 20km just to find workers. Now they are at my farm in 30 minutes. It saved my harvest this year.",
      rating: 5
    },
    {
      name: "Sunita Devi",
      role: "Agricultural Worker, Bihar",
      text: "I used to wait for weeks for work. Now I get job alerts on my phone every day. The payments are direct and on time.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '24px' }}>
              Real Impact in <br />
              <span style={{ color: 'var(--primary)' }}>Real Villages.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '40px' }}>
              We're proud to be changing lives across rural communities. Our platform is built on trust and verified results.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: "Villages Reached", val: "1,200+" },
                { label: "Success Stories", val: "500+" },
                { label: "Worker Earnings", val: "$2M+" }
              ].map((stat, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <span style={{ fontWeight: '600' }}>{stat.label}</span>
                  <span style={{ fontWeight: '800', color: 'var(--primary)' }}>{stat.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                style={{ 
                  background: 'var(--background)', 
                  padding: '40px', 
                  borderRadius: '32px',
                  position: 'relative',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ color: 'var(--primary)', opacity: 0.1, position: 'absolute', top: '20px', right: '40px' }}>
                  <Quote size={80} />
                </div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="var(--yellow)" color="var(--yellow)" />)}
                </div>
                <p style={{ fontSize: '18px', fontWeight: '500', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#ddd' }} />
                  <div>
                    <div style={{ fontWeight: '700' }}>{t.name}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          #trust-impact div[style*="display: grid; grid-template-columns: 1fr 1.5fr"] {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}} />
    </section>
  );
};

export default TrustImpact;
