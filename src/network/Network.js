import NetworkCall from "./NetworkCall"
import Cookie from "./Cookie.js"
import { SignUpBackEndErrorDisplayer, LoginBackendErrorDisplayer } from "../pages/signin/SignInBackEndErrorDisplayer"

class Network {

    static authIn(action, username, password) {
        return new Promise((resolve, reject) => {
            NetworkCall.authIn(action, username, password).then(data => {
                Cookie.setCookie(`token`, `${data.token}`, 1)
                resolve(data)
            })
                .catch(error => {
                    reject(
                        action === 'signup' ?
                            SignUpBackEndErrorDisplayer(error) :
                            LoginBackendErrorDisplayer(error)
                    )
                })
        })
    }
}

export default Network
