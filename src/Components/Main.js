import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response);
}

export default class Main extends Component {
  render() {
    console.log('CLIENT IDDDDDDDD', process.env.REACT_APP_CLIENT_ID)
    return (
      <div>
      <GoogleLogin
    clientId={process.env.REACT_APP_CLIENT_ID}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
      </div>
    )
  }
}
