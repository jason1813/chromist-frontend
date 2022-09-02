import { Component } from 'react';
import NavBar from './misc/js/NavBar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Threads from './pages/threads/Threads';
import './misc/css/App.css';
import Thread from './pages/thread/Thread/Thread.js';
import SignIn from './pages/signin/SignIn.js';
import Cookie from './network/Cookie.js';
import CreateThread from './pages/create_thread/CreateThread.js';

class App extends Component {
  render() {
    document.body.style.backgroundColor = 'var(--oxford)';
    const loggedIn = Cookie.getToken() ? true : false;

    return (
      <Router>
        <NavBar isLoggedIn={loggedIn} />
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Threads loggedIn={loggedIn} />} />
            <Route path="/new-thread" element={<CreateThread />} />
            <Route
              exact
              path="/threads/:id"
              element={<Thread loggedIn={loggedIn} />}
            />
            <Route exact path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
