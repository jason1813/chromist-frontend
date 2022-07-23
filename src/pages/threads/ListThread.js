
import './ListThread.css';
import ListThreadVote from './ListThreadVote.js'
import { Link } from "react-router-dom";

function ListThread(props) {

  return (
    <Link
      to={`/threads/${props.id}`}
      style={{ textDecoration: 'none' }}
      state={props}
    >
      <div className="ListThread">
        <div className="TextContent">
          <h1 className='ListThread-title'>
            {props.title}
          </h1>

          <div className='ListThread-info'>
            <p className='ListThread-author'>
              {props.author.username}
            </p>
            <p className='ListThread-number-of-comments'>
              {props.numberOfComments} comments
            </p>
          </div>
        </div>

        <ListThreadVote upvoteScore={props.upvoteScore} userUpvoted={props.userUpvoted} />
      </div>
    </Link>
  );
}

export default ListThread;
