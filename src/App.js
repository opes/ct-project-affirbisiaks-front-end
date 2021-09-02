import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Login from './Components/Login';
import Settings from './Components/Settings';
import CreateAccount from './Components/CreateAccount';
import { signup } from './utils/signup';
import { update } from './utils/update.js';
import { deleteUser } from './utils/delete';

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
    const user = await signup(userObj);
    await this.setState({ user })
  }

  handleUpdateUserState = async (userObj) => {
    const user = await update(userObj);
    await this.setState({ user })
  }

  handleDeleteUser = async (userObj) => {
    await deleteUser(userObj);
    await this.setState({
      token: '',
      user: '',
    });
  }

  handleLogoutUser = async() => {
    await this.setState({
      token: '',
      user: '',
    });
  }

  render() {
    return (
    <Router>
      <Header />
      <Switch>
        
        <Route exact path= '/settings' render={(routerProps) => (this.state.token && this.state.user) 
          ? <Settings {...routerProps} deleteUser={this.handleDeleteUser} logoutUser={this.handleLogoutUser} event={this.handleUpdateUserState} user={this.state.user}/> 
          : <Redirect to='/'/> 
        }/>

        <Route exact path= '/dashboard' render={(routerProps) => (this.state.token && this.state.user) 
          ? <Dashboard {...routerProps} user={this.state.user}/> 
          : <Redirect to='/'/> 
        }/>

        {/**
          Nesting ternaries can make logic hard to follow.
          One is generally fine, but be careful not to fall into
          the trap of "clever" coding.
        */}
        <Route exact path= '/' render={(routerProps) => !this.state.token 
          ? <Login {...routerProps} event={this.handleSetStates} /> 
          : !this.state.user
          ? <CreateAccount {...routerProps} event={this.handleSetUserState} googleId={this.state.token.googleId}/>
          : <Redirect to='/dashboard'/>
        } />

        <Route exact path= '/about' component={About} />
        
      </Switch>
    </Router>
    );
  }
}
