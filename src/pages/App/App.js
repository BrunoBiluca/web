import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from '../../v1/Footer/Footer';
import NavBar from '../../v1/NavBar/NavBar';
import ContentRouter from '../../v1/ContentRouter/ContentRouter';

import './App.css';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import ResumePage from '../ResumePage/ResumePage';

class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route path='/resume' >
          <ResumePage />
        </Route>
        <Route path='/' exact>
          <ScrollToTop />
          <NavBar />
          <ContentRouter />
          <Footer />
        </Route>
        <Route path='/v1'>
          <ScrollToTop />
          <NavBar />
          <ContentRouter />
          <Footer />
        </Route>
      </Switch>
    );
  }
}

export default App;
