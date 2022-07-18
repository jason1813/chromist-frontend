
import SignInFrontEndValidator from "./SignInFrontEndValidator"

class SignInFrontEndMessageDisplayer {
    
    static signupErrorMessage(username, password) {
        const signinValidator = new SignInFrontEndValidator(username, password)

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

    static loginErrorMessage(username, password) {
        const signinValidator = new SignInFrontEndValidator(username, password)

        if (!signinValidator.meetsAllRequirements()) {
            return { usernameError: 'incorrect username or password' }
        }
    }
}

export default SignInFrontEndMessageDisplayer
