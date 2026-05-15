import React from 'react';

const Logo = ({ size = 40, showText = true, light = false }) => {
  return (
    <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
    </div>
  );
};

export default Logo;
