import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>
          Welcome, {this.props.user.name}!
        </p>
        <Link to='/settings'>Settings</Link>
      </div>
    )
  }
}
