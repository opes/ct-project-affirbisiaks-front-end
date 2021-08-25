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
import { signup } from './utils/signup';

export default class App extends Component {

  state = {
    token: '',
    user: '', 
  }

  handleSetStates = async (profileObj) => {
    await this.setState({ token: profileObj });

    const userObj = await fetch(`https://affirbisiaks.herokuapp.com/api/v1/users/${profileObj.googleId}`);
    
    const data = await userObj.json();

    await this.setState({ user: data })
  }

  handleSetUserState = async (userObj) => {
    const user = signup(userObj);
    this.setState({ user })
  }

  render() {
    console.log('USER STATE!!!!!!!!!!!!!!', this.state.token);
    return (
    <Router>
      <Header />
      <Switch>
        <Route exact path= '/' render={(routerProps) => !this.state.token 
          ? <Main {...routerProps} event={this.handleSetStates} /> 
          : !this.state.user
          ? <CreateAccount {...routerProps} event={this.handleSetUserState} googleId={this.state.token.googleId}/>
          : <Dashboard {...routerProps} />
          } />
        
        <Route exact path= '/about' component={About} />
        
      </Switch>
    </Router>
    );
  }
}

