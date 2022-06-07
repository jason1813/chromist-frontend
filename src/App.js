import './misc/css/App.css';
import { Component } from 'react';
import React from 'react';
import NavBar from './misc/js/NavBar.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Threads from "./pages/threads/Threads"


class App extends Component {
  render() {
    return (
      <Router>
        <NavBar isLoggedIn={false} />
        <Routes>
          <Route path="/" element={<Threads />} />
        </Routes>
      </Router>
    )
  }
}

export default App;
