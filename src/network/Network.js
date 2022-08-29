import NetworkCall from './NetworkCall';
import Cookie from './Cookie.js';
import {
  SignUpBackEndErrorDisplayer,
  LoginBackendErrorDisplayer,
} from '../pages/signin/SignInBackEndErrorDisplayer';
import Constants from '../misc/js/Constants';

class Network {
  isLoggedIn = function () {
    return Cookie.getCookie(Constants.TOKEN) ? true : false;
  };

  authVerification = function () {
    if (!this.isLoggedIn()) {
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

  static authIn(action, username, password) {
    return new Promise((resolve, reject) => {
      NetworkCall.authIn(action, username, password)
        .then((data) => {
          Cookie.setCookie(Constants.TOKEN, `${data.token}`, 1);
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
      if (!Cookie.getCookie(Constants.TOKEN)) {
        resolve({});
        return;
      }

      NetworkCall.authOut()
        .then((data) => {
          Cookie.deleteCookie(Constants.TOKEN);
          resolve(data);
        })
        .catch((error) => {
          //         if (error.token already expired) {
          //     Cookie.deleteCookie(Constants.TOKEN)
          //     resolve()
          // } else {
          reject(error);
        });
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

  static voteOnThread(threadID, voteStatus) {
    if (!this.isLoggedIn) {
      return;
    }
    return new Promise((resolve, reject) => {
      NetworkCall.voteOnThread(threadID, voteStatus)
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static voteOnComment(commentID, voteStatus) {
    if (!this.isLoggedIn) {
      return;
    }
    return new Promise((resolve, reject) => {
      NetworkCall.voteOnComment(commentID, voteStatus)
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

  static postNewReply(commentID, text) {
    this.authVerification();
    return new Promise((resolve, reject) => {
      NetworkCall.postNewReply(commentID, text)
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}

export default Network;
