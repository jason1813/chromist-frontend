import Constants from '../js/Constants';

export default function Vote(props) {
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
    <div className={props.className}>
      <img
        className={`${props.className}-up-arrow`}
        src={require('../img/up-arrow.png')}
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

      <p className={`${props.className}-voteScore`}>{props.voteScore}</p>

      <img
        className={`${props.className}-down-arrow`}
        src={require('../img/down-arrow.png')}
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
