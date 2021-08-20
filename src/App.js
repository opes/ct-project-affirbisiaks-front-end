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
import CreateAccount from './Components/CreateAccount';

export default class App extends Component {

  state = {
    token: '',
    user: '', 
  }

  handleSetsToken = async (token) => {
    await this.setState({ token: token });
  }

  render() {
    return (
    <Router>
      <Header />
      <Switch>
        <Route exact path= '/' render={(routerProps) => !this.state.token 
          ? <Main {...routerProps} event={this.handleSetsToken} /> 
          : !this.state.user
          ? <CreateAccount {...routerProps} />
          : <Dashboard {...routerProps} />
          } />
        
        <Route exact path= '/about' component={About} />
        
      </Switch>
    </Router>
    );
  }
}

