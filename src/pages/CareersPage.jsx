import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Globe, Users, Heart, X, Send, Paperclip } from 'lucide-react';
import { db } from '../services/mockDb';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    { 
      icon: <Zap size={32} />, 
      title: "Fast Growth", 
      desc: "Join a high-velocity startup where you'll have the autonomy to build and scale rapidly.",
      color: "#3B82F6" 
    },
    { 
      icon: <Globe size={32} />, 
      title: "Real Impact", 
      desc: "Directly empower the backbone of India. Every line of code helps a farmer grow.",
      color: "#10B981" 
    },
    { 
      icon: <Users size={32} />, 
      title: "Ownership", 
      desc: "We value owners, not employees. Take full responsibility for your domain from day one.",
      color: "#F59E0B" 
    }
  ];

  const jobs = [
    { id: 1, title: "Full Stack Engineer", dept: "Engineering", location: "Remote / Hyderabad", type: "Full-time" },
    { id: 2, title: "Operations Lead", dept: "Operations", location: "Rural AP", type: "Full-time" },
    { id: 3, title: "Product Designer", dept: "Design", location: "Remote", type: "Full-time" }
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      jobTitle: selectedJob?.title,
      name: e.target[0].value,
      email: e.target[1].value,
      resume: e.target[2].value,
      portfolio: e.target[3]?.value || 'N/A',
      timestamp: new Date().toISOString()
    };
    
    // Save to Mock DB
    const entry = db.applications.add(data);
    console.log("New Application Received & Stored:", entry);
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="main-badge">
              <span className="dot" />
              JOIN THE RURAL REVOLUTION
            </div>

            <h1>Work on Problems that <span className="text-gradient">Actually Matter.</span></h1>
            
            <p className="hero-subtext">
              Dinasari is building the digital infrastructure for rural India. We're looking for the best minds to help us empower millions of farmers and workers.
            </p>

            <div className="hero-ctas">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => document.getElementById('open-roles').scrollIntoView({ behavior: 'smooth' })}
              >
                View Openings <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" style={{ background: '#f9fbf9', padding: '140px 0' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">THE CULTURE</span>
            <h2>Why Build with <span className="text-gradient">Dinasari?</span></h2>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((f, idx) => (
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
                  <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px' }}>{f.title}</h4>
                  <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.7' }}>{f.desc}</p>
                  <div className="accent-line" style={{ background: f.color }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="open-roles" className="roles-section section-padding">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="section-header-centered">
            <span className="section-label">Hiring Now</span>
            <h2>Current <span className="text-gradient">Openings</span></h2>
          </div>

          <div className="jobs-container">
            {jobs.map((job, idx) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="premium-job-card"
              >
                <div className="job-content">
                  <div className="job-info">
                    <h3>{job.title}</h3>
                    <div className="job-tags">
                      <span className="tag dept">{job.dept}</span>
                      <span className="tag loc"><MapPin size={14} /> {job.location}</span>
                      <span className="tag type"><Clock size={14} /> {job.type}</span>
                    </div>
                  </div>
                  <button 
                    className="btn btn-outline"
                    onClick={() => handleApply(job)}
                  >
                    Apply Now <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="resume-cta">
            <p>Don't see a perfect match? Send your resume to <strong>careers@dinasari.com</strong></p>
          </div>
        </div>
      </section>

      {/* Application Modal */}
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
                  <h2>Application Sent!</h2>
                  <p>Thanks for your interest in {selectedJob?.title}. Our team will get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div className="modal-header">
                    <span className="apply-badge">Applying for</span>
                    <h2>{selectedJob?.title}</h2>
                    <p>{selectedJob?.dept} • {selectedJob?.location}</p>
                  </div>

                  <form className="apply-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Full Name <span className="required-star">*</span></label>
                        <input type="text" placeholder="John Doe" required />
                      </div>
                      <div className="form-group">
                        <label>Email Address <span className="required-star">*</span></label>
                        <input type="email" placeholder="john@example.com" required />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>LinkedIn / Portfolio URL</label>
                      <input type="url" placeholder="https://linkedin.com/in/..." />
                    </div>

                    <div className="form-group">
                      <label>Resume / CV <span className="required-star">*</span></label>
                      <div className="file-upload">
                        <Paperclip size={20} />
                        <span>Upload PDF (Max 5MB)</span>
                        <input type="file" accept=".pdf" required />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Why Dinasari?</label>
                      <textarea placeholder="Tell us why you want to join the rural revolution..." rows="4"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">
                      Submit Application <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .careers-hero {
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

        .dot {
          height: 6px;
          width: 6px;
          background: var(--primary);
          border-radius: 50%;
        }

        .careers-hero h1 {
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

        .section-header-centered {
          text-align: center;
          margin-bottom: 80px;
        }

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

        .section-header-centered h2 {
          font-size: 56px;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
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

        .modern-feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
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

        .modern-feature-card:hover .accent-line {
          opacity: 1;
        }

        .jobs-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .premium-job-card {
          background: white;
          border-radius: 32px;
          padding: 40px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .premium-job-card:hover {
          border-color: var(--primary-light);
          box-shadow: 0 20px 40px rgba(0,0,0,0.04);
        }

        .job-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .job-info h3 { font-size: 28px; font-weight: 800; margin-bottom: 12px; }

        .job-tags {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .tag.dept { background: rgba(31, 138, 61, 0.08); color: var(--primary); }
        .tag.loc, .tag.type { background: #f3f4f6; color: var(--text-muted); }

        .resume-cta {
          margin-top: 80px;
          text-align: center;
          padding: 40px;
          border-radius: 32px;
          border: 2px dashed rgba(31, 138, 61, 0.2);
          color: var(--text-muted);
          font-size: 18px;
        }

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
          transition: all 0.3s ease;
        }

        .close-btn:hover { background: #e5e7eb; transform: rotate(90deg); }

        .modal-header { margin-bottom: 40px; }
        .apply-badge { color: var(--primary); font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; display: block; }
        .modal-header h2 { font-size: 32px; font-weight: 800; margin-bottom: 8px; }
        .modal-header p { color: var(--text-muted); }

        .apply-form { display: flex; flex-direction: column; gap: 24px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label { font-weight: 600; font-size: 14px; color: var(--text-main); }
        .required-star { color: #ff4d4d; margin-left: 2px; }
        .form-group input, .form-group textarea {
          padding: 14px 20px;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #f9fafb;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          outline: none;
          transition: all 0.3s ease;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary);
          background: white;
          box-shadow: 0 0 0 4px rgba(31, 138, 61, 0.1);
        }

        .file-upload {
          border: 2px dashed rgba(0,0,0,0.1);
          padding: 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          position: relative;
          color: var(--text-muted);
          font-size: 14px;
          font-weight: 500;
        }

        .file-upload input { position: absolute; opacity: 0; top: 0; left: 0; width: 100%; height: 100%; cursor: pointer; }

        .submit-btn { width: 100%; padding: 16px; justify-content: center; font-size: 16px; }

        .success-message { text-align: center; padding: 40px 0; }
        .success-icon { 
          width: 80px; height: 80px; background: rgba(31, 138, 61, 0.1); 
          color: var(--primary); border-radius: 50%; display: flex; 
          align-items: center; justify-content: center; margin: 0 auto 24px;
        }

        @media (max-width: 992px) {
          .careers-hero { padding-top: 140px; padding-bottom: 80px; }
          .careers-hero h1 { font-size: 56px; letter-spacing: -1.5px; }
          .careers-hero .hero-subtext { font-size: 18px; margin-bottom: 40px; }
          .benefits-grid { grid-template-columns: 1fr; gap: 24px; }
          .section-header-centered h2 { font-size: 36px; }
          .job-content { flex-direction: column; align-items: flex-start; gap: 24px; }
          .job-content button { width: 100%; }
          .premium-job-card { padding: 30px 20px; }
          .job-info h3 { font-size: 22px; }
        }

        @media (max-width: 640px) {
          .careers-hero h1 { font-size: 40px; letter-spacing: -1px; }
          .careers-hero .main-badge { padding: 8px 16px; font-size: 11px; }
          .modal-content { padding: 30px 20px; border-radius: 24px; width: 95%; }
          .modal-header h2 { font-size: 24px; }
          .apply-form { gap: 16px; }
          .form-group input, .form-group textarea { padding: 12px 16px; }
          .success-message h2 { font-size: 24px; }
          .form-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
};

export default CareersPage;
