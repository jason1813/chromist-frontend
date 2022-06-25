
import './SignUp.css';
import React from 'react';
import { Component } from 'react';
import StyledButton from '../../../misc/js/StyledComponents';

function SignUp() {
    return (
        <div className="signup">
            <h1 className='signup-header'>SIGN UP</h1>
            <input type="text" id="username" name="username" className='signup-username' placeholder="Username"></input>
            <input type="text" id="password" name="password" className='signup-password' placeholder="Password"></input>
            <StyledButton primary>SIGNUP</StyledButton>

            <div className='signup-login-link'>
                <p className='signup-account-text'>Already have an account?</p>
                <a href="url" className='signup-login-hyperlink'>Log in</a>
            </div>
        </div>
    )
}

export default SignUp;

