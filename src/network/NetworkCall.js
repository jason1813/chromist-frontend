import Cookie from './Cookie';
import basicFetch from './NetworkCallUtils';

const baseUrl = 'http://0.0.0.0:3001';

export default class NetworkCall {
  /*
                                THREADS
                                                                  */
  static getThreads() {
    return basicFetch(`${baseUrl}/threads`);
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
    return basicFetch(`${baseUrl}/threads/${threadID}`);
  }

  static getComments(threadID, startIndex = 0) {
    return basicFetch(`${baseUrl}/threads/${threadID}/comments?startIndex=${startIndex}`);
  }

  static postNewComment(threadID, text) {
    return basicFetch(`${baseUrl}/threads/${threadID}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        text: text,
      }),
    });
  }

  static voteOnThread(threadID, voteStatus) {
    return basicFetch(`${baseUrl}/threads/${threadID}/voteStatus`, {
      method: 'POST',
      body: JSON.stringify({
        voteStatus: voteStatus,
      }),
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
    return basicFetch(`${baseUrl}/comments/${commentID}/replies`, {
      method: 'POST',
      body: JSON.stringify({
        text: text,
      }),
    });
  }

  static voteOnComment(commentID, voteStatus) {
    return basicFetch(`${baseUrl}/comments/${commentID}/voteStatus`, {
      method: 'POST',
      body: JSON.stringify({
        voteStatus: voteStatus,
      }),
    });
  }

  /*
                              AUTH
                                                                */
  static authIn(action, username, password) {
    return basicFetch(`${baseUrl}/auth/tokens?action=${action}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  }

  static authOut() {
    return basicFetch(`${baseUrl}/auth/tokens`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookie.getAuthToken()}`,
      },
    });
  }
}
