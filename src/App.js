import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect
} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Main from './Components/Main';

export default class App extends Component {
  render() {
    return (
    <Router>
      <Header />
      <Switch>
        <Route exact path= '/' render={(routerProps) => <Main {...routerProps} />} />
        
        <Route exact path= '/dashboard' render={(routerProps) => <Dashboard {...routerProps} />} />
        
        <Route exact path= '/about' component={About} />
        
      </Switch>
    </Router>
    );
  }
}

