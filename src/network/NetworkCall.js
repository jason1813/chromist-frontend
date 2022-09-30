import Cookie from './Cookie';

const baseUrl = 'http://0.0.0.0:3001';

export default class NetworkCall {
  static basicFetch(fetchString, fetchObject = {}) {
    const authToken = Cookie.getAuthToken();
    const authHeaders = authToken
      ? {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        }
      : {};

    return new Promise((resolve, reject) => {
      fetch(fetchString, {
        ...authHeaders,
        ...fetchObject,
      })
        .then(this.handleErrors)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  /*
                                THREADS
                                                                  */
  static getThreads() {
    return this.basicFetch(`${baseUrl}/threads`);
  }

  static postNewThread(title, description) {
    return this.basicFetch(`${baseUrl}/threads`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });
  }

  static getThread(threadID) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/threads/${threadID}`)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static getComments(threadID, startIndex = 0, count = 10) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/threads/${threadID}/comments?startIndex=${startIndex}&count=${count}`)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static postNewComment(threadID, text) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/threads/${threadID}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookie.getAuthToken()}`,
        },
        body: JSON.stringify({
          text: text,
        }),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static voteOnThread(threadID, voteStatus) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/threads/${threadID}/voteStatus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookie.getAuthToken()}`,
        },
        body: JSON.stringify({
          voteStatus: voteStatus,
        }),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  /*
                                COMMENTS
                                                                  */
  static getReplies(commentID, startIndex = 0, count = 5) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/comments/${commentID}/replies?startIndex=${startIndex}&count=${count}`)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static postNewReply(commentID, text) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/comments/${commentID}/replies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookie.getAuthToken()}`,
        },
        body: JSON.stringify({
          text: text,
        }),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static voteOnComment(commentID, voteStatus) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/comments/${commentID}/voteStatus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookie.getAuthToken()}`,
        },
        body: JSON.stringify({
          voteStatus: voteStatus,
        }),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  /*
                              AUTH
                                                                */
  static authIn(action, username, password) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/auth/tokens?action=${action}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            return Promise.reject(res);
          }
          return res.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static authOut() {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/auth/tokens`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookie.getAuthToken()}`,
        },
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}
