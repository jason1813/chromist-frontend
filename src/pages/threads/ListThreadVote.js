
import './ListThreadVote.css';
import { useState } from 'react';
import Constants from '../../misc/js/Constants';

function ListThreadVote(props) {

  const [voteStatus, setVoteStatus] = useState(props.userUpvoted)
  const [voteScore, setVoteScore] = useState(props.upvoteScore)

  const upVoteHit = () => {

    if (voteStatus === Constants.voteStatus.NEUTRAL) {
      setVoteStatus(Constants.voteStatus.UP)
      setVoteScore(voteScore+1)

    } else if (voteStatus === Constants.voteStatus.DOWN) {
      setVoteStatus(Constants.voteStatus.UP)
      setVoteScore(voteScore+2)

    } else if (voteStatus === Constants.voteStatus.UP) {
      setVoteStatus(Constants.voteStatus.NEUTRAL)
      setVoteScore(voteScore-1)
    }
  }

  const downVoteHit = () => {

    if (voteStatus === Constants.voteStatus.NEUTRAL) {
      setVoteStatus(Constants.voteStatus.DOWN)
      setVoteScore(voteScore-1)

    } else if (voteStatus === Constants.voteStatus.DOWN) {
      setVoteStatus(Constants.voteStatus.NEUTRAL)
      setVoteScore(voteScore+1)

    } else if (voteStatus === Constants.voteStatus.UP) {
      setVoteStatus(Constants.voteStatus.DOWN)
      setVoteScore(voteScore-2)
    }
  }

  return (
    <div className='ListThreadVote'>

      <img
        className='ListThreadVote-up-arrow'
        src={require('../../misc/img/up-arrow.png')}
        alt="up arrow"
        style={
          voteStatus === Constants.voteStatus.UP ? {
            filter: 'var(--honolulu-filter)'
          } : {
            filter: 'var(--gray-filter)'
          }
        }
        onClick={upVoteHit}
      />

      <p className='ListThreadVote-upvote-score'>
        {voteScore}
      </p>

      <img
        className='ListThreadVote-down-arrow'
        src={require('../../misc/img/down-arrow.png')}
        alt="down arrow"
        style={
          voteStatus === Constants.voteStatus.DOWN ? {
            filter: 'var(--honolulu-filter)'
          } : {
            filter: 'var(--gray-filter)'
          }
        }
        onClick={downVoteHit}
      />
    </div>
  )
}

export default ListThreadVote
