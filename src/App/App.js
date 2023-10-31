import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from '../AppV1/Footer/Footer';
import NavBar from '../AppV1/NavBar/NavBar';
import ContentRouter from '../AppV1/ContentRouter/ContentRouter';

import './App.css';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import ResumePage from "ResumePage/ResumePage";
import AppV2 from '../AppV2/AppV2';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/resume' >
          <ResumePage />
        </Route>
        <Route path='/v1'>
          <ScrollToTop />
          <NavBar />
          <ContentRouter />
          <Footer />
        </Route>
        <Route path='/v2'>
          <AppV2 />
        </Route>
        <Route path='/'>
          <AppV2 />
        </Route>
      </Switch>
    );
  }
}

export default App;
