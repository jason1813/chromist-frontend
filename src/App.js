import { Component } from 'react';
import React from 'react';
import NavBar from './misc/js/NavBar.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Threads from "./pages/threads/Threads"
import Comment from './pages/thread/Comment/Comment.js';
import './misc/css/App.css';
import Comments from './pages/thread/Comments/Comments.js';
import Thread from './pages/thread/Thread/Thread.js';
import SignIn from './pages/signin/SignIn.js';


class App extends Component {
  render() {

    document.body.style.backgroundColor = "var(--oxford)";

    return (
      <Router>
        <NavBar isLoggedIn={false} />
        <div className='app'>
          <Routes>
            <Route exact path="/" element={<Threads />} />
            {/* <Route path="/" element={<ThreadDetailTop />} /> */}
            <Route exact path="/threads/:id" element={<Thread />} />
            <Route exact path="/signin" element={<SignIn />} />
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
