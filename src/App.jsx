// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import ImageDetail from './ImageDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<ImageDetail />} />
    </Routes>
  );
}
