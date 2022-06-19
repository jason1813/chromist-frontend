import { Component } from 'react';
import React from 'react';
import NavBar from './misc/js/NavBar.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Threads from "./pages/threads/Threads"
import ThreadDetailTop from "./pages/thread/ThreadDetailTop"
import ThreadDetail from "./pages/thread/ThreadDetail"
import SideBySideVote from './pages/thread/SideBySideVote'
import Comment from './pages/thread/Comment/Comment.js';
import './misc/css/App.css';
import Comments from './pages/thread/Comments/Comments.js';


class App extends Component {
  render() {

    document.body.style.backgroundColor = "var(--oxford)";

    let replies = [
      {
        author: "biblemania34",
        text: "Lorem ipsum dolor sit amet, alii rebum postea eam ex. Et mei laoreet officiis, summo sensibus id mei.",
        userUpvoted: "up",
        upvoteScore: 543,
        replyCount: 5,
        id: 324
      },
      {
        author: "biblfdia34",
        text: "Lorem ipsum dolor sit amet, alii rebum postea eam ex. Et mei laoreet officiis, summo sensibus id mei.",
        userUpvoted: "up",
        upvoteScore: -27,
        replyCount: 12,
        id: 436589234
      }
    ]

    return (
      <Router>
        <NavBar isLoggedIn={false} />
        <div className='app'>
          <Routes>
            {/* <Route path="/" element={<Threads />} /> */}
            {/* <Route path="/" element={<ThreadDetailTop />} /> */}
            <Route path="/" element={<ThreadDetail title='Is the Holy Trinity Biblical?' description="Is the Trinity a biblical concept?Come to think of it, I have never seen it mentioned in the Bible. Jesus speaks multiple times of how the he does the will of the Father in heaven and there are multiple times Jesus prays to God as well.Yes Jesus is our savior, but if he was God he would not need to pray to anyone.There is one God: Deuteronomy 6:4; 1 Corinthians 8:4; Galatians 3:20; 1 Timothy 2:5.I am not underestimating Jesus here. But why would we teach this if it's not in the Bible?" />} />
            {/* <Route path="/" element={<SideBySideVote upvoteScore='4' userUpvoted="up" />} /> */}
            {/* <Route path="/" element={<Comment
              id={34246245}
              dateCreated="2022-06-18T12:59:25.358Z"
              author="biblemania34"
              text="Lorem ipsum dolor sit amet, alii rebum postea eam ex. Et mei laoreet officiis, summo sensibus id mei."
              userUpvoted="up"
              upvoteScore={98}
              replies={replies}
              replyCount={3}
            />} /> */}

          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
