import React from 'react';
import { Link } from 'react-router-dom';

const navItems = ['Destinations', 'Trips', 'Stories', 'Books', 'Explore'];

export default function Navbar() {
  return (
    <div style={{
      width: '100%',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1450px',
        margin: '0 auto',
        padding: '15px 20px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Left-aligned logo */}
        <div style={{fontWeight: 'bold', fontSize: '18px' }}>
          TravelApp
        </div>

        {/* Spacer pushes nav items to center/right */}
        <div style={{ flex: 1 }} />

        {/* Navigation items */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {navItems.map((item) => (
            <Link
              key={item}
              to="#"
              style={{
                color: '#333',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '18px'
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
