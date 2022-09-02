import './SignIn.css';
import React, { useState } from 'react';
import SignInForm from './SignInForm';

export default function SignIn() {
  const [signup, setSignup] = useState(true);

  const contentText = signup
    ? {
        questionText: 'Already have an account?',
        linkText: 'Log in',
      }
    : {
        questionText: "Don't have an account?",
        linkText: 'Sign up',
      };

  return (
    <div className="signin">
      <SignInForm key={signup ? 'signup' : 'login'} signup={signup} />

      <div className="signin-login-link">
        <p className="signin-account-text">{contentText.questionText}</p>
        <a
          href="/#"
          className="signin-login-hyperlink"
          onClick={(e) => {
            setSignup(!signup);
            e.preventDefault();
          }}
        >
          {contentText.linkText}
        </a>
      </div>
    </div>
  );
}
