import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, MessageCircle, Phone, Mail, Users, Shield, Zap, Globe } from 'lucide-react';

const HelpPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'farmer',
      q: "How do I book a worker for my farm?",
      a: "Open the Dinasari app, go to the 'Workers' section, select your farm location, and choose from verified workers available in your area."
    },
    {
      category: 'worker',
      q: "When do I get paid for my work?",
      a: "Payments are processed instantly after the farmer confirms completion. The money is deposited directly into your Dinasari digital wallet."
    },
    {
      category: 'machinery',
      q: "Can I list my own tractor for rent?",
      a: "Yes! Go to the 'List Machinery' section, upload your tractor details and photos, and set your daily rental price."
    },
    {
      category: 'general',
      q: "Is my data secure on Dinasari?",
      a: "We use bank-grade encryption to protect your personal information and transaction history. Your privacy is our top priority."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', icon: <Globe size={18} /> },
    { id: 'farmer', name: 'For Farmers', icon: <Users size={18} /> },
    { id: 'worker', name: 'For Workers', icon: <Zap size={18} /> },
    { id: 'machinery', name: 'Machinery', icon: <Shield size={18} /> }
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
              <p>+91 1800-DINASARI</p>
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
