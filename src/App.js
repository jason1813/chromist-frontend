import './misc/css/App.css';
import { Component } from 'react';
import React from 'react';
import ListThread from './pages/threads/ListThread.js'
import getThreads from './network/network_calls';
import NavBar from './misc/js/NavBar.js'
import BottomBar from './pages/threads/BottomBar.js'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      threadData: [],
    }
  }

  componentDidMount() {
    getThreads.then(data => {
      this.setState({threadData: data})
      console.log(this.state)
    })
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
        upvoteScore={threadDataItem.upvoteScore}
        userUpvoted={threadDataItem.userUpvoted}
      />
    )

    return (
      <div className="App">
        <NavBar isLoggedIn={false} />
        <div className='threads'>
          {threadProps}
        </div>
        <BottomBar isNext={true} isPrevious={true} />
      </div>
    )
  }
}

export default App;
