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
  static getThreads(startIndex = 0) {
    return new Promise((resolve, reject) => {
      NetworkCall.getThreads(startIndex)
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

  static getThread(threadID) {
    return new Promise((resolve, reject) => {
      NetworkCall.getThread(threadID)
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static getComments(threadID) {
    return new Promise((resolve, reject) => {
      NetworkCall.getComments(threadID)
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
      return new Promise((_resolve, _reject) => {});
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
  static getReplies(commentID, startIndex) {
    return new Promise((resolve, reject) => {
      NetworkCall.getReplies(commentID, startIndex)
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
      return new Promise((_resolve, _reject) => {});
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
          Cookie.setAuthToken(data.access_token);
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
    Cookie.deleteAuthToken();
  }
}
