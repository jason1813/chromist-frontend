import { Component } from 'react';
import React from 'react';
import NavBar from './misc/js/NavBar.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Threads from "./pages/threads/Threads"
import ThreadDetailTop from "./pages/thread/ThreadDetailTop"
import ThreadDetail from "./pages/thread/ThreadDetail"
import SideBySideVote from './pages/thread/SideBySideVote'
import './misc/css/App.css';


class App extends Component {
  render() {

    document.body.style.backgroundColor = "var(--oxford)";

    return (
      <Router>
        <NavBar isLoggedIn={false} />
        <div className='app'>
          <Routes>
            {/* <Route path="/" element={<Threads />} /> */}
            {/* <Route path="/" element={<ThreadDetailTop />} /> */}
            <Route path="/" element={<ThreadDetail />} />
            {/* <Route path="/" element={<SideBySideVote upvoteScore='4' userUpvoted="up" />} /> */}

          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
