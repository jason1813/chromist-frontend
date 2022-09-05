export default class Cookie {
  static AUTH_TOKEN = 'auth_token';

  static hasAuthToken() {
    return this.getAuthToken() ? true : false;
  }

  static getAuthToken() {
    return (
      document.cookie
        .match('(^|;)\\s*' + this.AUTH_TOKEN + '\\s*=\\s*([^;]+)')
        ?.pop() || ''
    );
  }

  static setAuthToken(value, minutesValid = 60) {
    let expirationDate = new Date(new Date().getTime() + minutesValid * 60000);
    document.cookie = `${
      this.AUTH_TOKEN
    }=${value}; expires=${expirationDate.toUTCString()}`;
  }

  static deleteAuthToken() {
    document.cookie =
      this.AUTH_TOKEN + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}
