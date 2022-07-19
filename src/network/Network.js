import NetworkCall from "./NetworkCall"
import Cookie from "./Cookie.js"
import SignInBackEndErrorDisplayer from "../pages/signin/SignInBackEndErrorDisplayer"

class Network {

    static authIn(action, username, password) {
        return new Promise((resolve, reject) => {
            NetworkCall.authIn(action, username, password).then(data => {
                Cookie.setCookie(`token`, `${data.token}`, 1)
                resolve(data)
            })
            .catch(error => {
                reject(SignInBackEndErrorDisplayer(error))
            })
        })
    }
}

export default Network
