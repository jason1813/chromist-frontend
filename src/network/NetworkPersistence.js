import Network from "./network_calls"

class NetworkPersistence {

    static authIn = function (action, username, password) {
        return new Promise((resolve, reject) => {
            Network.authIn(action, username, password).then(data => {
                document.cookie = `token=${data.token}`
                resolve(data)
            })
            .catch(error => reject(error))
        })
    }
}

export default NetworkPersistence;
