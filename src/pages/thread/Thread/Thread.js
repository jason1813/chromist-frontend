import './Thread.css';
import React from 'react';
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
import Constants from '../../../misc/js/Constants';

export default function Thread(props) {
  const { id } = useParams();
  const location = useLocation();

  const allThreadData = useSelector(selectThreadData);
  const dispatch = useDispatch();

  const index = location.state.index;

  const singleThreadData = {
    ...allThreadData[index],
    setNewVoteStatus: (voteStatus) => {
      if (voteStatus === Constants.voteStatus.UP) {
        dispatch(upvoteThread(index));
      } else if (voteStatus === Constants.voteStatus.NEUTRAL) {
        dispatch(neutralvoteThread(index));
      } else if (voteStatus === Constants.voteStatus.DOWN) {
        dispatch(downvoteThread(index));
      }
      Network.voteOnThread(id, voteStatus)
        .then((data) => {})
        .catch((error) => {});
    },
    loggedIn: props.loggedIn,
  };

  return (
    <div className="thread">
      <ThreadDetail {...singleThreadData} />
      <Comments threadID={id} loggedIn={props.loggedIn} />
    </div>
  );
}
