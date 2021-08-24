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
    }
    render() {
        console.log(this.state);
        return (
            <div>
                Create Account
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input name='name' placeholder='name' onChange={this.handleChange}></input>
                    </label>
                    <label>
                    <input type='radio' name='preference' value='wholesome' onChange={this.handleChange}></input>
                    </label>
                    <label>
                    <input type='radio' name='preference' value='motivational' onChange={this.handleChange}></input>
                    </label>
                    <label>
                    <input type='radio' name='preference' value='mindfulness' onChange={this.handleChange}></input>
                    </label>
                    <label>
                    <input name='phoneNumber' placeholder='phoneNumber' onChange={this.handleChange}></input>
                    </label>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}
