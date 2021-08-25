import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='main'>
        <h2>Dashboard</h2>
        <p>
          Welcome, {this.props.user.name}!
        </p>
        <button>Send Affirmations</button>
        <Link to='/settings'><button>Settings</button></Link>
      </div>
    )
  }
}
