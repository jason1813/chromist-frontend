import './ListThreadVote.css';
import Constants from '../../misc/js/Constants';

function ListThreadVote(props) {
  const voteHit = (voteStatusHit) => {
    if (!props.loggedIn) {
      return;
    }

    props.setNewVoteStatus(
      props.voteStatus === voteStatusHit
        ? Constants.voteStatus.NEUTRAL
        : voteStatusHit
    );
  };

  return (
    <div className="ListThreadVote">
      <img
        className="ListThreadVote-up-arrow"
        src={require('../../misc/img/up-arrow.png')}
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

      <p className="ListThreadVote-voteScore">{props.voteScore}</p>

      <img
        className="ListThreadVote-down-arrow"
        src={require('../../misc/img/down-arrow.png')}
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

export default ListThreadVote;
