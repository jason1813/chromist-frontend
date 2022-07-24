import './Threads.css';
import { Component, useEffect } from 'react';
import React from 'react';
import ListThread from './ListThread.js'
import NetworkCall from '../../network/NetworkCall';
import BottomBar from './BottomBar.js'
import { useSelector, useDispatch } from 'react-redux'
import { setThreadData, addThread } from './threadSlice'

function Threads() {

    const threadData = useSelector((state) => state.thread.threadData)
    const dispatch = useDispatch()

    useEffect(() => {
        NetworkCall.getThreads.then(data => {
            dispatch(setThreadData(data))
        })
    })

    const threadsArray = (threadItem) => {
        return Object.keys(threadItem)
            .map((threadKey) => threadItem[threadKey]);
    };

    return (
        <div className="threads">
            {threadsArray(threadData).map((threadDataItem) =>
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
            )}
            <BottomBar isNext={true} isPrevious={false} />
        </div>
    )
}

export default Threads;
