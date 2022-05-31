import './App.css';
import { Component } from 'react';
import React from 'react';
import ListThread from './ListThread.js'

const threadData = [
  {
    id: 0,
    dateCreated: new Date(2018, 11, 24, 10, 33, 30, 0),
    author: "Ghewrof324",
    title: "Billy Napier: Florida Football Wont Get Involved in NIL Bidding Wars",
    description: "Can you imagine listening to the Tennessee and Oklahoma bands battle it out all game when they play each other? adsfasdf aser aefa asdrf aser adgf tadfs asdf",
    numberOfComments: 21,
    upVoteScore: -221,
    userUpvoted: "up",
  },
  {
    id: 1,
    dateCreated: new Date(2018, 11, 24, 10, 33, 30, 0),
    author: "twreuw45h",
    title: "Cubs Bears Bulls Buckeyes",
    description: "Can you imagine listening to the Tennessee and Oklahoma bands battle it out all game when they play each other? adsfasdf aser aefa asdrf aser adgf tadfs asdf",
    numberOfComments: 3,
    upVoteScore: 11,
    userUpvoted: "down",
  },
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      threadData: threadData
    }
  }
  
  render() {

    const threadProps = this.state.threadData.map((threadDataItem) =>
      <ListThread
        id={threadDataItem.id}
        dateCreated={threadDataItem.dateCreated}
        author={threadDataItem.author}
        title={threadDataItem.title}
        description={threadDataItem.description}
        numberOfComments={threadDataItem.numberOfComments}
        upVoteScore={threadDataItem.upVoteScore}
        userUpvoted={threadDataItem.userUpvoted}
      />
    )

    return (
      <div className="App">
        <header className="App-header">
          {threadProps}
        </header>
      </div>
    )
  }
}

export default App;
