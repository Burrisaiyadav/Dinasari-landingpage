import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Pause, Play } from 'lucide-react';

/* ── Animated counter ─────────────────────────────────── */
const CountUp = ({ target, suffix = '' }) => {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame;
    const duration = 1800;
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setVal(Math.floor(eased * target));
      if (t < 1) frame = requestAnimationFrame(animate);
      else setVal(target);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

const stats = [
  { label: 'Active Farmers',  target: 50000,  suffix: '+' },
  { label: 'Jobs Completed',  target: 200000, suffix: '+' },
  { label: 'Villages Reached', target: 1200,  suffix: '+' },
  { label: 'States Covered',  target: 8,      suffix: '+' },
];

/* ── Hero ─────────────────────────────────────────────── */
const Hero = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <>
      {/* ════════════════════════════════════════
          HERO — full-screen video / image
      ════════════════════════════════════════ */}
      <section
        id="home"
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: '600px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* Background video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src="/farm-video.mp4" type="video/mp4" />
        </video>

        {/* Fallback static image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: 'url(/tractor-bg-v2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Gradient overlays */}
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: 'linear-gradient(to top, rgba(5,20,10,0.85) 0%, rgba(5,20,10,0.35) 50%, rgba(5,20,10,0.08) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: 'linear-gradient(to right, rgba(5,20,10,0.5) 0%, transparent 55%)',
          }}
        />

        {/* ── Bottom content bar ── */}
        <div
          className="container hero-bottom"
          style={{ position: 'relative', zIndex: 2, paddingBottom: '52px', paddingTop: '40px' }}
        >
          <div className="hero-grid">

            {/* Left — headline */}
            <motion.div
              className="hero-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h1>
                Connecting{' '}
                <span style={{ color: 'var(--primary)' }}>Rural India's</span>
                <br />
                Workforce &amp; Farms
              </h1>
            </motion.div>

            {/* Right — description + CTAs */}
            <motion.div
              className="hero-right"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            >
              <p className="hero-desc">
                Dinasari connects farmers, agricultural workers, and machinery
                in one seamless, high-trust digital ecosystem for rural India.
                No complexity. No middlemen. Just growth.
              </p>

              <div className="hero-cta-row">
                <button
                  className="hero-btn-primary"
                  onClick={() => {
                    const el = document.getElementById('download');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  Explore the App
                  <ChevronRight size={15} strokeWidth={2.5} />
                </button>

                <button
                  className="hero-btn-secondary"
                  onClick={() => {
                    const el = document.getElementById('empowerment');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  Learn More
                  <ChevronRight size={15} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Video play/pause */}
        <button
          onClick={togglePlayPause}
          aria-label={isPaused ? 'Play video' : 'Pause video'}
          style={{
            position: 'absolute', bottom: '24px', right: '24px', zIndex: 3,
            width: '36px', height: '36px', borderRadius: '4px',
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'white', transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.28)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        >
          {isPaused ? <Play size={14} fill="white" /> : <Pause size={14} fill="white" />}
        </button>
      </section>

      {/* ════════════════════════════════════════
          STATS BAR — flush below hero
      ════════════════════════════════════════ */}
      <motion.div
        className="hero-stats-bar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
      >
        <div className="container hero-stats-inner">
          {stats.map((s, i) => (
            <React.Fragment key={s.label}>
              <div className="hero-stat-item">
                <div className="hero-stat-value">
                  <CountUp target={s.target} suffix={s.suffix} />
                </div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
              {i < stats.length - 1 && <div className="hero-stat-divider" />}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* ── Styles ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .app { padding-top: 0 !important; }

        /* ── Hero grid ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 60px;
        }
        .hero-headline h1 {
          font-size: clamp(36px, 4.8vw, 64px);
          font-weight: 900;
          color: white;
          line-height: 1.05;
          letter-spacing: -2px;
          margin: 0;
        }
        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .hero-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.80);
          line-height: 1.65;
          margin: 0;
          max-width: 420px;
        }
        .hero-cta-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        /* Primary CTA — Dinasari Yellow, pops on dark video */
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 24px;
          border-radius: 50px;
          background: #F4B400;
          color: #0a1f0a;
          font-size: 13.5px;
          font-weight: 800;
          border: none;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 4px 20px rgba(244,180,0,0.45);
          white-space: nowrap;
          letter-spacing: 0.1px;
        }
        .hero-btn-primary:hover {
          background: #e0a600;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(244,180,0,0.55);
        }

        /* Secondary CTA — dark semi-transparent pill */
        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 22px;
          border-radius: 50px;
          background: rgba(10,26,14,0.55);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: rgba(255,255,255,0.92);
          font-size: 13.5px;
          font-weight: 600;
          border: 1.5px solid rgba(255,255,255,0.22);
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .hero-btn-secondary:hover {
          background: rgba(10,26,14,0.75);
          border-color: rgba(255,255,255,0.45);
          transform: translateY(-2px);
        }

        /* ── Stats bar ── */
        .hero-stats-bar {
          background: #ffffff;
          border-top: 3px solid #F4B400;
          box-shadow: 0 8px 40px rgba(0,0,0,0.08);
        }
        .hero-stats-inner {
          display: flex;
          align-items: stretch;
          padding: 0;
        }
        .hero-stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 28px 24px;
          text-align: center;
          position: relative;
          transition: all 0.25s ease;
        }
        .hero-stat-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 40px;
          height: 3px;
          background: var(--primary);
          border-radius: 2px;
          transition: transform 0.3s ease;
        }
        .hero-stat-item:hover::after {
          transform: translateX(-50%) scaleX(1);
        }
        .hero-stat-item:hover {
          background: rgba(31,138,61,0.03);
        }
        .hero-stat-value {
          font-size: 34px;
          font-weight: 900;
          color: var(--primary);
          line-height: 1;
          letter-spacing: -1.5px;
          font-family: 'Outfit', sans-serif;
        }
        .hero-stat-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .hero-stat-divider {
          width: 1px;
          background: rgba(0,0,0,0.07);
          align-self: stretch;
          margin: 16px 0;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 20px; }
          .hero-headline h1 { letter-spacing: -1px; }
          .hero-desc { max-width: 100%; }
          #home { min-height: 100svh; }
          .hero-stats-inner { flex-wrap: wrap; }
          .hero-stat-item { flex: 1 1 calc(50% - 1px); }
          .hero-stat-divider { display: none; }
        }

        @media (max-width: 576px) {
          .hero-bottom { padding-bottom: 36px !important; }
          .hero-cta-row { flex-direction: column; align-items: flex-start; }
          .hero-btn-primary, .hero-btn-secondary { width: 100%; justify-content: center; }
          .hero-stat-item { flex: 1 1 50%; padding: 20px 12px; }
          .hero-stat-value { font-size: 26px; }
        }
      `}} />
    </>
  );
};

export default Hero;
