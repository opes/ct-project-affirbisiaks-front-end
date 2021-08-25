import React, { Component } from 'react';

export default class Settings extends Component {
    state = {
        name: this.props.user.name,
        preference: this.props.user.preference,
        phoneNumber: this.props.user.phoneNumber,
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const userInfo = { 
            name: this.state.name,
            preference: this.state.preference,
            phoneNumber: this.state.phoneNumber,
            googleId: this.props.user.googleId
         }
         await this.props.event(userInfo)
         this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className='main'>
                <h2>
                    Account Settings
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Your Name:
                        <input name='name' placeholder={this.props.user.name} onChange={this.handleChange} />
                    </label>
                    <label>Phone Number:
                        <input name='phoneNumber' placeholder={this.props.user.phoneNumber} onChange={this.handleChange} />
                    </label>
                    <div>Would you like to change your affirmation preference?
                        <label>
                            <input type='radio' name='preference' value='' onChange={this.handleChange} />all
                        </label>
                        <label>
                            <input type='radio' name='preference' value='wholesome' onChange={this.handleChange} />wholesome
                        </label>
                        <label>
                            <input type='radio' name='preference' value='motivational' onChange={this.handleChange} />motivational
                        </label>
                        <label>
                            <input type='radio' name='preference' value='mindful' onChange={this.handleChange} />mindful
                        </label>
                    </div>
                    <button>Submit</button>
                </form>
                <button onClick={() => this.props.logoutUser()}>Logout</button>
                <button onClick={() => this.props.deleteUser(this.props.user)}>Delete Account</button>
            </div>
        )
    }
}
