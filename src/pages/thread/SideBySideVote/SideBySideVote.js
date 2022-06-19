
import './SideBySideVote.css';

function SideBySideVote(props) {
  return (
    <div className='SideBySideVote'>

      <img
        className='SideBySideVote-up-arrow'
        src={require('../../../misc/img/up-arrow.png')}
        alt="up arrow"
        style={
          props.userUpvoted === "up" ? {
            filter: 'var(--honolulu-filter)'
          } : {
            filter: 'var(--gray-filter)'
          }
        }
      />

      <p className='SideBySideVote-upvote-score'>
        {props.upvoteScore}
      </p>

      <img
        className='SideBySideVote-down-arrow'
        src={require('../../../misc/img/down-arrow.png')}
        alt="down arrow"
        style={
          props.userUpvoted === "down" ? {
            filter: 'var(--honolulu-filter)'
          } : {
            filter: 'var(--gray-filter)'
          }
        }
      />
    </div>
  )
}

export default SideBySideVote;
