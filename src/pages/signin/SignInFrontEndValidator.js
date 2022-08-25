function SignInFrontEndValidator(username, password) {
  this.usernameMeetsLengthRequirement = function () {
    return username.length >= 3 && username.length <= 20;
  };

  this.usernameHasValidCharacters = function () {
    return /^[0-9a-zA-Z_-]+$/.test(username);
  };

  this.passwordMeetsLengthRequirement = function () {
    return password.length >= 6 && password.length <= 20;
  };

  this.meetsAllRequirements = function () {
    return (
      this.usernameMeetsLengthRequirement() &&
      this.usernameHasValidCharacters() &&
      this.passwordMeetsLengthRequirement()
    );
  };
}

export default SignInFrontEndValidator;
