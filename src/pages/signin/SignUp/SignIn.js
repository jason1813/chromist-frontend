
import './SignIn.css';
import React from 'react';
import { Component } from 'react';
import StyledButton from '../../../misc/js/StyledComponents';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { hasAccount: true };
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
            <div className="signin">
                <h1 className='signin-header'>{contentText.header}</h1>
                <input type="text" id="username" name="username" className='signin-username' placeholder="Username"></input>
                <input type="text" id="password" name="password" className='signin-password' placeholder="Password"></input>
                <StyledButton primary>{contentText.buttonText}</StyledButton>

                <div className='signin-login-link'>
                    <p className='signin-account-text'>{contentText.questionText}</p>
                    <a href="/#" className='signin-login-hyperlink'
                        onClick={
                            (e) => {
                                this.setState({
                                    hasAccount: !this.state.hasAccount
                                });
                                e.preventDefault()
                            }
                        }
                    >{contentText.linkText}</a>
                </div>
            </div>
        )
    }
}

export default SignIn;
