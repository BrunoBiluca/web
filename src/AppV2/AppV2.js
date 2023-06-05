import React from 'react';
import { NavBar } from './Navbar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';

export default function AppV2() {
  return (
    <div style={{ backgroundColor: "#EEEDF4" }}>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}