import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, MessageCircle, Phone, Mail, Users, Shield, Zap, Globe } from 'lucide-react';

const HelpPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'farmer',
      q: "How to post a job?",
      a: "Select Farmer Mode, choose crop/work type, set workers needed, wage rate, and date, then tap Find Workers."
    },
    {
      category: 'farmer',
      q: "How does attendance work?",
      a: "Open active job, tap Check-in/out to show QR code, have workers scan it (or scan Leader's group QR)."
    },
    {
      category: 'farmer',
      q: "How do I settle payments?",
      a: "Settle payment directly via Cash or UPI and rate the workers."
    },
    {
      category: 'worker',
      q: "How do I find jobs?",
      a: "Set status to Online, review matching notifications, and tap Accept."
    },
    {
      category: 'worker',
      q: "How do I check-in/out?",
      a: "Scan the Farmer's QR code when arriving and leaving."
    },
    {
      category: 'worker',
      q: "Where can I see my earnings?",
      a: "View history in the Earnings tab."
    },
    {
      category: 'leader',
      q: "How do I manage a group?",
      a: "Create a group in the Group tab, add workers by phone number, and accept group job offers."
    },
    {
      category: 'leader',
      q: "How does group attendance work?",
      a: "Show Group QR to the Farmer for simultaneous scanning."
    },
    {
      category: 'general',
      q: "Is Dinasari free to use?",
      a: "Yes, Dinasari is currently free to download and use."
    },
    {
      category: 'general',
      q: "Can I switch roles in the app?",
      a: "Yes, go to Profile, slide the role toggle at the bottom, and switch."
    },
    {
      category: 'general',
      q: "What languages are supported?",
      a: "English, Hindi (हिन्दी), and Telugu (తెలుగు) are supported."
    },
    {
      category: 'farmer',
      q: "What if a worker doesn't show up?",
      a: "You can cancel the booking in the app and select 'Worker did not show up' to reopen the slots."
    },
    {
      category: 'worker',
      q: "What if the Farmer refuses to pay?",
      a: "Raise a dispute immediately in the job details page. Dinasari takes wage withholding seriously and will suspend violating accounts."
    },
    {
      category: 'worker',
      q: "Camera not working for QR scan?",
      a: "Check if camera permissions are granted. The Farmer can also check you in manually via your ID."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', icon: <Globe size={18} /> },
    { id: 'general', name: 'General FAQs', icon: <MessageCircle size={18} /> },
    { id: 'farmer', name: 'For Farmers', icon: <Users size={18} /> },
    { id: 'worker', name: 'For Workers', icon: <Zap size={18} /> },
    { id: 'leader', name: 'Group Leaders', icon: <Shield size={18} /> }
  ];

  return (
    <div className="help-page">
      {/* Hero Section */}
      <section className="help-hero">
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="main-badge">
              <span className="dot" />
              HELP CENTER
            </div>
            <h1>How can we <span className="text-gradient">help you?</span></h1>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '40px' }}>
              Welcome to Dinasari. We are here to support you at every stage of your farming and agricultural journey.
            </p>
            
            <div className="search-bar-container">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search for articles, guides..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section" style={{ background: 'var(--background)', padding: '60px 0' }}>
        <div className="container">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button 
                key={cat.id}
                className={`cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="faq-list">
            {faqs.filter(f => activeCategory === 'all' || f.category === activeCategory).map((faq, i) => (
              <motion.div 
                key={i}
                className="faq-item glass"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="contact-support section-padding" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div className="section-header-centered">
            <h2>Still need <span className="text-gradient">assistance?</span></h2>
            <p>Our support team is available 24/7 to help you with any issues.</p>
          </div>
          
          <div className="support-grid">
            <div className="support-card glass">
              <Mail size={32} color="var(--primary)" />
              <h4>Email Support</h4>
              <p>support@dinasari.com</p>
            </div>
            <div className="support-card glass">
              <Phone size={32} color="var(--primary)" />
              <h4>Phone Support</h4>
              <p>+91 9014369419</p>
            </div>
            <div className="support-card glass">
              <MessageCircle size={32} color="var(--primary)" />
              <h4>WhatsApp</h4>
              <p>Chat with us live</p>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .help-page { background: white; font-family: 'Outfit', sans-serif; }

        .help-hero {
          padding-top: 180px;
          padding-bottom: 80px;
          text-align: center;
          background: white;
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
          margin-bottom: 32px;
          letter-spacing: 1px;
        }

        .dot { height: 6px; width: 6px; background: var(--primary); border-radius: 50%; }

        .help-hero h1 {
          font-size: 72px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -2px;
          color: var(--text-main);
          margin-bottom: 40px;
        }

        .search-bar-container {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .search-icon {
          position: absolute;
          left: 24px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-bar-container input {
          width: 100%;
          padding: 20px 20px 20px 60px;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.08);
          background: #f8fafc;
          font-size: 16px;
          font-family: 'Outfit', sans-serif;
          outline: none;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          transition: all 0.3s;
        }

        .search-bar-container input:focus {
          border-color: var(--primary);
          background: white;
          box-shadow: 0 15px 40px rgba(31, 138, 61, 0.08);
        }

        .category-tabs {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cat-tab {
          padding: 12px 24px;
          border-radius: 50px;
          background: white;
          border: 1px solid rgba(0,0,0,0.05);
          font-weight: 600;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .cat-tab.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .faq-list { display: flex; flex-direction: column; gap: 20px; }
        .faq-item { padding: 32px; border-radius: 24px; text-align: left; }
        .faq-item h3 { font-size: 20px; font-weight: 800; margin-bottom: 12px; color: var(--text-main); }
        .faq-item p { color: var(--text-muted); line-height: 1.6; }

        .support-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 60px; }
        .support-card { padding: 40px; text-align: center; border-radius: 32px; }
        .support-card h4 { font-size: 18px; font-weight: 800; margin: 16px 0 8px; }
        .support-card p { color: var(--text-muted); font-size: 15px; }

        @media (max-width: 992px) {
          .help-hero h1 { font-size: 48px; }
          .support-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
};

export default HelpPage;
