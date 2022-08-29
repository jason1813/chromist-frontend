import './Threads.css';
import { useEffect } from 'react';
import React from 'react';
import ListThread from './ListThread.js';
import NetworkCall from '../../network/NetworkCall';
import BottomBar from './BottomBar.js';
import { useSelector, useDispatch } from 'react-redux';
import { setThreadData, selectThreadData } from './threadSlice';
import Network from '../../network/Network';

function Threads(props) {
  const threadData = useSelector(selectThreadData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (threadData.length !== 0) {
      return;
    }

    NetworkCall.getThreads
      .then((data) => {
        dispatch(setThreadData(data));
      })
      .catch((error) => {
        alert('NETWORK ERROR: A network error has occurred.');
      });
  }, []);

  return (
    <div className="threads">
      {threadData.map((threadDataItem, index) => (
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
          loggedIn={props.loggedIn}
          setVoteData={(voteStatus, voteScore) => {
            let newThreadData = structuredClone(threadData);
            newThreadData[index].userUpvoted = voteStatus;
            newThreadData[index].upvoteScore = voteScore;
            dispatch(setThreadData(newThreadData));

            Network.voteOnThread(threadDataItem.id, voteStatus)
              .then((data) => {})
              .catch((error) => {});
          }}
          index={index}
        />
      ))}
      <BottomBar isNext={false} isPrevious={false} />
    </div>
  );
}

export default Threads;
