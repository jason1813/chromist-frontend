import { useState } from 'react';
import VoteUtils from './VoteUtils';

export default function Vote(props) {
  const [voteStatus, setVoteStatus] = useState(props.voteStatus);
  const [voteScore, setVoteScore] = useState(props.voteScore);

  const voteHit = (voteStatusHit) => {
    if (!props.loggedIn) {
      return;
    }

    const newVoteStatus =
      voteStatusHit === voteStatus
        ? VoteUtils.voteStatus.NEUTRAL
        : voteStatusHit;

    props.setNewVoteStatus(newVoteStatus);
    setVoteScore(
      VoteUtils.getNewVoteScore(voteScore, voteStatus, newVoteStatus)
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
          voteStatus === VoteUtils.voteStatus.UP
            ? {
                filter: 'var(--honolulu-filter)',
              }
            : {
                filter: 'var(--gray-filter)',
              }
        }
        onClick={() => voteHit(VoteUtils.voteStatus.UP)}
      />

      <p className={`${props.className}-voteScore`}>{voteScore}</p>

      <img
        className={`${props.className}-down-arrow`}
        src={require('../img/down-arrow.png')}
        alt="down arrow"
        style={
          voteStatus === VoteUtils.voteStatus.DOWN
            ? {
                filter: 'var(--honolulu-filter)',
              }
            : {
                filter: 'var(--gray-filter)',
              }
        }
        onClick={() => voteHit(VoteUtils.voteStatus.DOWN)}
      />
    </div>
  );
}
