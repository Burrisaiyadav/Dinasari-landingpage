import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, TrendingUp, Shield, Zap, ArrowRight, BarChart3, Leaf } from 'lucide-react';
import heroImg from '../assets/impact/hero.png';

const ImpactPage = () => {
  const metrics = [
    { label: "Lives Empowered", value: "250K+", icon: <Users size={32} />, color: "var(--primary)" },
    { label: "Income Increase", value: "40%", icon: <TrendingUp size={32} />, color: "var(--primary-light)" },
    { label: "Digital Inclusion", value: "12+ Lang", icon: <Globe size={32} />, color: "var(--primary-dark)" },
    { label: "Carbon Offset", value: "15K Tons", icon: <Leaf size={32} />, color: "var(--brown)" }
  ];

  const stories = [
    {
      title: "Social Empowerment",
      desc: "By removing middlemen, we ensure that 100% of the earned wage reaches the worker's digital wallet instantly.",
      stat: "₹15B+ Transacted"
    },
    {
      title: "Sustainable Farming",
      desc: "Our machinery sharing model reduces the carbon footprint by optimizing equipment usage across multiple villages.",
      stat: "30% Energy Saved"
    },
    {
      title: "Rural Digitalization",
      desc: "We are creating the first digital identity for millions of workers, enabling access to formal credit and insurance.",
      stat: "1.2M ID Created"
    }
  ];

  return (
    <div className="impact-page">
      {/* Hero Section */}
      <section className="impact-hero">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="main-badge">
              <span className="dot" />
              SOCIAL IMPACT REPORT 2024
            </div>

            <h1>Creating Value Beyond <br /><span className="text-gradient">Commerce.</span></h1>
            
            <p className="hero-subtext">
              Dinasari is committed to building a sustainable, inclusive, and transparent ecosystem for rural India. Our impact is measured in lives changed, not just numbers.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="impact-hero-img"
        >
          <img src={heroImg} alt="Impact" />
          <div className="img-overlay" />
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="metrics-section section-padding" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">THE NUMBERS</span>
            <h2>Measuring Our <span className="text-gradient">Impact.</span></h2>
          </div>
          
          <div className="metrics-grid">
            {metrics.map((f, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="modern-feature-card"
              >
                <div className="card-inner">
                  <div className="icon-box" style={{ '--accent': f.color }}>
                    {f.icon}
                  </div>
                  <div style={{ fontSize: '48px', fontWeight: '900', marginBottom: '8px', color: 'var(--text-main)' }}>{f.value}</div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{f.label}</h4>
                  <div className="accent-line" style={{ background: f.color }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="stories-section section-padding">
        <div className="container">
          <div className="grid-3">
            {stories.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="impact-card glass"
              >
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="impact-stat">{s.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="vision-section section-padding" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <Heart size={48} style={{ marginBottom: '32px' }} />
          <h2 style={{ fontSize: '42px', fontWeight: '800', lineHeight: '1.2', marginBottom: '32px' }}>
            "Our goal is to ensure that every rural worker has the same digital opportunities as the urban workforce."
          </h2>
          <button className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Download Full Report</button>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .impact-page { background: white; font-family: 'Outfit', sans-serif; }

        .impact-hero {
          padding-top: 200px;
          text-align: center;
          overflow: hidden;
        }

        .main-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: rgba(31, 138, 61, 0.08);
          border-radius: 50px;
          color: var(--primary);
          font-weight: 700;
          font-size: 13px;
          margin-bottom: 40px;
          letter-spacing: 1px;
        }

        .dot { height: 6px; width: 6px; background: var(--primary); border-radius: 50%; }

        .impact-hero h1 {
          font-size: 84px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -3px;
          color: var(--text-main);
          margin-bottom: 32px;
        }

        .hero-subtext {
          font-size: 24px;
          color: var(--text-muted);
          line-height: 1.5;
          max-width: 740px;
          margin: 0 auto 56px;
        }

        .impact-hero-img {
          width: 100%;
          max-width: 1200px;
          margin: 60px auto 0;
          height: 600px;
          border-radius: 60px 60px 0 0;
          overflow: hidden;
          position: relative;
        }

        .impact-hero-img img { width: 100%; height: 100%; object-fit: cover; }

        .section-header-centered { text-align: center; margin-bottom: 80px; }
        .section-label {
          display: inline-block;
          padding: 8px 24px;
          background: var(--primary);
          border-radius: 50px;
          color: white;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .modern-feature-card {
          background: #fff;
          border-radius: 32px;
          padding: 50px 40px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .icon-box {
          width: 70px;
          height: 70px;
          background: color-mix(in srgb, var(--accent), transparent 90%);
          color: var(--accent);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
        }

        .accent-line {
          position: absolute;
          bottom: 0; left: 40px; right: 40px;
          height: 3px;
          opacity: 0;
          transition: all 0.4s ease;
        }

        .modern-feature-card:hover .accent-line { opacity: 1; }

        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .impact-card { padding: 50px 40px; border-radius: 40px; border: 1px solid var(--border); }
        .impact-card h3 { font-size: 28px; font-weight: 800; margin-bottom: 20px; color: var(--primary-dark); }
        .impact-card p { color: var(--text-muted); line-height: 1.7; margin-bottom: 32px; }
        .impact-stat { font-size: 24px; font-weight: 900; color: var(--primary); }

        @media (max-width: 992px) {
          .impact-hero h1 { font-size: 48px; letter-spacing: -1.5px; }
          .metrics-grid, .grid-3 { grid-template-columns: 1fr; }
          .impact-hero-img { height: 400px; border-radius: 30px 30px 0 0; }
        }
      `}} />
    </div>
  );
};

export default ImpactPage;
