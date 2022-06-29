
import SignInFrontEndValidator from "./SignInFrontEndValidator"

class SignInFrontEndMessageDisplayer {

    constructor(username, password) {
        this.signinValidator = new SignInFrontEndValidator(username, password)
    } 

    handleSignupError() {
        if (!this.signinValidator.usernameMeetsLengthRequirement()) {
            return {
                usernameError: 'username must be between 3 and 20 characters'
            }
        }

        if (!this.signinValidator.usernameHasValidCharacters()) {
            return {
                usernameError: 'username must contain letters, numbers, dashes, and underscores only'
            }
        }

        if (!this.signinValidator.passwordMeetsLengthRequirement()) {
            return {
                passwordError: 'password must be between 6 and 20 characters'
            }
        }
    }

    handleLoginError() {
        if (!this.signinValidator.meetsAllRequirements()) {
            return {
                usernameError: 'incorrect username or password'
            }
        }
    }
}

export default SignInFrontEndMessageDisplayer;
