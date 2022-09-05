import { useState } from 'react';
import Constants from '../js/Constants';

export default function Vote(props) {
  const [voteStatus, setVoteStatus] = useState(props.voteStatus);
  const [voteScore, setVoteScore] = useState(props.voteScore);

  const voteHit = (voteStatusHit) => {
    if (!props.loggedIn) {
      return;
    }

    const newVoteStatus =
      voteStatusHit === voteStatus
        ? Constants.voteStatus.NEUTRAL
        : voteStatusHit;

    props.setNewVoteStatus(newVoteStatus);

    setVoteScore(
      Constants.getNewVoteScore(voteScore, voteStatus, newVoteStatus)
    );
    setVoteStatus(newVoteStatus);
  };

  return (
    <div className={props.className}>
      <img
        className={`${props.className}-up-arrow`}
        src={require('../img/up-arrow.png')}
        alt="up arrow"
        style={
          voteStatus === Constants.voteStatus.UP
            ? {
                filter: 'var(--honolulu-filter)',
              }
            : {
                filter: 'var(--gray-filter)',
              }
        }
        onClick={() => voteHit(Constants.voteStatus.UP)}
      />

      <p className={`${props.className}-voteScore`}>{voteScore}</p>

      <img
        className={`${props.className}-down-arrow`}
        src={require('../img/down-arrow.png')}
        alt="down arrow"
        style={
          voteStatus === Constants.voteStatus.DOWN
            ? {
                filter: 'var(--honolulu-filter)',
              }
            : {
                filter: 'var(--gray-filter)',
              }
        }
        onClick={() => voteHit(Constants.voteStatus.DOWN)}
      />
    </div>
  );
}
