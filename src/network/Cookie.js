class Cookie {
  static getCookie(name) {
    return (
      document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() ||
      ""
    );
  }

  static setCookie(name, value, minutesValid = 60) {
    let expirationDate = new Date(new Date().getTime() + minutesValid * 60000);
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}`;
  }

  static deleteCookie(name) {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
}

export default Cookie;
