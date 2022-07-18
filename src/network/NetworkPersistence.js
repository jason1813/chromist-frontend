import Network from "./network_calls"
import Cookie from "./Cookie.js"
import SignInBackEndErrorDisplayer from "../pages/signin/SignInBackEndErrorDisplayer"

class NetworkPersistence {

    static authIn(action, username, password) {
        return new Promise((resolve, reject) => {
            Network.authIn(action, username, password).then(data => {
                Cookie.setCookie(`token`, `${data.token}`, 1)
                resolve(data)
            })
            .catch(error => {
                reject(SignInBackEndErrorDisplayer(error))
            })
        })
    }
}

export default NetworkPersistence
