
class SignInFrontEndValidator {

    constructor(username, password) {
        this.username = username
        this.password = password
    }
    
    usernameMeetsLengthRequirement() {
        return this.username.length >= 3 && this.username.length <= 20
    }

    usernameHasValidCharacters() {
        return /^[0-9a-zA-Z_-]+$/.test(this.username)
    }

    passwordMeetsLengthRequirement() {
        return this.password.length >= 6 && this.password.length <= 20
    }

    meetsAllRequirements() {
        return (
            this.usernameMeetsLengthRequirement() &&
            this.usernameHasValidCharacters() &&
            this.passwordMeetsLengthRequirement()
        )
    }
}

export default SignInFrontEndValidator;
