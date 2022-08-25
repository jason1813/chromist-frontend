import "./SideBySideVote.css";
import Constants from "../../../misc/js/Constants";

function SideBySideVote(props) {
  const upVoteHit = () => {
    if (!props.loggedIn) {
      return;
    }

    if (props.userUpvoted === Constants.voteStatus.NEUTRAL) {
      props.setVoteData(Constants.voteStatus.UP, props.upvoteScore + 1);
    } else if (props.userUpvoted === Constants.voteStatus.DOWN) {
      props.setVoteData(Constants.voteStatus.UP, props.upvoteScore + 2);
    } else if (props.userUpvoted === Constants.voteStatus.UP) {
      props.setVoteData(Constants.voteStatus.NEUTRAL, props.upvoteScore - 1);
    }
  };

  const downVoteHit = () => {
    if (!props.loggedIn) {
      return;
    }

    if (props.userUpvoted === Constants.voteStatus.NEUTRAL) {
      props.setVoteData(Constants.voteStatus.DOWN, props.upvoteScore - 1);
    } else if (props.userUpvoted === Constants.voteStatus.DOWN) {
      props.setVoteData(Constants.voteStatus.NEUTRAL, props.upvoteScore + 1);
    } else if (props.userUpvoted === Constants.voteStatus.UP) {
      props.setVoteData(Constants.voteStatus.DOWN, props.upvoteScore - 2);
    }
  };

  return (
    <div className="SideBySideVote">
      <img
        className="SideBySideVote-up-arrow"
        src={require("../../../misc/img/up-arrow.png")}
        alt="up arrow"
        style={
          props.userUpvoted === Constants.voteStatus.UP
            ? {
                filter: "var(--honolulu-filter)",
              }
            : {
                filter: "var(--gray-filter)",
              }
        }
        onClick={upVoteHit}
      />

      <p className="SideBySideVote-upvote-score">{props.upvoteScore}</p>

      <img
        className="SideBySideVote-down-arrow"
        src={require("../../../misc/img/down-arrow.png")}
        alt="down arrow"
        style={
          props.userUpvoted === Constants.voteStatus.DOWN
            ? {
                filter: "var(--honolulu-filter)",
              }
            : {
                filter: "var(--gray-filter)",
              }
        }
        onClick={downVoteHit}
      />
    </div>
  );
}

export default SideBySideVote;
