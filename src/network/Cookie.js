export default class Cookie {
  static TOKEN = 'token';

  static hasToken() {
    return this.getToken() ? true : false;
  }

  static getToken() {
    return (
      document.cookie
        .match('(^|;)\\s*' + this.TOKEN + '\\s*=\\s*([^;]+)')
        ?.pop() || ''
    );
  }

  static setToken(value, minutesValid = 60) {
    let expirationDate = new Date(new Date().getTime() + minutesValid * 60000);
    document.cookie = `${
      this.TOKEN
    }=${value}; expires=${expirationDate.toUTCString()}`;
  }

  static deleteToken() {
    document.cookie =
      this.TOKEN + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}
