import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import ContentRouter from '../../components/ContentRouter/ContentRouter';

import './App.css';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import ResumePage from '../ResumePage/ResumePage';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/resume'>
            <ResumePage />
          </Route>
          <Route path='/' exact>
            <ScrollToTop />
            <NavBar />
            <ContentRouter />
            <Footer />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
