
import './SignInForm.css';
import React from 'react';
import { Component } from 'react';
import { StyledSubmitButton } from '../../misc/js/StyledComponents';
import SignInFrontEndMessageDisplayer from './SignInFrontEndMessageDisplayer';
import Network from '../../network/network_calls';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameError: '',
            passwordError: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            usernameError: '',
            passwordError: '',
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        const signInMessageDisplayer = new SignInFrontEndMessageDisplayer(this.state.username, this.state.password)

        if (this.props.signup) {
            const signupError = signInMessageDisplayer.signupErrorMessage()

            if (signupError) {
                this.setState({ signupError })
            } else {
                Network.authIn('signup', this.state.username, this.state.password)
            }
        } else {
            this.setState({
                usernameError: signInMessageDisplayer.loginErrorMessage()
            })
        }
    }

    contentText = this.props.signup ? {
        header: "SIGN UP",
        buttonText: "SIGN UP",
        linkText: "Log in"
    } : {
        header: "LOG IN",
        buttonText: "LOG IN",
        linkText: "Sign up"
    }

    render() {

        return (
            <form className="signinform" onSubmit={this.handleSubmit}>
                <h1 className='signinform-header'>{this.contentText.header}</h1>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className={this.state.usernameError ? 'error' : ''}
                    placeholder="Username"
                    onChange={this.handleChange}
                />
                {this.state.usernameError &&
                    <p className='signinform-username-error'>{this.state.usernameError}</p>
                }
                <input
                    type="password"
                    id="password"
                    name="password"
                    className={this.state.passwordError ? 'error' : ''}
                    placeholder="Password"
                    onChange={this.handleChange}
                />
                {this.state.passwordError &&
                    <p className='signinform-password-error'>{this.state.passwordError}</p>
                }
                <StyledSubmitButton
                    disabled={this.state.username === '' || this.state.password === ''}
                    primary
                    value={this.contentText.buttonText}
                />
            </form>
        )
    }
}

export default SignInForm
