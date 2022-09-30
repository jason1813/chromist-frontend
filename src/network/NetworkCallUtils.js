import Cookie from './Cookie';

export default function basicFetch(fetchString, fetchObject = {}) {
  const authToken = Cookie.getAuthToken();
  const authHeaders = authToken
    ? {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      }
    : {};

  return new Promise((resolve, reject) => {
    fetch(fetchString, {
      ...authHeaders,
      ...fetchObject,
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res);
        }
        return res.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
