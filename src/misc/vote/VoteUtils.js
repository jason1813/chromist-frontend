export default class VoteUtils {
  static voteStatus = {
    UP: 1,
    NEUTRAL: 0,
    DOWN: -1,
  };

  static getNonUserVoteScore = (voteScore, voteStatus) => {
    if (voteStatus === this.voteStatus.DOWN) {
      return (voteScore += 1);
    } else if (voteStatus === this.voteStatus.UP) {
      return (voteScore -= 1);
    } else {
      return voteScore;
    }
  };

  static getVoteScore = (nonUserVoteScore, voteStatus) => {
    if (voteStatus === this.voteStatus.UP) {
      return nonUserVoteScore + 1;
    } else if (voteStatus === this.voteStatus.DOWN) {
      return nonUserVoteScore - 1;
    } else {
      return nonUserVoteScore;
    }
  };

  static getNewVoteScore = (oldVoteScore, oldVoteStatus, newVoteStatus) => {
    if (oldVoteStatus === newVoteStatus) {
      return oldVoteScore;
    }

    const nonUserVoteScore = this.getNonUserVoteScore(oldVoteScore, oldVoteStatus);

    return this.getVoteScore(nonUserVoteScore, newVoteStatus);
  };
}
