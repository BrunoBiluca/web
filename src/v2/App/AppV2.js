import React from 'react';
import { NavBar } from './NavBar';
import Profile from './Profile'
import Footer from './Footer';
import Home from './Home';

export default function AppV2() {
  return (
    <div style={{ backgroundColor: "#EEEDF4" }}>
      <NavBar />
      <Profile />
      <Home />
      <Footer />
    </div>
  );
}