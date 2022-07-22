import NetworkCall from "./NetworkCall"
import Cookie from "./Cookie.js"
import { SignUpBackEndErrorDisplayer, LoginBackendErrorDisplayer } from "../pages/signin/SignInBackEndErrorDisplayer"

class Network {

    static authinAction = {
        SIGNUP: 'signup',
        LOGIN: 'login'
    }

    static authIn(action, username, password) {
        return new Promise((resolve, reject) => {
            NetworkCall.authIn(action, username, password).then(data => {
                Cookie.setCookie(`token`, `${data.token}`, 1)
                resolve(data)
            })
                .catch(error => {
                    reject(
                        action === this.authinAction.SIGNUP ?
                            SignUpBackEndErrorDisplayer(error) :
                            LoginBackendErrorDisplayer(error)
                    )
                })
        })
    }

    static postNewThread(title, description) {
        return new Promise((resolve, reject) => {
            NetworkCall.postNewThread(title, description)
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }
}

export default Network
