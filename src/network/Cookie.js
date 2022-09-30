window.Buffer = window.Buffer || require('buffer').Buffer;

export default class Cookie {
  static AUTH_TOKEN = 'auth_token';

  static hasAuthToken() {
    return this.getAuthToken() ? true : false;
  }

  static getAuthToken() {
    return document.cookie.match('(^|;)\\s*' + this.AUTH_TOKEN + '\\s*=\\s*([^;]+)')?.pop() || '';
  }

  static setAuthToken(token) {
    const jwt = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    const expirationDate = new Date(jwt.exp * 1000);
    document.cookie = `${
      this.AUTH_TOKEN
    }=${token}; expires=${expirationDate.toUTCString()}; Path=/;`;
  }

  static deleteAuthToken() {
    document.cookie = this.AUTH_TOKEN + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}
