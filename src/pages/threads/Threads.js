import './Threads.css';
import { useCallback, useEffect, useState } from 'react';
import React from 'react';
import ListThread from './ListThread.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectThreadData,
  upvoteThread,
  neutralvoteThread,
  downvoteThread,
  addThreads,
  selectMoreThreadsExist,
  setMoreThreadsExist,
} from './threadSlice';
import Network from '../../network/Network';
import VoteUtils from '../../misc/vote/VoteUtils';
import { StyledButton } from '../../misc/js/StyledComponents';

export default function Threads(props) {
  const threadData = useSelector(selectThreadData);
  const dispatch = useDispatch();
  const moreThreadsExist = useSelector(selectMoreThreadsExist);

  const getThreads = useCallback(() => {
    Network.getThreads(threadData.length)
      .then((data) => {
        dispatch(addThreads(data));
        dispatch(setMoreThreadsExist(data.length === 25));
      })
      .catch((error) => {
        alert('NETWORK ERROR: A network error has occurred.');
      });
  }, [dispatch, threadData.length]);

  const loadMoreThreads = (event) => {
    event.preventDefault();
    getThreads();
  };

  useEffect(() => {
    if (threadData.length > 1) {
      return;
    }
    getThreads();
  }, [getThreads, threadData.length]);

  return (
    <div className="threads">
      {threadData.map((threadDataItem, index) => (
        <ListThread
          key={threadDataItem.id}
          loggedIn={props.loggedIn}
          setNewVoteStatus={(newVoteStatus) => {
            if (newVoteStatus === VoteUtils.voteStatus.UP) {
              dispatch(upvoteThread(index));
            } else if (newVoteStatus === VoteUtils.voteStatus.NEUTRAL) {
              dispatch(neutralvoteThread(index));
            } else if (newVoteStatus === VoteUtils.voteStatus.DOWN) {
              dispatch(downvoteThread(index));
            }

            Network.voteOnThread(threadDataItem.id, newVoteStatus)
              .then(() => {})
              .catch(() => {});
          }}
          index={index}
          {...threadDataItem}
        />
      ))}
      {moreThreadsExist && (
        <StyledButton primary className="threads-load-more" onClick={loadMoreThreads}>
          LOAD MORE
        </StyledButton>
      )}
    </div>
  );
}
