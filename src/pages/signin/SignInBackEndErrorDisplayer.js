
export function SignUpBackEndErrorDisplayer(error) {
    if (error.message === `Failed to fetch`) {
        return { networkError: `Account could not be created` }
    }

    if (error.message === `username is taken`) {  // Todo: Figure this out later
        return { usernameError: `username already taken` }
    }

    return {}
}

export function LoginBackendErrorDisplayer(error) {
    if (error.message === `Failed to fetch`) {
        return { networkError: 'Could not log in' }
    }

    if (error.message === `incorrect username`) {  // Todo: Figure this out later
        return { usernameError: `incorrect username or password` }
    }

    return {}
}
