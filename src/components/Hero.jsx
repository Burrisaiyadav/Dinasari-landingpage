import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Pause, Play, ChevronDown } from 'lucide-react';

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
  { label: 'Active Farmers',   target: 500,  suffix: '+' },
  { label: 'Jobs Completed',   target: 1000, suffix: '+' },
  { label: 'Villages Reached', target: 10,   suffix: '+' },
  { label: 'States Covered',   target: 1,    suffix: '' },
];

/* ── Floating Particle ─────────────────────────────────── */
const Particle = ({ style }) => (
  <motion.div
    className="hero-particle"
    style={style}
    animate={{
      y: [0, -30, 0],
      opacity: [0, 0.6, 0],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: style['--dur'] || 4,
      repeat: Infinity,
      delay: style['--delay'] || 0,
      ease: 'easeInOut',
    }}
  />
);

/* ── Typewriter tag ────────────────────────────────────── */
const tags = ['Farmers', 'Workers', 'Communities', 'Rural India'];
const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = tags[index];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % tags.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="typewriter-word">
      {displayed}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

/* ── Hero ─────────────────────────────────────────────── */
const Hero = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  /* Particle seed — generated once per mount */
  const [particles] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      left:   `${5 + Math.random() * 90}%`,
      top:    `${10 + Math.random() * 80}%`,
      width:  `${3 + Math.random() * 5}px`,
      height: `${3 + Math.random() * 5}px`,
      '--delay': i * 0.35,
      '--dur':   3 + Math.random() * 4,
    }))
  );

  /* Stagger variants */
  const containerVariants = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.18 } },
  };
  const itemVariants = {
    hidden:   { opacity: 0, y: 28 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
  };

  useEffect(() => {
    const handleToggleMute = (e) => {
      if (videoRef.current) videoRef.current.muted = e.detail.muted;
    };
    window.addEventListener('toggle-mute', handleToggleMute);
    return () => window.removeEventListener('toggle-mute', handleToggleMute);
  }, []);

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
        {/* ── Ken Burns / quality-boosted video ─────────── */}
        <div className="hero-video-wrap">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source src="/web%20video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ── Animated gradient overlays ─────────────── */}
        <div className="hero-overlay hero-overlay-base" />
        <div className="hero-overlay hero-overlay-sweep" />
        <div className="hero-overlay hero-overlay-left" />
        <div className="hero-overlay hero-shimmer" />

        {/* ── Floating particles ─────────────────────── */}
        {particles.map((p, i) => <Particle key={i} style={p} />)}

        {/* ── Bottom content bar ── */}
        <div
          className="container hero-bottom"
          style={{ position: 'relative', zIndex: 2, paddingBottom: '52px', paddingTop: '40px' }}
        >
          <div className="hero-grid">

            {/* Left — headline */}
            <motion.div
              className="hero-headline"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={itemVariants}>
                Connecting{' '}
                <span className="hero-highlight">Rural India's</span>
                <br />
                <Typewriter />
                <br />
                &amp; Farms
              </motion.h1>

              <motion.div variants={itemVariants} className="hero-glow-line" />
            </motion.div>

            {/* Right — description + CTAs */}
            <motion.div
              className="hero-right"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={itemVariants} className="hero-desc">
                Dinasari connects farmers, agricultural workers, and machinery
                in one seamless, high-trust digital ecosystem for rural India.
                No complexity. No middlemen. Just growth.
              </motion.p>

              <motion.div variants={itemVariants} className="hero-cta-row">
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
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ChevronDown size={22} color="rgba(255,255,255,0.55)" />
          </motion.div>
        </motion.div>

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

        /* ── Video quality boost ─────────────────────── */
        .hero-video-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
          animation: kenBurns 28s ease-in-out infinite alternate;
          transform-origin: center center;
          will-change: transform;
        }
        @keyframes kenBurns {
          0%   { transform: scale(1.0) translate(0%, 0%); }
          25%  { transform: scale(1.06) translate(-1%, 0.5%); }
          50%  { transform: scale(1.08) translate(1%, -0.5%); }
          75%  { transform: scale(1.05) translate(-0.5%, 1%); }
          100% { transform: scale(1.04) translate(0.5%, -1%); }
        }
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.22) saturate(1.40) brightness(1.08) drop-shadow(0 0 0px transparent);
          image-rendering: high-quality;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        /* ── Animated gradient overlays ─────────────── */
        .hero-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero-overlay-base {
          z-index: 1;
          background: linear-gradient(
            to top,
            rgba(5,20,10,0.92) 0%,
            rgba(5,20,10,0.45) 45%,
            rgba(5,20,10,0.10) 100%
          );
        }
        .hero-overlay-sweep {
          z-index: 1;
          background: linear-gradient(
            125deg,
            rgba(31,138,61,0.18) 0%,
            transparent 40%,
            rgba(5,20,10,0.25) 70%,
            rgba(31,138,61,0.12) 100%
          );
          animation: sweepGradient 10s ease-in-out infinite alternate;
        }
        @keyframes sweepGradient {
          0%   { opacity: 0.7; }
          50%  { opacity: 1; }
          100% { opacity: 0.7; }
        }
        .hero-overlay-left {
          z-index: 1;
          background: linear-gradient(to right, rgba(5,20,10,0.65) 0%, transparent 60%);
        }
        .hero-shimmer {
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          opacity: 0.3;
          animation: shimmerDrift 8s linear infinite;
        }
        @keyframes shimmerDrift {
          from { background-position: 0 0; }
          to   { background-position: 200px 200px; }
        }

        /* ── Floating particles ──────────────────────── */
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(244,180,0,0.7) 0%, rgba(31,138,61,0.5) 100%);
          z-index: 2;
          pointer-events: none;
          will-change: transform, opacity;
          filter: blur(1px);
        }

        /* ── Animated hero highlight ─────────────────────── */
        .hero-highlight {
          color: var(--primary);
          position: relative;
          display: inline-block;
        }
        .hero-highlight::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -4px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--primary), transparent);
          animation: lineGrow 3s ease-in-out infinite alternate;
          transform-origin: left center;
        }
        @keyframes lineGrow {
          from { transform: scaleX(0.5); opacity: 0.5; }
          to   { transform: scaleX(1);   opacity: 1; }
        }

        /* ── Typewriter ──────────────────────────────────── */
        .typewriter-word {
          color: #F4B400;
          min-width: 160px;
          display: inline-block;
        }
        .typewriter-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 0.75s step-end infinite;
          color: #F4B400;
        }
        @keyframes blink { 50% { opacity: 0; } }

        /* ── Glow line ───────────────────────────────────── */
        .hero-glow-line {
          width: 80px;
          height: 3px;
          border-radius: 3px;
          background: linear-gradient(90deg, #F4B400, var(--primary));
          margin-top: 24px;
          animation: glowPulse 2.5s ease-in-out infinite alternate;
        }
        @keyframes glowPulse {
          from { box-shadow: 0 0 8px rgba(244,180,0,0.4); opacity: 0.8; }
          to   { box-shadow: 0 0 22px rgba(244,180,0,0.9); opacity: 1; }
        }

        /* ── Scroll indicator ────────────────────────────── */
        .hero-scroll-indicator {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

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
          text-shadow: 0 2px 24px rgba(0,0,0,0.5);
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
