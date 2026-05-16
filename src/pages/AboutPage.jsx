import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, ShieldCheck, Heart } from 'lucide-react';
import founderImg from '../assets/team/founder.jpg';
import cofounderImg from '../assets/team/cofounder.jpg';

const AboutPage = () => {
  const team = [
    {
      name: "Revanth Lokesh",
      role: "Founder & CEO",
      bio: "A passionate entrepreneur dedicated to revolutionizing Indian agriculture through technology. Revanth leads Dinasari with a vision to empower every rural worker with modern tools and resources.",
      image: founderImg
    },
    {
      name: "Vishnu Sai",
      role: "Co-Founder & CTO",
      bio: "A tech enthusiast focused on building scalable solutions for rural India. Vishnu leads the technical development at Dinasari, ensuring the platform remains accessible and efficient for everyone.",
      image: cofounderImg
    }
  ];

  const values = [
    { icon: <ShieldCheck size={24} />, title: "Trust", desc: "Building long-term relationships through transparency and reliability." },
    { icon: <Target size={24} />, title: "Impact", desc: "Measuring success by the positive change we bring to rural lives." },
    { icon: <Heart size={24} />, title: "Empathy", desc: "Understanding the unique challenges of the agricultural workforce." }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <span className="badge">Our Journey</span>
            <h1>Revolutionizing Rural <span className="text-gradient">Commerce</span></h1>
            <p>Dinasari Agritech is more than a platform; it's a movement to empower the backbone of India—our farmers and rural workers.</p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section-padding">
        <div className="container">
          <div className="grid-2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <div className="icon-box mission"><Target size={32} /></div>
              <h2>Our Mission</h2>
              <p>To create a sustainable ecosystem where technology simplifies agricultural operations and enhances the financial well-being of rural communities.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <div className="icon-box vision"><Eye size={32} /></div>
              <h2>Our Vision</h2>
              <p>To be the world's most trusted platform for rural empowerment, connecting traditional wisdom with modern innovation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge">Leadership</span>
            <h2>Meet the <span className="text-gradient">Visionaries</span></h2>
            <p>The driving force behind Dinasari's innovation and impact.</p>
          </div>

          <div className="founders-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="founder-card"
              >
                <div className="founder-image">
                  <img src={member.image} alt={member.name} />
                  <div className="image-overlay"></div>
                </div>
                <div className="founder-info">
                  <h3>{member.name}</h3>
                  <span className="role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section section-padding">
        <div className="container">
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-item">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-page {
          background: #F9FBF9;
        }

        .about-hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #0a2a16 0%, #15662D 100%);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop') center/cover;
          opacity: 0.1;
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }

        .badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(43, 174, 79, 0.2);
          border: 1px solid rgba(43, 174, 79, 0.3);
          border-radius: 50px;
          color: var(--primary-light);
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 24px;
        }

        .about-hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .about-hero p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .glass-card {
          padding: 60px 40px;
          background: white;
          border-radius: 32px;
          border: 1px solid rgba(31, 138, 61, 0.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
          transition: transform 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-10px);
        }

        .icon-box {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
        }

        .icon-box.mission { background: rgba(31, 138, 61, 0.1); color: var(--primary); }
        .icon-box.vision { background: rgba(244, 180, 0, 0.1); color: var(--yellow); }

        .glass-card h2 { margin-bottom: 20px; font-size: 28px; }
        .glass-card p { color: var(--text-muted); line-height: 1.8; font-size: 17px; }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 80px;
        }

        .section-header h2 { font-size: 42px; margin: 20px 0; }

        .founders-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .founder-card {
          background: white;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.03);
        }

        .founder-image {
          height: 500px;
          position: relative;
          overflow: hidden;
          background: #f0f0f0;
        }

        .founder-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%; /* Prioritize the head area */
          transition: transform 0.6s ease;
        }

        .founder-card:hover .founder-image img {
          transform: scale(1.05);
        }

        .founder-info {
          padding: 40px;
        }

        .founder-info h3 { font-size: 24px; margin-bottom: 8px; }
        .role { 
          display: block; 
          color: var(--primary); 
          font-weight: 600; 
          margin-bottom: 20px;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 14px;
        }
        .founder-info p { color: var(--text-muted); line-height: 1.7; }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          background: white;
          padding: 60px;
          border-radius: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
        }

        .value-item {
          text-align: center;
          padding: 0 20px;
        }

        .value-icon {
          width: 50px;
          height: 50px;
          background: var(--background);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: var(--primary);
        }

        .value-item h3 { margin-bottom: 12px; }
        .value-item p { color: var(--text-muted); font-size: 15px; }

        @media (max-width: 992px) {
          .about-hero h1 { font-size: 56px; }
          .grid-2, .founders-grid { grid-template-columns: 1fr; gap: 30px; }
          .values-grid { grid-template-columns: 1fr; padding: 40px 24px; }
          .founder-image { height: 400px; }
          .glass-card { padding: 40px 24px; }
        }

        @media (max-width: 640px) {
          .about-hero { padding: 100px 0 60px; }
          .about-hero h1 { font-size: 40px; }
          .about-hero p { font-size: 1rem; }
          .section-header h2 { font-size: 32px; }
          .founder-image { height: 350px; }
          .founder-info { padding: 30px 20px; }
          .section-padding { padding: 60px 0; }
        }
      `}} />
    </div>
  );
};

export default AboutPage;
