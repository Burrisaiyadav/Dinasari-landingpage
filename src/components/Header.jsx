import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Investors', href: '#investors' },
  ];

  return (
    <header 
      className={`header-fixed ${isScrolled ? 'header-scrolled' : 'py-6 bg-transparent'}`}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo size={36} />

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{ 
                fontWeight: '500', 
                color: 'var(--text-main)',
                fontSize: '15px'
              }}
              className="nav-link-hover"
            >
              {link.name}
            </a>
          ))}
          <button className="btn btn-primary">
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
