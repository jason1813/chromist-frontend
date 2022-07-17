
import './SignInForm.css'; 
import React, { useState } from 'react';
import { Component } from 'react';
import { StyledSubmitButton } from '../../misc/js/StyledComponents';
import SignInFrontEndMessageDisplayer from './SignInFrontEndMessageDisplayer';
import Network from '../../network/network_calls';
import NetworkPersistence from '../../network/NetworkPersistence';
import { useNavigate } from "react-router-dom";

function SignInForm(props) {

    const [username, setUsername] = useState(``)
    const [password, setPassword] = useState(``)

    const [loginError, setError] = useState({
        usernameError: '',
        passwordError: ''
    })

    const clearErrors = () => {
        setError({})
    }

    let navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()

        const signInMessageDisplayer = new SignInFrontEndMessageDisplayer(username, password)

        if (props.signup) {
            const signupError = signInMessageDisplayer.signupErrorMessage()

            if (signupError) {
                setError(signupError)
            } else {
                NetworkPersistence.authIn('signup', username, password).then(data => {
                    props.setLoginStatus(true)
                    navigate('../', { replace: true })
                })
            }
        } else {
            setError({
                usernameError: signInMessageDisplayer.loginErrorMessage()
            })
        }
    }

    const contentText = props.signup ? {
        header: "SIGN UP",
        buttonText: "SIGN UP",
        linkText: "Log in"
    } : {
        header: "LOG IN",
        buttonText: "LOG IN",
        linkText: "Sign up"
    }

    return (
        <form className="signinform" onSubmit={handleSubmit}>
            <h1 className='signinform-header'>{contentText.header}</h1>
            <input
                type="text"
                id="username"
                name="username"
                className={loginError.usernameError ? 'error' : ''}
                placeholder="Username"
                onChange={e => {
                    setUsername(e.target.value)
                    clearErrors()
                }}
            />
            {loginError.usernameError &&
                <p className='signinform-username-error'>{loginError.usernameError}</p>
            }
            <input
                type="password"
                id="password"
                name="password"
                className={loginError.passwordError ? 'error' : ''}
                placeholder="Password"
                onChange={e => {
                    setPassword(e.target.value)
                    clearErrors()
                }}
            />
            {loginError.passwordError &&
                <p className='signinform-password-error'>{loginError.passwordError}</p>
            }
            <StyledSubmitButton
                disabled={username === '' || password === ''}
                primary
                value={contentText.buttonText}
            />
        </form>
    )
}

export default SignInForm
