// src/ImageDetail.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function ImageDetail() {
  const { state } = useLocation();

  if (!state) return <p>No image data available.</p>;

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <Link to="/" style={{ textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>← Back</Link>
      <h2>{state.caption}</h2>
      <img 
        src={state.src} 
        alt={state.caption} 
        style={{ width: '80%', maxHeight: '500px', objectFit: 'contain', marginTop: '20px', borderRadius: '12px' }}
      />
    </div>
  );
}
