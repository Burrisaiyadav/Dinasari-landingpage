import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';

const TrustImpact = () => {
  const [active, setActive] = useState(0);

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

  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(i => (i + 1) % testimonials.length);

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

        {/* ── Testimonial Spotlight ── */}
        <div className="trust-spotlight-wrap">

          {/* Big decorative quote */}
          <div className="trust-deco-quote" aria-hidden="true">"</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="trust-spotlight-card"
            >
              {/* Stars */}
              <div className="trust-stars">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--yellow)" color="var(--yellow)" />
                ))}
              </div>

              {/* Quote text */}
              <p className="trust-quote-text">
                "{testimonials[active].text}"
              </p>

              {/* Author chip */}
              <div className="trust-author-row">
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  className="trust-avatar"
                />
                <div className="trust-author-info">
                  <span className="trust-author-name">{testimonials[active].name}</span>
                  <span className="trust-author-role">
                    {testimonials[active].role} · {testimonials[active].location}
                  </span>
                </div>
                <span className="trust-user-tag">{testimonials[active].tag}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="trust-nav">
            <button onClick={prev} className="trust-nav-btn" aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="trust-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`trust-dot ${i === active ? 'trust-dot-active' : ''}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={next} className="trust-nav-btn" aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ── Impact Pillars — text only, no numbers ── */}
        <motion.div
          className="trust-pillars"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: 'Villages Reached',    desc: 'Spreading across districts of Andhra Pradesh' },
            { label: 'Jobs Connected',       desc: 'Seasonal and daily agricultural placements'   },
            { label: 'Payments Processed',   desc: 'Instant digital wages with zero middlemen'    },
            { label: 'Machinery Bookings',   desc: 'On-demand access to farm equipment statewide' },
          ].map((p, i) => (
            <div key={i} className="trust-pillar">
              <div className="trust-pillar-dot" />
              <div>
                <div className="trust-pillar-label">{p.label}</div>
                <div className="trust-pillar-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>

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

        /* ─── Spotlight ─── */
        .trust-spotlight-wrap {
          position: relative;
          max-width: 760px;
          margin: 0 auto 72px;
        }
        .trust-deco-quote {
          position: absolute;
          top: -40px;
          left: -24px;
          font-size: 18rem;
          font-weight: 900;
          color: rgba(31,138,61,0.06);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
        .trust-spotlight-card {
          background: #ffffff;
          border-radius: 32px;
          padding: 56px 60px;
          border: 1px solid rgba(31,138,61,0.1);
          box-shadow: 0 16px 48px rgba(31,138,61,0.07);
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .trust-stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 28px;
        }
        .trust-quote-text {
          font-size: clamp(1.1rem, 2vw, 1.45rem);
          font-weight: 500;
          color: #1A1C19;
          line-height: 1.65;
          font-style: italic;
          margin-bottom: 36px;
        }
        .trust-author-row {
          display: flex;
          align-items: center;
          gap: 14px;
          justify-content: center;
        }
        .trust-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(31,138,61,0.15);
        }
        .trust-author-info {
          text-align: left;
        }
        .trust-author-name {
          display: block;
          font-size: 15px;
          font-weight: 800;
          color: #1A1C19;
        }
        .trust-author-role {
          display: block;
          font-size: 13px;
          color: #5C6259;
          font-weight: 500;
        }
        .trust-user-tag {
          margin-left: auto;
          background: rgba(31,138,61,0.1);
          color: #1F8A3D;
          font-size: 11.5px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* ─── Navigation ─── */
        .trust-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 32px;
        }
        .trust-nav-btn {
          width: 42px; height: 42px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid rgba(31,138,61,0.2);
          color: #1F8A3D;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.22s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .trust-nav-btn:hover {
          background: #1F8A3D;
          color: #fff;
          border-color: #1F8A3D;
          transform: scale(1.08);
        }
        .trust-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .trust-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(31,138,61,0.2);
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }
        .trust-dot-active {
          background: #1F8A3D;
          width: 24px;
          border-radius: 4px;
        }

        /* ─── Pillars ─── */
        .trust-pillars {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding-top: 48px;
          border-top: 1px solid rgba(31,138,61,0.1);
        }
        .trust-pillar {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .trust-pillar-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #1F8A3D;
          margin-top: 6px;
          flex-shrink: 0;
        }
        .trust-pillar-label {
          font-size: 14.5px;
          font-weight: 800;
          color: #1A1C19;
          margin-bottom: 4px;
        }
        .trust-pillar-desc {
          font-size: 13px;
          color: #5C6259;
          line-height: 1.55;
        }

        /* ─── Responsive ─── */
        @media (max-width: 900px) {
          .trust-pillars { grid-template-columns: 1fr 1fr; }
          .trust-spotlight-card { padding: 40px 32px; }
          .trust-deco-quote { font-size: 10rem; }
        }
        @media (max-width: 560px) {
          .trust-pillars { grid-template-columns: 1fr; }
          .trust-spotlight-card { padding: 32px 24px; }
          .trust-section-header { margin-bottom: 40px; }
          .trust-user-tag { display: none; }
        }
      `}} />
    </section>
  );
};

export default TrustImpact;
