import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const InvestorSection = () => (
  <section id="investors" className="inv-banner">
    <div className="container inv-banner-inner">

      {/* Left */}
      <motion.div
        className="inv-banner-left"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inv-eyebrow">
          <TrendingUp size={13} /> Institutional Opportunity
        </span>
        <h2 className="inv-banner-heading">
          Powering the Future of Rural India —<br className="inv-br" /> Partner with Dinasari.
        </h2>
      </motion.div>

      {/* Right */}
      <motion.div
        className="inv-banner-right"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="inv-banner-desc">
          We're building the digital backbone of India's rural economy — scaling labour, machinery, and commerce for 800M+ underserved citizens.
        </p>
        <Link to="/investors" className="inv-banner-btn">
          Know More <ArrowUpRight size={16} />
        </Link>
      </motion.div>

    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .inv-banner {
        background: #1F8A3D;
        padding: 52px 0;
        position: relative;
        overflow: hidden;
      }
      .inv-banner::before {
        content: '';
        position: absolute;
        right: -100px; top: -100px;
        width: 350px; height: 350px;
        background: rgba(255,255,255,0.04);
        border-radius: 50%;
        pointer-events: none;
      }
      .inv-banner::after {
        content: '';
        position: absolute;
        left: 40%; bottom: -60px;
        width: 200px; height: 200px;
        background: rgba(0,0,0,0.06);
        border-radius: 50%;
        pointer-events: none;
      }

      .inv-banner-inner {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: center;
        position: relative;
        z-index: 1;
      }

      .inv-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: rgba(255,255,255,0.75);
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 14px;
      }

      .inv-banner-heading {
        font-size: clamp(1.5rem, 2.4vw, 2rem);
        font-weight: 900;
        color: #ffffff;
        line-height: 1.25;
        letter-spacing: -0.5px;
        margin: 0;
      }
      .inv-br { display: none; }
      @media (min-width: 900px) { .inv-br { display: block; } }

      .inv-banner-right {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
      .inv-banner-desc {
        font-size: 15px;
        color: rgba(255,255,255,0.82);
        line-height: 1.7;
        margin: 0;
        max-width: 440px;
      }
      .inv-banner-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #ffffff;
        color: #1F8A3D;
        padding: 11px 24px;
        border-radius: 10px;
        font-size: 14.5px;
        font-weight: 800;
        text-decoration: none;
        transition: all 0.25s ease;
        align-self: flex-start;
        box-shadow: 0 4px 14px rgba(0,0,0,0.12);
      }
      .inv-banner-btn:hover {
        background: #f0faf4;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.16);
      }

      @media (max-width: 900px) {
        .inv-banner-inner { grid-template-columns: 1fr; gap: 24px; }
        .inv-banner-right { flex-direction: row; align-items: center; flex-wrap: wrap; }
        .inv-banner-desc { max-width: 100%; }
      }
      @media (max-width: 480px) {
        .inv-banner { padding: 40px 0; }
        .inv-banner-right { flex-direction: column; align-items: flex-start; }
      }
    `}} />
  </section>
);

export default InvestorSection;
