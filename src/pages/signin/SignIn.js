import "./SignIn.css";
import React from "react";
import { Component } from "react";
import SignInForm from "./SignInForm";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: true,
    };
  }

  render() {
    const contentText = this.state.signup
      ? {
          questionText: "Already have an account?",
          linkText: "Log in",
        }
      : {
          questionText: "Don't have an account?",
          linkText: "Sign up",
        };

    return (
      <div className="signin">
        <SignInForm
          key={this.state.signup ? `signup` : `login`}
          signup={
            this.state.signup
          } /*setLoginStatus={this.props.setLoginStatus}*/
        />

        <div className="signin-login-link">
          <p className="signin-account-text">{contentText.questionText}</p>
          <a
            href="/#"
            className="signin-login-hyperlink"
            onClick={(e) => {
              this.setState({ signup: !this.state.signup });
              e.preventDefault();
            }}
          >
            {contentText.linkText}
          </a>
        </div>
      </div>
    );
  }
}

export default SignIn;
