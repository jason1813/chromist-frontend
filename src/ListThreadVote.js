
import './ListThreadVote.css';

function ListThreadVote(props) {
  return (
    <div className='ListThreadVote'>

      <img 
        className='ListThreadVote-up-arrow'
        src={require('./up-arrow.png')}
        alt="up arrow"
      />

      <p className='ListThreadVote-upvote-score'>
        {props.upVoteScore}
      </p>

      <img 
        className='ListThreadVote-down-arrow'
        src={require('./down-arrow.png')}
        alt="down arrow"
      />
    </div>
  )
}

export default ListThreadVote;
