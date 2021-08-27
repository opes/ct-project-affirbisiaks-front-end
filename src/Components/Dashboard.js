import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { beginService } from '../utils/beginService';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='main'>
        <h2>Dashboard</h2>
        <p>Welcome, {this.props.user.name ? this.props.user.name : 'friend'}!</p>
        <button onClick={() => beginService(this.props.user)}>Send Affirmations</button>
        <Link to='/settings'>
          <button>Settings</button>
        </Link>
      </div>
    )
  }
}
