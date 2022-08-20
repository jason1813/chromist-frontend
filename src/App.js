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
import Cookie from './network/Cookie.js';
import CreateThread from './pages/create_thread/CreateThread.js';


class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = { loggedIn: Cookie.getCookie(`token`) ? true : false }
  //   this.setLoginStatus = this.setLoginStatus.bind(this)
  // }

  // setLoginStatus(status) {
  //   this.setState({ loggedIn: status })
  // }

  render() {

    document.body.style.backgroundColor = "var(--oxford)";
    const loggedIn = Cookie.getCookie('token') ? true : false

    return (
      <Router>
        {/* <NavBar isLoggedIn={this.state.loggedIn} /> */}
        <NavBar isLoggedIn={loggedIn} />
        <div className='app'>
          <Routes>
            <Route exact path="/" element={<Threads loggedIn={loggedIn} />} />
            <Route path="/new-thread" element={<CreateThread/>} />
            <Route exact path="/threads/:id" element={<Thread loggedIn={loggedIn}/>} />
            <Route exact path="/signin" element={<SignIn /*setLoginStatus={this.setLoginStatus}*/ />} />
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
