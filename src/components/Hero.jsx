import React, { useEffect, useState, useRef } from 'react';
import { UserCheck, Briefcase, Play, ChevronRight } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const CountUp = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  // Clean value (remove commas and plus signs)
  const numericValue = parseInt(value.replace(/,/g, '').replace(/\+/g, ''));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start).toLocaleString() + "+");
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, value]);

  return <span ref={ref}>{displayValue}</span>;
};

const Hero = () => {
  return (
    <section id="home" style={{ 
      paddingTop: '200px', 
      paddingBottom: '140px',
      position: 'relative',
      background: 'white',
      textAlign: 'center'
    }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '10px 24px', 
            background: 'rgba(31, 138, 61, 0.08)', 
            borderRadius: '50px',
            color: 'var(--primary)',
            fontWeight: '700',
            fontSize: '13px',
            marginBottom: '40px',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            <span style={{ display: 'flex', height: '6px', width: '6px', background: 'var(--primary)', borderRadius: '50%' }} />
            Empowering the Rural Workforce
          </div>

          <h1 style={{ 
            fontSize: '84px', 
            fontWeight: '900', 
            marginBottom: '32px',
            color: 'var(--text-main)',
            lineHeight: '1',
            letterSpacing: '-3px'
          }}>
            The Operating System for <span className="text-gradient">Every Farm.</span>
          </h1>

          <p style={{ 
            fontSize: '24px', 
            color: 'var(--text-muted)', 
            marginBottom: '56px',
            maxWidth: '740px',
            marginRight: 'auto',
            marginLeft: 'auto',
            lineHeight: '1.5',
            fontWeight: '400'
          }}>
            Dinasari connects farmers, workers, and machinery in one seamless, high-trust ecosystem. No complexity. No middlemen. Just growth.
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '24px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            marginBottom: '80px'
          }}>
            <button className="playstore-button-hero">
              <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.5 7.3c-4.5 4.5-7 11.4-7 20.3v456.8c0 8.9 2.5 15.8 7 20.3l1.1 1.1L259.1 281.3v-10.6L33.6 6.2l-1.1 1.1z" fill="#ea4335"/>
                <path d="M366.4 389.2l-107.3-107.9v-10.6L366.4 162.8l1.1.6 126.9 72.1c36.2 20.5 36.2 54.1 0 74.7L367.5 388.6l-1.1.6z" fill="#fbbc04"/>
                <path d="M367.5 388.6L259.1 280.2 34.7 504.6c11.3 11.3 29.5 11.3 40.8 0l292-116z" fill="#34a853"/>
                <path d="M367.5 123.4L75.5 8.1C64.2-3.2 46-3.2 34.7 8.1l224.4 224.4 108.4-109.1z" fill="#4285f4"/>
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '10px', fontWeight: '500', marginBottom: '-2px' }}>GET IT ON</div>
                <div style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-0.5px' }}>Google Play</div>
              </div>
            </button>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '60px',
            borderTop: '1px solid rgba(0,0,0,0.06)',
            paddingTop: '60px'
          }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '36px', fontWeight: '900', color: 'var(--primary)', lineHeight: '1' }}>
                <CountUp value="50,000+" />
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '600', marginTop: '8px' }}>Active Farmers</div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '36px', fontWeight: '900', color: 'var(--primary)', lineHeight: '1' }}>
                <CountUp value="200,000+" />
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '600', marginTop: '8px' }}>Jobs Completed</div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '36px', fontWeight: '900', color: 'var(--primary)', lineHeight: '1' }}>
                <CountUp value="1,200+" />
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '600', marginTop: '8px' }}>Villages Reached</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .playstore-button-hero {
          background: #000;
          color: white;
          padding: 12px 32px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .playstore-button-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        @media (max-width: 992px) {
          #home h1 { font-size: 56px; letter-spacing: -1.5px; }
          #home p { font-size: 20px; }
          #home div[style*="gap: 60px"] { flex-direction: column; gap: 40px !important; text-align: center !important; }
          #home div[style*="textAlign: left"] { text-align: center !important; }
        }
      `}} />
    </section>
  );
};

export default Hero;
