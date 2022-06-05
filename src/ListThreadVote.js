
import './css/ListThreadVote.css';

function ListThreadVote(props) {
  return (
    <div className='ListThreadVote'>

      <img
        className='ListThreadVote-up-arrow'
        src={require('./img/up-arrow.png')}
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
        {props.upvoteScore}
      </p>

      <img
        className='ListThreadVote-down-arrow'
        src={require('./img/down-arrow.png')}
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
