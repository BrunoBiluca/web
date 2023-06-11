import React from 'react';
import { NavBar } from './Navbar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import style from './AppV2.module.css'
import SmoothScroll from './Components/SmoothScroll/SmoothScroll';

export default function AppV2() {
  return (
    <div className={style.app}>
      <SmoothScroll>
        <NavBar />
        <Home />
        <Footer />
      </SmoothScroll>
    </div>
  );
}