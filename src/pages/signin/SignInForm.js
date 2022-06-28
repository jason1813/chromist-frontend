
import './SignInForm.css';
import React from 'react';
import { Component } from 'react';
import { StyledSubmitButton } from '../../misc/js/StyledComponents';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameError: '',
            passwordError: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            usernameError: '',
            passwordError: '',
        });
    }

    handleSubmit(event) {
        this.props.signup ? this.handleSignupError() : this.handleLoginError()
        event.preventDefault();
    }

    handleSignupError() {
        if (this.state.username.length < 3 || this.state.username.length > 20) {
            this.setState({
                usernameError: 'username must be between 3 and 20 characters',
                passwordError: ''
            });
            return
        }

        if (!/^[0-9a-zA-Z_-]+$/.test(this.state.username)) {
            this.setState({
                usernameError: 'username must contain letters, numbers, dashes, and underscores only',
                passwordError: ''
            });
            return
        }

        if (this.state.password.length < 6 || this.state.password.length > 20) {
            this.setState({
                passwordError: 'password must be between 6 and 20 characters',
                usernameError: ''
            });
            return
        }

        this.setState({
            usernameError: '',
            passwordError: ''
        })
    }

    handleLoginError() {
        if (
            this.state.username.length < 3 ||
            this.state.username.length > 20 ||
            !/^[0-9a-zA-Z_-]+$/.test(this.state.username) ||
            this.state.password.length < 6 || this.state.password.length > 20
        ) {
            this.setState({
                usernameError: 'Incorrect username or password',
                passwordError: ''
            })
            return
        }

        this.setState({
            usernameError: '',
            passwordError: ''
        })
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
                    className={this.state.usernameError === '' ? '' : 'error'}
                    placeholder="Username" 
                    onChange={this.handleChange}
                />
                {this.state.usernameError !== '' &&
                    <p className='signinform-username-error'>{this.state.usernameError}</p>
                }
                <input 
                    type="password"
                    id="password"
                    name="password"
                    className={this.state.passwordError === '' ? '' : 'error'}
                    placeholder="Password"
                    onChange={this.handleChange}
                />
                {this.state.passwordError !== '' &&
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

export default SignInForm;
