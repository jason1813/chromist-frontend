import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import React from 'react';
import ListThread from './ListThread.js'

const threadInfo = {
  id: 0,
  dateCreated: new Date(2018, 11, 24, 10, 33, 30, 0),
  author: "Ghewrof324",
  title: "Billy Napier: Florida Football Wont Get Involved in NIL Bidding Wars",
  description: "Can you imagine listening to the Tennessee and Oklahoma bands battle it out all game when they play each other? adsfasdf aser aefa asdrf aser adgf tadfs asdf",
  numberOfComments: 21,
  upVoteScore: -221
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListThread
          threadInfo={threadInfo}
        />
      </header>
    </div>
  );
}

export default App;
