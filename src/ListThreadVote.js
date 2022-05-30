
import './ListThreadVote.css';
import './colors.css'

function ListThreadVote(props) {
  return (
    <div className='ListThreadVote'>

      <img
        className='ListThreadVote-up-arrow'
        src={require('./up-arrow.png')}
        alt="up arrow"
        style={
          props.userUpvoted === "up" ? {
            filter: 'var(--honolulu-filter)'
          } : {
            filter: 'var(--gray-filter)'
          }
        }
      />

      <p className='ListThreadVote-upvote-score'>
        {props.upVoteScore}
      </p>

      <img
        className='ListThreadVote-down-arrow'
        src={require('./down-arrow.png')}
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

export default ListThreadVote;