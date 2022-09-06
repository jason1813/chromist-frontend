import './Thread.css';
import React, { useEffect, useState } from 'react';
import ThreadDetail from '../ThreadDetail/ThreadDetail';
import Comments from '../Comments/Comments';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectThreadData,
  upvoteThread,
  neutralvoteThread,
  downvoteThread,
} from '../../threads/threadSlice';
import Network from '../../../network/Network';
import VoteUtils from '../../../misc/vote/VoteUtils';

export default function Thread(props) {
  const { id } = useParams();
  const location = useLocation();
  const locationState = location.state;

  const allThreadData = useSelector(selectThreadData);
  const dispatch = useDispatch();

  const hasLocationSetSingleThreadData = (index) => {
    return {
      ...allThreadData[index],
      setNewVoteStatus: (voteStatus) => {
        if (voteStatus === VoteUtils.voteStatus.UP) {
          dispatch(upvoteThread(index));
        } else if (voteStatus === VoteUtils.voteStatus.NEUTRAL) {
          dispatch(neutralvoteThread(index));
        } else if (voteStatus === VoteUtils.voteStatus.DOWN) {
          dispatch(downvoteThread(index));
        }
        Network.voteOnThread(id, voteStatus)
          .then((data) => {})
          .catch((error) => {});
      },
      loggedIn: props.loggedIn,
    };
  };

  const [singleThreadData, setSingleThreadData] = useState(
    locationState && allThreadData.length
      ? hasLocationSetSingleThreadData(locationState.index)
      : null
  );

  useEffect(() => {
    if (locationState && allThreadData.length) return;

    Network.getThread(id)
      .then((data) => {
        setSingleThreadData({
          ...data,
          setNewVoteStatus: (voteStatus) => {
            Network.voteOnThread(id, voteStatus)
              .then((data) => {})
              .catch((error) => {});
          },
          loggedIn: props.loggedIn,
        });
      })
      .catch((error) => {
        alert('NETWORK ERROR: A network error has occurred.');
      });
  }, [props.loggedIn, id, locationState, allThreadData]);

  return (
    <div className="thread">
      {singleThreadData && <ThreadDetail {...singleThreadData} />}
      <Comments threadID={id} loggedIn={props.loggedIn} />
    </div>
  );
}
