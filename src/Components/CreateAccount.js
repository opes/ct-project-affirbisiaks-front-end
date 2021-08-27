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
            <div className='main'>
                <h2>Create Account</h2>
                <form onSubmit={this.handleSubmit}>
                    <label className='text-input'>Your Name:
                        <input name='name' placeholder='name' onChange={this.handleChange} />
                    </label>
                    <label className='text-input'>Phone Number:
                        <input name='phoneNumber' placeholder='1999999999' onChange={this.handleChange} />
                    </label>
                    <div><p>What motivations would you like?</p>
                        <label>
                            <input type='radio' name='preference' value='' onChange={this.handleChange} /><p>all</p>
                        </label>
                        <label>
                            <input type='radio' name='preference' value='wholesome' onChange={this.handleChange} /><p>wholesome</p>
                        </label>
                        <label>
                            <input type='radio' name='preference' value='motivational' onChange={this.handleChange} /><p>motivational</p>
                        </label>
                        <label>
                            <input type='radio' name='preference' value='mindful' onChange={this.handleChange} /><p>mindful</p>
                        </label>
                    </div>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}
