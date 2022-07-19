
const baseUrl = 'http://0.0.0.0:3001/v1'

class NetworkCall {

  static getThreads = new Promise((resolve, reject) => {
    fetch(`${baseUrl}/threads`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  })

  static getReplies(commentID, startIndex = 0, count = 5) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/comments/${commentID}/replies?startIndex=${startIndex}&count=${count}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  }

  static getComments(threadID, startIndex = 0, count = 10) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/threads/${threadID}/comments?startIndex=${startIndex}&count=${count}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  }

  static authIn(action, username, password) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/auth/tokens?action=${action}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  }
}

export default NetworkCall;
