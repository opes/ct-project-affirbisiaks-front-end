import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response);
}

export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        <h2>Hello,  friend.</h2>
        <p>Affirbisiaks is an app designed to give you kind words throughout the week. You are able to sign up with your Google account and choose from several categories of texts to receive. Then when you are ready, you will receive texts every other day for two weeks.</p>
        <GoogleLogin className='button'
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Login using Google"
          onSuccess={ (token) => {this.props.event(token.profileObj)} }
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
          <p>...because everyone could use some affirmation.</p>
      </div>
    )
  }
}
