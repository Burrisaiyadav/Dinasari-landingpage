import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ size = 40, showText = true, light = false }) => {
  return (
    <Link to="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
      <img 
        src="/logo.png" 
        alt="Dinasari Logo"
        style={{ 
          width: size, 
          height: size, 
          objectFit: 'contain'
        }}
      />
      {showText && (
        <span style={{ 
          fontSize: '24px', 
          fontWeight: '800', 
          color: light ? '#FFFFFF' : '#1F8A3D', 
          letterSpacing: '-0.5px'
        }}>
          Dinasari
        </span>
      )}
    </Link>
  );
};

export default Logo;
