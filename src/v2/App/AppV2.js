import React from 'react';
import { NavBar } from './NavBar';
import Profile from './Profile'
import Footer from './Footer';

export default function AppV2() {
  return (
    <div style={{ backgroundColor: "#EEEDF4" }}>
      <NavBar />
      <Profile />
      <Footer />
    </div>
  );
}