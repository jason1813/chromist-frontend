
const baseUrl = 'http://0.0.0.0:3001/v1'

class Network {

  getThreads = new Promise((resolve, reject) => {
    fetch(`${baseUrl}/threads`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  })

  static getReplies = function (commentID, startIndex) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/comments/${commentID}/replies?startIndex=${startIndex}&count=5`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  }
}

export default Network;
