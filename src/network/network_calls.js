
const baseUrl = 'http://0.0.0.0:3001/v1'

let getThreads = new Promise((resolve, reject) => {
  fetch(`${baseUrl}/threads`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
})

export default getThreads;
