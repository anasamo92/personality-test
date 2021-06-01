import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/landing-page.jsx';
import TestPage from './components/test-page';
import Page404 from './components/page-404';
import './assets/styles/style.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './server';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/personality-test" exact component={TestPage} />
            <Route component={Page404} />
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);