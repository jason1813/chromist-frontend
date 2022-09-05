import './Threads.css';
import { useEffect } from 'react';
import React from 'react';
import ListThread from './ListThread.js';
import BottomBar from './BottomBar.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectThreadData,
  upvoteThread,
  neutralvoteThread,
  downvoteThread,
  setThreadData,
} from './threadSlice';
import Network from '../../network/Network';
import Constants from '../../misc/js/Constants';

export default function Threads(props) {
  const threadData = useSelector(selectThreadData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (threadData.length > 1) {
      return;
    }

    Network.getThreads()
      .then((data) => {
        dispatch(setThreadData(data));
      })
      .catch((error) => {
        alert('NETWORK ERROR: A network error has occurred.');
      });
  }, [dispatch, threadData.length]);

  return (
    <div className="threads">
      {threadData.map((threadDataItem, index) => (
        <ListThread
          key={threadDataItem.id}
          loggedIn={props.loggedIn}
          setNewVoteStatus={(newVoteStatus) => {
            if (newVoteStatus === Constants.voteStatus.UP) {
              dispatch(upvoteThread(index));
            } else if (newVoteStatus === Constants.voteStatus.NEUTRAL) {
              dispatch(neutralvoteThread(index));
            } else if (newVoteStatus === Constants.voteStatus.DOWN) {
              dispatch(downvoteThread(index));
            }

            Network.voteOnThread(threadDataItem.id, newVoteStatus)
              .then((data) => {})
              .catch((error) => {});
          }}
          index={index}
          {...threadDataItem}
        />
      ))}
      <BottomBar isNext={false} isPrevious={false} />
    </div>
  );
}
