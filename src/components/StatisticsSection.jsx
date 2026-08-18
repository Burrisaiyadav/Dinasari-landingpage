import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import statCorn from '../assets/stats/stat-corn.png';
import statSeeds from '../assets/stats/stat-seeds.png';
import statHarvest from '../assets/stats/stat-harvest.png';

/* ─── Animated counter hook ─── */
function useCountUp(target, duration = 1800, startOnView = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  const animate = useCallback(() => {
    const start = performance.now();
    const end = parseInt(target, 10);

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    if (!startOnView) { animate(); return; }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate, hasStarted, startOnView]);

  return { count, ref };
}

/* ─── Individual animated stat card ─── */
function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.value, 1600);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="stat-card"
    >
      <div className="stat-card-content">
        <div className="stat-value-wrap">
          <span className="stat-number">{count}</span>
          <span className="stat-unit">{stat.unit}</span>
        </div>
        <h3 className="stat-title">{stat.title}</h3>
        <p className="stat-desc">{stat.description}</p>
      </div>

      <div className="stat-image-wrap">
        <img
          src={stat.image}
          alt={stat.alt}
          className="stat-card-img"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

const StatisticsSection = ({
  title = "STATISTICS",
  subtitle = "Measurable growth and trust delivered to farms across the nation.",
  badge = "Proven Impact"
}) => {
  const statsData = [
    {
      value: "84",
      unit: "%",
      title: "Efficiency",
      description: "Optimized labor deployment and reduced operational downtime across farm cycles.",
      image: statCorn,
      alt: "Corn and green husk representing farm efficiency"
    },
    {
      value: "94",
      unit: "%",
      title: "Farm Growth",
      description: "Accelerated crop output and higher seasonal yield for participating farmers.",
      image: statSeeds,
      alt: "Golden grain seeds representing farm growth"
    },
    {
      value: "99",
      unit: "%",
      title: "Organic Farm",
      description: "Sustainable cultivation methods and verified transparent produce standards.",
      image: statHarvest,
      alt: "Fresh harvest vegetables and olive oil representing organic farming"
    }
  ];

  return (
    <section className="statistics-section" id="statistics">
      <div className="container">
        {/* Header */}
        <div className="stats-header">
          {badge && <span className="stats-badge">{badge}</span>}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stats-giant-title"
          >
            {title}
          </motion.h2>
          {subtitle && <p className="stats-subtitle">{subtitle}</p>}
        </div>

        {/* Cards */}
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>


      <style dangerouslySetInnerHTML={{ __html: `
        .statistics-section {
          padding: 40px 0 100px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .stats-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .stats-badge {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(0, 101, 47, 0.08);
          border: 1px solid rgba(0, 101, 47, 0.2);
          border-radius: 50px;
          color: #00652f;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .stats-giant-title {
          font-size: clamp(3.2rem, 9vw, 6.8rem);
          font-weight: 900;
          color: #00652f;
          letter-spacing: clamp(2px, 0.8vw, 8px);
          line-height: 1;
          margin: 0 0 16px 0;
          text-transform: uppercase;
          font-family: inherit;
        }

        .stats-subtitle {
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          color: #5a6872;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stat-card {
          background: #faf8eb;
          border: 1.5px solid #eae5d4;
          border-radius: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.02);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.35s ease;
          min-height: 420px;
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(0, 50, 20, 0.08);
          border-color: #d8d0ba;
        }

        .stat-card-content {
          padding: 36px 32px 16px;
          position: relative;
          z-index: 2;
        }

        .stat-value-wrap {
          display: flex;
          align-items: baseline;
          margin-bottom: 6px;
        }

        .stat-number {
          font-size: clamp(3.2rem, 5.5vw, 4.4rem);
          font-weight: 900;
          color: #00652f;
          line-height: 1;
          letter-spacing: -2px;
        }

        .stat-unit {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 800;
          color: #00652f;
          margin-left: 2px;
          line-height: 1;
        }

        .stat-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #2b332b;
          margin: 6px 0 10px;
          letter-spacing: -0.3px;
        }

        .stat-desc {
          font-size: 0.95rem;
          color: #636e65;
          line-height: 1.55;
          margin: 0;
          max-width: 90%;
        }

        .stat-image-wrap {
          width: 100%;
          height: 190px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          margin-top: auto;
          overflow: hidden;
          background: #faf8eb;
          position: relative;
        }

        .stat-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          transition: transform 0.5s ease;
          display: block;
        }

        .stat-card:hover .stat-card-img {
          transform: scale(1.04);
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .stat-card-content {
            padding: 28px 24px 12px;
          }
          .stat-card {
            min-height: 380px;
          }
          .stat-image-wrap {
            height: 160px;
          }
        }

        @media (max-width: 868px) {
          .statistics-section {
            padding: 70px 0;
          }
          .stats-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            gap: 28px;
          }
          .stat-card {
            min-height: auto;
          }
          .stat-image-wrap {
            height: 180px;
          }
        }

        @media (max-width: 480px) {
          .statistics-section {
            padding: 50px 0;
          }
          .stats-giant-title {
            letter-spacing: 2px;
          }
          .stat-card-content {
            padding: 24px 20px 10px;
          }
          .stat-image-wrap {
            height: 160px;
          }
        }
      `}} />
    </section>
  );
};

export default StatisticsSection;
