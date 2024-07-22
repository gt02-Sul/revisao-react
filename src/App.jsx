import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Formulario from './components/Formulario';
import NavigationBar from './components/NavigationBar';

export default function App () {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Formulario />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};
