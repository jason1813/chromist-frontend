# Chromist.org Frontend - Reddit-like Christian Forum

[www.chromist.org](http://www.chromist.org/) is a highly functional Christian forum website similar to reddit that allows users to upvote and downvote posts and comments.<br />

- [Backend repo](https://github.com/jason1813/chromist-backend)
- [API documentation](https://rawcdn.githack.com/jason1813/chromist-backend/e588fb5810d31baa173dfc6a75025b500829be20/api_documentation/api_documentation.html)

## The Stack

The frontend was created using the following technologies:

- [ReactJS](https://reactjs.org/) - JavaScript UI library
- [React Redux](https://react-redux.js.org/) - JavaScript library used to manage state with React

## How Authentication Works

When a user logs in or signs up:

- The client sends the username and password to the server, and gets back a JWT
- The client then stores the JWT in a cookie
- The cookie is set to expire based on the expire time that is encoded on the JWT
- Anytime a request is made to the backend, it sends in the JWT (as long as it still exists in cookies)
- When the user logs out, the JWT cookie is deleted (note that no request is made to backend)

## How State is Managed

When first opening up the website:

1. The client does a call to the backend to get all of the threads (This does not include the comments)
2. The threads are saved in redux

When a user clicks on a thread:

1. The client does a network call to the backend to get all of the comments
2. The comments are saved in state but not in redux

Anytime a user leaves the thread, the comments are lost from the frontend. The frontend will do a new network call to get the comments again if they click the thread again.

## How Voting Works

[For reference](https://rawcdn.githack.com/jason1813/chromist-backend/e588fb5810d31baa173dfc6a75025b500829be20/api_documentation/api_documentation.html#/Threads/findThreads), this is what a response to the call to `Get Threads` looks like:

```
[
  {
    "numberOfComments": 0,
    "description": "string",
    "title": "string",
    "author": {
      "username": "string",
      "id": 0
    },
    "voteStatus": 1,
    "voteScore": 0,
    "id": 0,
    "createdAt": "2022-10-31T23:32:03.124Z"
  }
]
```

The `voteScore` for each thread that is received from the backend technically does not include the user's `voteStatus`. The vote score that is displayed on the frontend is the `voteScore` + the user's `voteStatus`. This makes it easier for the frontend to calculate the new vote score anytime a user is voting on things.

When a user votes on a thread:

1. The user's `voteStatus` on the thread gets updated in the redux store immediately (note that this does not affect the `voteScore` for the thread in redux)
2. The frontend updates the vote score that gets displayed immediately to be the `voteScore` (technically the non-user vote score) + `user's new vote status` (-1, 0, or 1)
3. The new vote status gets sent to the backend

It does not wait for a successful call to the backend before updating the user's `voteStatus` or the thread's `voteScore` on the frontend. This is to show the vote immediately so it is more realtime. In the off chance that the network call to vote on the thread is unsuccessful, it is not important enough for the user to know that.

Voting on a comment is the same except nothing is saved in redux, just in local state.

## How it is Deployed

It is deployed to an AWS [S3 bucket](http://www.chromist.org.s3-website.us-east-2.amazonaws.com/). You can find a guide to do that [here](https://dev.to/karanpratapsingh/deploy-react-app-to-s3-cloudfront-1cao) (Note that CloudFront is not used).

[Porkbun](https://porkbun.com/) is used for the domain.
