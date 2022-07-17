
class Cookie {
    static getCookie(name) {
        return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
    }

    static setCookie( name, value, minutesValid = 60 ) {
        let expirationDate = new Date(new Date().getTime() + minutesValid * 60000)
        document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}`
    }
}

export default Cookie;
