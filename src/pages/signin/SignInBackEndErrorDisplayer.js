
function SignInBackEndErrorDisplayer(error) {
    if (error.message === `Failed to fetch`) {
        return { networkError: `Account could not be created` }
    }

    if (error.message === `username is taken`) {  // Todo: Figure this out later
        return { usernameError: `username already taken` }
    }
}

export default SignInBackEndErrorDisplayer
