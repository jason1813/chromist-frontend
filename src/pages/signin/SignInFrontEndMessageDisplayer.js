
import SignInFrontEndValidator from "./SignInFrontEndValidator"

class SignInFrontEndMessageDisplayer {

    constructor(username, password) {
        this.signinValidator = new SignInFrontEndValidator(username, password)
    }

    signupUsernameErrorMessage() {
        if (!this.signinValidator.usernameMeetsLengthRequirement()) {
            return 'username must be between 3 and 20 characters'
        }

        if (!this.signinValidator.usernameHasValidCharacters()) {
            return 'username must contain letters, numbers, dashes, and underscores only'
        }
    }

    signupPasswordErrorMessage() {
        if (!this.signinValidator.passwordMeetsLengthRequirement()) {
            return 'password must be between 6 and 20 characters'
        }
    }

    loginErrorMessage() {
        if (!this.signinValidator.meetsAllRequirements()) {
            return 'incorrect username or password'
        }
    }
}

export default SignInFrontEndMessageDisplayer
