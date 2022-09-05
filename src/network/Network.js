import NetworkCall from './NetworkCall';
import Cookie from './Cookie.js';
import {
  SignUpBackEndErrorDisplayer,
  LoginBackendErrorDisplayer,
} from '../pages/signin/SignInBackEndErrorDisplayer';

export default class Network {
  static authVerification = function () {
    if (!Cookie.hasAuthToken()) {
      if (!alert('Your auth session has expired.')) {
        document.location.href = '../';
        return;
      }
    }
  };

  static authinAction = {
    SIGNUP: 'signup',
    LOGIN: 'login',
  };

  /*
                                THREADS
                                                                  */
  static getThreads() {
    return new Promise((resolve, reject) => {
      NetworkCall.getThreads()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static postNewThread(title, description) {
    this.authVerification();
    return new Promise((resolve, reject) => {
      NetworkCall.postNewThread(title, description)
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static getComments() {
    return new Promise((resolve, reject) => {
      NetworkCall.getComments()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static postNewComment(threadID, text) {
    this.authVerification();
    return new Promise((resolve, reject) => {
      NetworkCall.postNewComment(threadID, text)
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static voteOnThread(threadID, voteStatus) {
    if (!Cookie.hasAuthToken()) {
      return;
    }
    return new Promise((resolve, reject) => {
      NetworkCall.voteOnThread(threadID, voteStatus)
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  /*
                            COMMENTS
                                                              */
  static getReplies() {
    return new Promise((resolve, reject) => {
      NetworkCall.getReplies()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static postNewReply(commentID, text) {
    this.authVerification();
    return new Promise((resolve, reject) => {
      NetworkCall.postNewReply(commentID, text)
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static voteOnComment(commentID, voteStatus) {
    if (!Cookie.hasAuthToken()) {
      return;
    }
    return new Promise((resolve, reject) => {
      NetworkCall.voteOnComment(commentID, voteStatus)
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  /*
                              AUTH
                                                                */
  static authIn(action, username, password) {
    return new Promise((resolve, reject) => {
      NetworkCall.authIn(action, username, password)
        .then((data) => {
          Cookie.setAuthToken(`${data.token}`, 1);
          resolve(data);
        })
        .catch((error) => {
          reject(
            action === this.authinAction.SIGNUP
              ? SignUpBackEndErrorDisplayer(error)
              : LoginBackendErrorDisplayer(error)
          );
        });
    });
  }

  static authOut() {
    return new Promise((resolve, reject) => {
      if (!Cookie.getAuthToken()) {
        resolve({});
        return;
      }

      NetworkCall.authOut()
        .then((data) => {
          Cookie.deleteAuthToken();
          resolve(data);
        })
        .catch((error) => {
          //         if (error.token already expired) {
          //     Cookie.deleteAuthToken()
          //     resolve({})
          // } else {
          reject(error);
        });
    });
  }
}
