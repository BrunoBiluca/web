import React from 'react';
import { NavBar } from './Navbar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import style from './AppV2.module.css'

export default function AppV2() {
  return (
    <div className={style.app}>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}