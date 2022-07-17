
import SignInFrontEndValidator from "./SignInFrontEndValidator"

function SignInFrontEndMessageDisplayer(username, password) {
    
    const signinValidator = new SignInFrontEndValidator(username, password)

    this.signupErrorMessage = function() {
        if (!signinValidator.usernameMeetsLengthRequirement()) {
            return { usernameError: 'username must be between 3 and 20 characters' }
        }

        if (!signinValidator.usernameHasValidCharacters()) {
            return { usernameError: 'username must contain letters, numbers, dashes, and underscores only' }
        }

        if (!signinValidator.passwordMeetsLengthRequirement()) {
            return { passwordError: 'password must be between 6 and 20 characters' }
        }
    }

    this.loginErrorMessage = function() {
        if (!signinValidator.meetsAllRequirements()) {
            return { usernameError: 'incorrect username or password' }
        }
    }
}

export default SignInFrontEndMessageDisplayer
