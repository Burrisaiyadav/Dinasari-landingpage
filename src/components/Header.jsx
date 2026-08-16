import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Investors', href: '/investors' },
  ];

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) scrollToElement(element);
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) scrollToElement(element);
      }
    } else if (location.pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToElement = (element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 20;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  const handleDownloadClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('download');
        if (el) scrollToElement(el);
      }, 100);
    } else {
      const el = document.getElementById('download');
      if (el) scrollToElement(el);
    }
  };

  // Determine if we are on the home page (hero video page)
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Floating pill header */}
      <header className="dinasari-header">
        <motion.div
          className="header-pill"
          initial={false}
          animate={{
            background: isScrolled
              ? 'rgba(255,255,255,0.96)'
              : isHomePage
              ? 'rgba(255,255,255,0.12)'
              : 'rgba(255,255,255,0.95)',
            backdropFilter: isScrolled || !isHomePage ? 'blur(20px)' : 'blur(8px)',
            boxShadow: isScrolled || !isHomePage
              ? '0 8px 40px rgba(0,0,0,0.12)'
              : '0 2px 20px rgba(0,0,0,0.1)',
            borderColor: isScrolled || !isHomePage
              ? 'rgba(31,138,61,0.1)'
              : 'rgba(255,255,255,0.25)',
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, '/')}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <Logo size={30} light={isHomePage && !isScrolled} />
          </Link>

          {/* Divider */}
          <div
            className="header-divider"
            style={{
              width: '1px',
              height: '20px',
              background: isScrolled || !isHomePage
                ? 'rgba(0,0,0,0.12)'
                : 'rgba(255,255,255,0.3)',
            }}
          />

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="pill-nav-link"
                  style={{
                    color: isScrolled || !isHomePage
                      ? isActive ? 'var(--primary)' : '#1A1C19'
                      : isActive ? '#F4B400' : 'rgba(255,255,255,0.9)',
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <button
            className="header-cta-btn"
            onClick={handleDownloadClick}
            style={{
              background: isScrolled || !isHomePage ? 'transparent' : 'transparent',
              color: isScrolled || !isHomePage ? '#1A1C19' : 'white',
              border: `1.5px solid ${isScrolled || !isHomePage ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)'}`,
            }}
          >
            Get the App
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: isScrolled || !isHomePage ? '#1A1C19' : 'white' }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="mobile-nav-link"
                  style={{
                    color: location.pathname === link.href ? 'var(--primary)' : '#1A1C19',
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <button
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                onClick={() => { setMobileMenuOpen(false); handleDownloadClick(); }}
              >
                Get the App →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <style dangerouslySetInnerHTML={{ __html: `
        .dinasari-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 24px;
          pointer-events: none;
        }

        .header-pill {
          display: flex;
          align-items: center;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px 16px 10px 20px;
          border-radius: 100px;
          border: 1px solid;
          pointer-events: all;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
        }

        .pill-nav-link {
          font-size: 16px;
          font-weight: 500;
          padding: 7px 16px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .pill-nav-link:hover {
          background: rgba(31,138,61,0.08);
          color: var(--primary) !important;
        }

        .header-cta-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 50px;
          font-size: 15.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          font-family: 'Outfit', sans-serif;
          flex-shrink: 0;
        }

        .header-cta-btn:hover {
          background: var(--primary) !important;
          color: white !important;
          border-color: var(--primary) !important;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-shrink: 0;
        }

        .mobile-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 24px;
          right: 24px;
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 24px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          border: 1px solid rgba(0,0,0,0.06);
          pointer-events: all;
        }

        .mobile-nav-link {
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover {
          background: rgba(31,138,61,0.06);
          color: var(--primary) !important;
        }

        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .header-divider { display: none !important; }
          .header-cta-btn { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .header-pill { justify-content: space-between; }
        }
      `}} />
    </>
  );
};

export default Header;
