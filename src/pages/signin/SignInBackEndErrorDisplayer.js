export function SignUpBackEndErrorDisplayer(error) {
  if (error.message === 'Failed to fetch') {
    return { networkError: 'Account could not be created' };
  }

  if (error.status === 403) {
    return { usernameError: 'Credentials taken' };
  }

  return { usernameError: 'Account could not be created' };
}

export function LoginBackendErrorDisplayer(error) {
  if (error.statusCode === 403) {
    return { usernameError: 'incorrect username or password' };
  }

  if (error.message === 'Failed to fetch') {
    return { networkError: 'Could not log in' };
  }

  return { usernameError: 'Could not log in' };
}
