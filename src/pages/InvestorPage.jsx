import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, PieChart, Activity, Shield, Rocket, ArrowRight, DollarSign, BarChart3, Globe, X, Send, Calendar, FileText } from 'lucide-react';
import { db } from '../services/mockDb';
import founderImg from '../assets/team/founder.jpg';
import cofounderImg from '../assets/team/cofounder.jpg';

const InvestorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('deck'); // 'deck' or 'meeting'
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const traction = [
    { label: "Active Farmers", value: "50,000+", icon: <Users size={24} />, color: "var(--primary)" },
    { label: "Jobs Completed", value: "200,000+", icon: <Activity size={24} />, color: "var(--primary-light)" },
    { label: "Villages reached", value: "1,200+", icon: <Globe size={24} />, color: "var(--primary-dark)" },
    { label: "GMV Growth", value: "3.5x YoY", icon: <TrendingUp size={24} />, color: "var(--brown)" }
  ];

  const market = [
    { title: "Total Market (TAM)", value: "$150B+", desc: "Indian Agricultural services market size." },
    { title: "Serviceable (SAM)", value: "$45B", desc: "Digitalization of rural commerce & labor." },
    { title: "Our Target (SOM)", value: "$12B", desc: "Our projected reach in 5 years." }
  ];

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      type: modalType,
      name: e.target[0].value,
      email: e.target[1].value,
      firm: e.target[2].value,
      message: e.target[3].value,
      timestamp: new Date().toISOString()
    };
    
    // Save to Mock DB
    const entry = db.inquiries.add(data);
    console.log("Investor Inquiry Received & Stored:", entry);
    
    setFormData(entry);
    setIsSubmitted(true);
    // Modal stays open for developer verification
    setTimeout(() => {
      // setIsModalOpen(false); 
    }, 5000);
  };

  return (
    <div className="investor-page">
      {/* Slide 1: Hero Pitch */}
      <section className="pitch-hero">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="main-badge">
              <span className="dot" />
              SERIES A OPPORTUNITY
            </div>

            <h1>Investing in the Future of <br /><span className="text-gradient">Rural India.</span></h1>
            
            <p className="hero-subtext">
              Dinasari is building the digital infrastructure for the next 100 million farmers. Join us in scaling the operating system for rural commerce.
            </p>

            <div className="hero-ctas">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => handleOpenModal('deck')}
              >
                Request Pitch Deck <ArrowRight size={20} />
              </button>
              <button 
                className="btn btn-outline btn-lg"
                onClick={() => handleOpenModal('meeting')}
              >
                Book a Meeting <Calendar size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Traction Section - Matching Main Site Cards */}
      <section className="traction-section" style={{ background: 'var(--background)', padding: '140px 0' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">Our Traction</span>
            <h2>Proven <span className="text-gradient">Scale.</span></h2>
          </div>
          
          <div className="traction-grid">
            {traction.map((f, idx) => (
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

      {/* Problem & Solution Slide */}
      <section className="problem-solution-slide section-padding">
        <div className="container">
          <div className="deck-grid">
            <div className="deck-text">
              <span className="section-label" style={{ background: '#ff4d4d' }}>The Problem</span>
              <h2 style={{ fontSize: '56px', fontWeight: '900', letterSpacing: '-2px', margin: '24px 0', color: 'var(--text-main)' }}>A Fragmented, <br />Low-Trust Ecosystem.</h2>
              <p style={{ fontSize: '20px', color: 'var(--text-muted)', lineHeight: '1.6' }}>Rural India suffers from extreme fragmentation. Farmers lack access to reliable labor, workers lack consistent income, and machinery owners struggle with underutilization.</p>
              <ul className="deck-list">
                <li>30% Labor Shortage in Peak Season</li>
                <li>40% Machinery Idle Time</li>
                <li>Zero Digital Credit History</li>
              </ul>
            </div>
            <div className="deck-card solution-box glass">
              <span className="section-label">The Solution</span>
              <h3>The Dinasari OS</h3>
              <p>A unified ecosystem connecting all stakeholders with real-time matching, secure payments, and verified trust scores.</p>
              <div className="solution-features">
                <div className="s-feat"><Shield size={20} /> Verified Trust Scores</div>
                <div className="s-feat"><DollarSign size={20} /> Digital Escrow Payments</div>
                <div className="s-feat"><Rocket size={20} /> Smart Supply-Chain Logistics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Slide */}
      <section className="market-slide section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">Market Size</span>
            <h2>The <span className="text-gradient">Opportunity.</span></h2>
          </div>
          <div className="market-grid">
            {market.map((m, i) => (
              <div key={i} className="market-card-premium">
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{m.title}</h4>
                <div style={{ fontSize: '56px', fontWeight: '900', color: 'var(--primary)', margin: '16px 0' }}>{m.value}</div>
                <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 5: The Team */}
      <section className="team-slide section-padding" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">Leadership</span>
            <h2>Driven by <span className="text-gradient">Purpose.</span></h2>
          </div>
          <div className="founders-pitch">
            <div className="founder-mini">
              <img src={founderImg} alt="Founder" />
              <h3>Revanth Lokesh</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="founder-mini">
              <img src={cofounderImg} alt="Co-Founder" />
              <h3>Vishnu Sai</h3>
              <p>Co-Founder & CTO</p>
            </div>
          </div>
          <p className="team-mission">
            "We are building a more equitable future for the 800 million people who live in rural India."
          </p>
        </div>
      </section>

      {/* Final Slide: CTA */}
      <section className="contact-slide section-padding">
        <div className="container">
          <div className="investor-cta-card">
            <h2 style={{ color: 'var(--text-main)' }}>Ready to Transform <br />Rural Commerce?</h2>
            <p style={{ color: 'var(--text-muted)' }}>Join us in empowering the next billion users. Let's discuss our vision and roadmap.</p>
            <div className="hero-ctas" style={{ marginTop: '40px' }}>
              <button className="btn btn-primary btn-lg" onClick={() => handleOpenModal('deck')}>Request Investor Brief</button>
              <button className="btn btn-outline btn-lg" onClick={() => handleOpenModal('meeting')}>Book a Strategy Call</button>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="modal-content glass"
            >
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>

              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon"><Send size={40} /></div>
                  <h2 style={{ color: 'var(--text-main)' }}>Request Received!</h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Our investor relations team will reach out to you within 24 hours.</p>
                  
                  <div className="dev-data-box" style={{ textAlign: 'left', background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '14px', color: '#64748b', textTransform: 'uppercase', marginBottom: '12px' }}>Developer Verification:</h4>
                    <pre style={{ fontSize: '13px', color: '#334155', overflowX: 'auto' }}>
                      {JSON.stringify(formData, null, 2)}
                    </pre>
                  </div>
                </div>
              ) : (
                <>
                  <div className="modal-header">
                    <span className="apply-badge">{modalType === 'deck' ? 'Pitch Deck Request' : 'Schedule Meeting'}</span>
                    <h2 style={{ color: 'var(--text-main)' }}>{modalType === 'deck' ? 'Access the Deck' : 'Book a Call'}</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Enter your professional details to proceed.</p>
                  </div>

                  <form className="apply-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" required />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="john@firm.com" required />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Firm / Institution</label>
                      <input type="text" placeholder="Venture Capital / Private Equity" required />
                    </div>

                    <div className="form-group">
                      <label>Message / Specific Interests</label>
                      <textarea placeholder="Tell us what you'd like to discuss..." rows="4"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">
                      {modalType === 'deck' ? 'Get Pitch Deck' : 'Request Meeting'} <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .investor-page { background: white; font-family: 'Outfit', sans-serif; }

        .pitch-hero {
          padding-top: 200px;
          padding-bottom: 140px;
          background: white;
          text-align: center;
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

        .pitch-hero h1 {
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

        .hero-ctas { display: flex; gap: 24px; justify-content: center; }

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

        .traction-grid {
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

        .deck-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .deck-list { list-style: none; margin-top: 32px; }
        .deck-list li { 
          padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,0.06); 
          font-weight: 700; font-size: 18px; color: #ff4d4d;
          display: flex; align-items: center; gap: 12px;
        }
        .deck-list li::before { content: '✕'; color: #ff4d4d; }

        .solution-box.glass { padding: 60px; border-radius: 40px; border: 1px solid var(--primary); background: rgba(31, 138, 61, 0.03); }
        .solution-box h3 { font-size: 32px; margin: 16px 0; color: var(--primary-dark); }
        .solution-features { display: flex; flex-direction: column; gap: 16px; margin-top: 32px; }
        .s-feat { display: flex; align-items: center; gap: 12px; font-weight: 600; color: var(--primary-dark); }

        .market-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .market-card-premium { padding: 40px; text-align: center; background: white; border-radius: 32px; border: 1px solid rgba(0,0,0,0.05); }

        .founders-pitch { display: flex; gap: 60px; justify-content: center; margin-top: 60px; }
        .founder-mini { text-align: center; }
        .founder-mini img { width: 180px; height: 180px; border-radius: 50%; object-fit: cover; margin-bottom: 24px; border: 4px solid var(--primary-light); }
        .founder-mini h3 { font-size: 22px; font-weight: 800; }

        .team-mission { 
          max-width: 800px; margin: 60px auto 0; text-align: center; 
          font-size: 28px; font-style: italic; color: var(--text-muted);
          font-weight: 500; line-height: 1.4;
        }

        .investor-cta-card { padding: 100px; text-align: center; border-radius: 60px; background: white; border: 1px solid rgba(31, 138, 61, 0.1); }
        .investor-cta-card h2 { font-size: 56px; font-weight: 900; margin-bottom: 24px; letter-spacing: -2px; }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          width: 100%;
          max-width: 600px;
          background: white;
          border-radius: 40px;
          padding: 50px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 40px 100px rgba(0,0,0,0.1);
        }

        .close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          background: #f3f4f6;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .apply-form { display: flex; flex-direction: column; gap: 24px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label { font-weight: 600; font-size: 14px; color: var(--text-main); }
        .form-group input, .form-group textarea {
          padding: 14px 20px;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #f9fafb;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          outline: none;
        }

        .submit-btn { width: 100%; padding: 16px; justify-content: center; font-size: 16px; }

        .success-message { text-align: center; padding: 40px 0; }
        .success-icon { 
          width: 80px; height: 80px; background: rgba(31, 138, 61, 0.1); 
          color: var(--primary); border-radius: 50%; display: flex; 
          align-items: center; justify-content: center; margin: 0 auto 24px;
        }

        @media (max-width: 992px) {
          .pitch-hero h1 { font-size: 56px; letter-spacing: -1.5px; }
          .deck-grid, .traction-grid, .market-grid { grid-template-columns: 1fr; }
          .investor-cta-card h2 { font-size: 36px; }
          .investor-cta-card { padding: 60px 24px; }
          .hero-ctas { flex-direction: column; }
        }
      `}} />
    </div>
  );
};

export default InvestorPage;
