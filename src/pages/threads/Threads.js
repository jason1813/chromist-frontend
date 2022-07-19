import './Threads.css';
import { Component } from 'react';
import React from 'react';
import ListThread from './ListThread.js'
import NetworkCall from '../../network/NetworkCall';
import BottomBar from './BottomBar.js'

class Threads extends Component {

    constructor(props) {
        super(props);
        this.state = {
            threadData: [],
        }
    }

    componentDidMount() {
        NetworkCall.getThreads.then(data => {
            this.setState({ threadData: data })
        })
    }

    render() {

        const threadProps = this.state.threadData.map((threadDataItem) =>
            <ListThread
                key={threadDataItem.id}
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
            <div className="threads">
                {threadProps}
                <BottomBar isNext={true} isPrevious={false} />
            </div>
        )
    }
}

export default Threads;
