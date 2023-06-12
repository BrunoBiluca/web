import React from 'react';
import { NavBar } from './Navbar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import style from './AppV2.module.css'
import SmoothScroll from './Components/SmoothScroll/SmoothScroll';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import GamePage from './Games/GamePage';
import Profile from './Home/Profile';

export default function AppV2() {
  let { path } = useRouteMatch();

  return (
    <div className={style.app}>
      <SmoothScroll>
        <NavBar />
        <Switch>
          <Route path={path} exact children={<Profile />} />
        </Switch>
        <div className={style.content}>
          <Switch>
            <Route path={path} exact children={<Home />} />
            <Route path={`${path}/games/:gameSlug`} exact children={<GamePage />} />
          </Switch>
        </div>
        <Footer />
      </SmoothScroll>
    </div>
  );
}