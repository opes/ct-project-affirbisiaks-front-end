import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // fetch,
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

  handleSetStates = async (profileObj) => {
    await this.setState({ token: profileObj });
    //SOME CODE
    // setting some const equal to a request to backend
    const headers = { 
      'Content-Type': 'application/json' 
    }
    const userObj = await fetch(`http://localhost:7890/api/v1/users/${profileObj.googleId}`, { headers, mode: 'no-cors' })
    // .then((res) => res.JSON())
    .then((data) => console.log('data', data));

    await this.setState({ user: userObj })
  }

  render() {
    return (
    <Router>
      <Header />
      <Switch>
        <Route exact path= '/' render={(routerProps) => !this.state.token 
          ? <Main {...routerProps} event={this.handleSetStates} /> 
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

