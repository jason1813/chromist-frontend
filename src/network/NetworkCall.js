import basicFetch from './NetworkCallUtils';

const baseUrl = 'http://0.0.0.0:3001';

export default class NetworkCall {
  /*
                                THREADS
                                                                  */
  static getThreads(startIndex) {
    return basicFetch(`${baseUrl}/threads?startIndex=${startIndex}`);
  }

  static postNewThread(title, description) {
    return basicFetch(`${baseUrl}/threads`, {
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
    return basicFetch(`${baseUrl}/threads/${threadID}/vote`, {
      method: 'POST',
      body: JSON.stringify({
        voteStatus: voteStatus,
      }),
    });
  }

  /*
                                COMMENTS
                                                                  */
  static getReplies(commentID, startIndex = 0) {
    return basicFetch(`${baseUrl}/comments/${commentID}/replies?startIndex=${startIndex}`);
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
    return basicFetch(`${baseUrl}/comments/${commentID}/vote`, {
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
}
