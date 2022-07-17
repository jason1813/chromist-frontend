import Network from "./network_calls"
import Cookie from "./Cookie.js"

class NetworkPersistence {

    static authIn(action, username, password) {
        return new Promise((resolve, reject) => {
            Network.authIn(action, username, password).then(data => {
                Cookie.setCookie(`token`, `${data.token}`, 1)
                resolve(data)
            })
            .catch(error => reject(error))
        })
    }
}

export default NetworkPersistence;
