import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
        // Wait for navigation and rendering before scrolling
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            scrollToElement(element);
          }
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          scrollToElement(element);
        }
      }
    } else if (location.pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToElement = (element) => {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header 
      className={`header-fixed ${isScrolled ? 'header-scrolled' : 'py-6 bg-transparent'}`}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" onClick={(e) => handleNavClick(e, '/')} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Logo size={36} />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{ 
                fontWeight: '500', 
                color: location.pathname === link.href ? 'var(--primary)' : 'var(--text-main)',
                fontSize: '15px'
              }}
              className="nav-link-hover"
            >
              {link.name}
            </Link>
          ))}
          <button 
            className="btn btn-primary"
            onClick={() => {
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
            }}
          >
            <Download size={18} />
            Download App
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: 'none', background: 'none', border: 'none' }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'white',
                padding: '24px',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                zIndex: 999,
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{ 
                    fontWeight: '600', 
                    color: location.pathname === link.href ? 'var(--primary)' : 'var(--text-main)',
                    fontSize: '18px'
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => {
                  setMobileMenuOpen(false);
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
                }}
              >
                <Download size={18} />
                Download App
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .nav-link-hover:hover {
          color: var(--primary) !important;
        }
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} />
    </header>
  );
};

export default Header;
