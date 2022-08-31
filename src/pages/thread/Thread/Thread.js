import './Thread.css';
import React from 'react';
import ThreadDetail from '../ThreadDetail/ThreadDetail';
import Comments from '../Comments/Comments';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setThreadData, selectThreadData } from '../../threads/threadSlice';
import Network from '../../../network/Network';

function Thread(props) {
  const { id } = useParams();
  const location = useLocation();

  const allThreadData = useSelector(selectThreadData);
  const dispatch = useDispatch();

  const index = location.state.index;

  let singleThreadData = {
    ...allThreadData[index],
    setVoteData: (voteStatus, voteScore) => {
      const newThreadData = structuredClone(allThreadData);
      newThreadData[index].voteStatus = voteStatus;
      newThreadData[index].voteScore = voteScore;
      dispatch(setThreadData(newThreadData));

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

export default Thread;
