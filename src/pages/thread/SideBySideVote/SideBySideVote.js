import './SideBySideVote.css';
import Constants from '../../../misc/js/Constants';

function SideBySideVote(props) {
  const voteHit = (voteStatusHit) => {
    if (!props.loggedIn) {
      return;
    }

    props.setNewVoteStatus(
      voteStatusHit === props.voteStatus
        ? Constants.voteStatus.NEUTRAL
        : voteStatusHit
    );
  };

  return (
    <div className="SideBySideVote">
      <img
        className="SideBySideVote-up-arrow"
        src={require('../../../misc/img/up-arrow.png')}
        alt="up arrow"
        style={
          props.voteStatus === Constants.voteStatus.UP
            ? {
                filter: 'var(--honolulu-filter)',
              }
            : {
                filter: 'var(--gray-filter)',
              }
        }
        onClick={() => voteHit(Constants.voteStatus.UP)}
      />

      <p className="SideBySideVote-voteScore">{props.voteScore}</p>

      <img
        className="SideBySideVote-down-arrow"
        src={require('../../../misc/img/down-arrow.png')}
        alt="down arrow"
        style={
          props.voteStatus === Constants.voteStatus.DOWN
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

export default SideBySideVote;
