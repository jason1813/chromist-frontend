
import './ListThread.css';
import ListThreadVote from './ListThreadVote.js'

function ListThread(props) {
  return (
    <div className="ListThread">
      <div className="TextContent">
        <h1 className='ListThread-title'>
          {props.title}
        </h1>

        <div className='ListThread-info'>
          <p className='ListThread-author'>
            {props.author}
          </p>
          <p className='ListThread-number-of-comments'>
            {props.numberOfComments} comments
          </p>
        </div>
      </div>

      <ListThreadVote upVoteScore={props.upVoteScore} userUpvoted={props.userUpvoted} />
    </div>
  );
}

export default ListThread;