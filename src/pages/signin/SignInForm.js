
import './SignInForm.css'; 
import React, { useState } from 'react';
import { StyledSubmitButton } from '../../misc/js/StyledComponents';
import SignInFrontEndMessageDisplayer from './SignInFrontEndMessageDisplayer';
import Network from '../../network/Network';

function SignInForm(props) {

    const [username, setUsername] = useState(``)
    const [password, setPassword] = useState(``)

    const [loginError, setError] = useState({
        usernameError: ``,
        passwordError: ``
    })

    const clearErrors = () => {
        setError({})
    }

    const handleSignupSubmit = event => {
        event.preventDefault()

        const frontEndSignupError = SignInFrontEndMessageDisplayer.signupErrorMessage(username, password)

        if (frontEndSignupError) {
            setError(frontEndSignupError)
            return
        }

        Network.authIn(`signup`, username, password).then(data => {
            props.setLoginStatus(true)
            document.location.href = '../'
        }).catch(error => {
            if (error.networkError) {
                alert(`NETWORK ERROR: ${error.networkError}`)
            } else if (error.usernameError) {
                setError(error.usernameError)
            }
        })
    }

    const handleLoginSubmit = event => {
        event.preventDefault()

        const frontEndLoginError = SignInFrontEndMessageDisplayer.loginErrorMessage(username, password)

        if (frontEndLoginError) {
            setError(frontEndLoginError)
            return
        }

        // TODO: network call
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
        <form className="signinform" onSubmit={props.signup ? handleSignupSubmit : handleLoginSubmit}>
            <h1 className='signinform-header'>{contentText.header}</h1>
            <input
                type='text'
                id="username"
                name="username"
                className={loginError.usernameError ? 'error' : ''}
                placeholder="Username"
                maxLength={20}
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
                maxLength={20}
                onChange={e => {
                    setPassword(e.target.value)
                    clearErrors()
                }}
            />
            {loginError.passwordError &&
                <p className='signinform-password-error'>{loginError.passwordError}</p>
            }
            <StyledSubmitButton
                disabled={ !username || !password }
                primary
                value={contentText.buttonText}
            />
        </form>
    )
}

export default SignInForm
