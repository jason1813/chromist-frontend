
import './SignIn.css';
import React from 'react';
import { Component } from 'react';
import { StyledSubmitButton } from '../../../misc/js/StyledComponents';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasAccount: true,
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
        if (!this.state.hasAccount) {
            this.handleSignupError()
        } else {
            this.handleLoginError()
        }
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

    render() {

        const contentText = this.state.hasAccount ? {
            header: "LOG IN",
            buttonText: "LOG IN",
            questionText: "Don't have an account?",
            linkText: "Sign up"
        } : {
            header: "SIGN UP",
            buttonText: "SIGN UP",
            questionText: "Already have an account?",
            linkText: "Log in"
        }

        return (
            <form className="signin" onSubmit={this.handleSubmit}>
                <h1 className='signin-header'>{contentText.header}</h1>
                <input type="text"
                    id="username" name="username"
                    className={this.state.usernameError === '' ? '' : 'error'}
                    placeholder="Username" onChange={this.handleChange}>
                </input>
                {this.state.usernameError !== '' &&
                    <p className='signin-username-error'>{this.state.usernameError}</p>
                }
                <input type="password"
                    id="password" name="password"
                    className={this.state.passwordError === '' ? '' : 'error'}
                    placeholder="Password" onChange={this.handleChange}>
                </input>
                {this.state.passwordError !== '' &&
                    <p className='signin-password-error'>{this.state.passwordError}</p>
                }
                <StyledSubmitButton
                    disabled={this.state.username === '' || this.state.password === ''}
                    primary
                    value={contentText.buttonText}
                />

                <div className='signin-login-link'>
                    <p className='signin-account-text'>{contentText.questionText}</p>
                    <a href="/#" className='signin-login-hyperlink'
                        onClick={(e) => {
                            this.setState({
                                hasAccount: !this.state.hasAccount,
                                usernameError: '',
                                passwordError: ''
                            });
                            e.preventDefault()
                        }}
                    >{contentText.linkText}</a>
                </div>
            </form>
        )
    }
}

export default SignIn;
