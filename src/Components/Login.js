import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response);
}

export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        <p>Login Using Google</p>
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Login"
          onSuccess={ (token) => {this.props.event(token.profileObj)} }
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}
