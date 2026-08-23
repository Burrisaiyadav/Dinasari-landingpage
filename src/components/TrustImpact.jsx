import React from 'react';
import { motion } from 'framer-motion';
import { Star, Leaf } from 'lucide-react';

const TrustImpact = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Rice Farmer",
      location: "Nandyal, AP",
      text: "Before Dinasari, I had to travel 20km just to find workers. Now they are at my farm in 30 minutes. It saved my harvest this year.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=sunita",
      tag: "Farmer"
    },
    {
      name: "Sunita Devi",
      role: "Agricultural Worker",
      location: "Patna, Bihar",
      text: "I used to wait for weeks for work. Now I get job alerts on my phone every day. The payments are direct and arrive on time without fail.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=rajesh",
      tag: "Worker"
    },
    {
      name: "Venkat Reddy",
      role: "Tractor Owner",
      location: "Kurnool, AP",
      text: "My tractor now earns revenue all season long. Dinasari connects me to farmers who need machinery instantly — zero idle time.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=venkat",
      tag: "Machinery"
    }
  ];

  // We'll duplicate the array a few times to ensure it fills ultra-wide screens
  const displayItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="trust-impact" className="trust-section">
      <div className="container">
        {/* ── Section Header ── */}
        <motion.div
          className="trust-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="trust-eyebrow">
            <Leaf size={13} /> Real World Results
          </span>
          <h2 className="trust-heading">
            Impact That <span className="trust-heading-green">Changes Lives.</span>
          </h2>
          <p className="trust-subheading">
            Thousands of farmers, workers, and machinery owners across rural India trust Dinasari every day.
          </p>
        </motion.div>
      </div>

      {/* ── Marquee Scrolling Testimonials ── */}
      <div className="marquee-container">
        {/* First track */}
        <div className="marquee-content">
          {displayItems.map((item, index) => (
            <div key={`a-${index}`} className="testimonial-box">
              <div className="trust-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--yellow)" color="var(--yellow)" />
                ))}
              </div>
              <p className="trust-quote-text">"{item.text}"</p>
              <div className="trust-author-row">
                <img src={item.avatar} alt={item.name} className="trust-avatar" />
                <div className="trust-author-info">
                  <span className="trust-author-name">{item.name}</span>
                  <span className="trust-author-role">
                    {item.role} · {item.location}
                  </span>
                </div>
                <span className="trust-user-tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second track for seamless loop */}
        <div className="marquee-content">
          {displayItems.map((item, index) => (
            <div key={`b-${index}`} className="testimonial-box">
              <div className="trust-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--yellow)" color="var(--yellow)" />
                ))}
              </div>
              <p className="trust-quote-text">"{item.text}"</p>
              <div className="trust-author-row">
                <img src={item.avatar} alt={item.name} className="trust-avatar" />
                <div className="trust-author-info">
                  <span className="trust-author-name">{item.name}</span>
                  <span className="trust-author-role">
                    {item.role} · {item.location}
                  </span>
                </div>
                <span className="trust-user-tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ─── Section ─── */
        .trust-section {
          padding: 100px 0;
          background: #F4FAF6;
          overflow: hidden;
        }

        /* ─── Header ─── */
        .trust-section-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .trust-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(31,138,61,0.08);
          border: 1.5px solid rgba(31,138,61,0.18);
          color: #1F8A3D;
          padding: 5px 14px;
          border-radius: 50px;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.4px;
          margin-bottom: 18px;
        }
        .trust-heading {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 900;
          color: #1A1C19;
          letter-spacing: -1.5px;
          line-height: 1.12;
          margin-bottom: 16px;
        }
        .trust-heading-green { color: #1F8A3D; }
        .trust-subheading {
          font-size: 16.5px;
          color: #5C6259;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ─── Marquee ─── */
        .marquee-container {
          display: flex;
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 20px 0;
        }
        
        .marquee-content {
          display: flex;
          gap: 24px;
          padding-right: 24px;
          animation: marquee 40s linear infinite;
        }
        
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* ─── Box Shaped Card ─── */
        .testimonial-box {
          background: #ffffff;
          border-radius: 12px;
          padding: 32px;
          width: 380px;
          flex-shrink: 0;
          border: 1px solid rgba(31,138,61,0.15);
          box-shadow: 0 4px 20px rgba(31,138,61,0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .testimonial-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(31,138,61,0.12);
        }
        
        .trust-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
        }
        .trust-quote-text {
          font-size: 15px;
          font-weight: 500;
          color: #1A1C19;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 28px;
          flex-grow: 1;
          white-space: normal;
        }
        
        .trust-author-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
        }
        .trust-avatar {
          width: 46px;
          height: 46px;
          border-radius: 10px; /* Boxier avatar */
          object-fit: cover;
          border: 2px solid rgba(31,138,61,0.15);
        }
        .trust-author-info {
          text-align: left;
        }
        .trust-author-name {
          display: block;
          font-size: 14px;
          font-weight: 800;
          color: #1A1C19;
        }
        .trust-author-role {
          display: block;
          font-size: 12px;
          color: #5C6259;
          font-weight: 500;
        }
        .trust-user-tag {
          margin-left: auto;
          background: rgba(31,138,61,0.1);
          color: #1F8A3D;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* ─── Responsive ─── */
        @media (max-width: 560px) {
          .testimonial-box {
            width: 320px;
            padding: 24px;
          }
          .trust-user-tag { display: none; }
        }
      `}} />
    </section>
  );
};

export default TrustImpact;
