import './Threads.css';
import { Component } from 'react';
import React from 'react';
import ListThread from './ListThread.js'
import getThreads from '../../network/network_calls';
import BottomBar from './BottomBar.js'

class Threads extends Component {

    constructor(props) {
        super(props);
        this.state = {
            threadData: [],
        }
    }

    componentDidMount() {
        getThreads.then(data => {
            this.setState({ threadData: data })
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
            <div className="threads">
                <div className='threads-list'>
                    {threadProps}
                </div>
                <BottomBar isNext={true} isPrevious={false} />
            </div>
        )
    }
}

export default Threads;
