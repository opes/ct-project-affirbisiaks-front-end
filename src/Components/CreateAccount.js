import React, { Component } from 'react'

export default class CreateAccount extends Component {
    state = {
        name: '',
        preference: '',
        phoneNumber: '',
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
            affirmations: [],
            googleId: this.props.googleId
         }
         await this.props.event(userInfo)
         this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div>
                Create Account
                <form onSubmit={this.handleSubmit}>
                    <label>Your Name:
                        <input name='name' placeholder='name' onChange={this.handleChange} />
                    </label>
                    <label>Phone Number:
                        <input name='phoneNumber' placeholder='1999999999' onChange={this.handleChange} />
                    </label>
                    <div>What motivations would you like?
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
                    <button>submit</button>
                </form>
            </div>
        )
    }
}
