import './SignInForm.css';
import React, { useState } from 'react';
import { StyledSubmitButton } from '../../misc/js/StyledComponents';
import SignInFrontEndMessageDisplayer from './SignInFrontEndMessageDisplayer';
import Network from '../../network/Network';

function SignInForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setError] = useState({
    usernameError: '',
    passwordError: '',
  });

  const clearErrors = () => {
    setError({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const frontEndError = props.signup
      ? SignInFrontEndMessageDisplayer.signupErrorMessage(username, password)
      : SignInFrontEndMessageDisplayer.loginErrorMessage(username, password);

    if (frontEndError) {
      setError(frontEndError);
      return;
    }

    const action = props.signup
      ? Network.authinAction.SIGNUP
      : Network.authinAction.LOGIN;

    Network.authIn(action, username, password)
      .then((data) => {
        document.location.href = '../';
      })
      .catch((error) => {
        if (error.networkError) {
          alert(`NETWORK ERROR: ${error.networkError}`);
        } else if (error.usernameError) {
          setError(error);
        }
      });
  };

  const contentText = props.signup
    ? {
        header: 'SIGN UP',
        buttonText: 'SIGN UP',
        linkText: 'Log in',
      }
    : {
        header: 'LOG IN',
        buttonText: 'LOG IN',
        linkText: 'Sign up',
      };

  return (
    <form className="signinform" onSubmit={handleSubmit}>
      <h1 className="signinform-header">{contentText.header}</h1>
      <input
        type="text"
        id="username"
        name="username"
        className={loginError.usernameError ? 'error' : ''}
        placeholder="Username"
        maxLength={20}
        onChange={(e) => {
          setUsername(e.target.value);
          clearErrors();
        }}
      />
      {loginError.usernameError && (
        <p className="signinform-username-error">{loginError.usernameError}</p>
      )}
      <input
        type="password"
        id="password"
        name="password"
        className={loginError.passwordError ? 'error' : ''}
        placeholder="Password"
        maxLength={20}
        onChange={(e) => {
          setPassword(e.target.value);
          clearErrors();
        }}
      />
      {loginError.passwordError && (
        <p className="signinform-password-error">{loginError.passwordError}</p>
      )}
      <StyledSubmitButton
        disabled={!username || !password}
        primary
        value={contentText.buttonText}
      />
    </form>
  );
}

export default SignInForm;
