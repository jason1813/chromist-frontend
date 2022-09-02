import './ListThread.css';
import VerticalVote from '../../misc/vote/VerticalVote/VerticalVote';
import { Link } from 'react-router-dom';

export default function ListThread(props) {
  return (
    <div className="ListThread">
      <Link
        to={`/threads/${props.id}`}
        style={{ textDecoration: 'none' }}
        state={{ index: props.index }}
        className="ListThread-link"
      >
        <h1 className="ListThread-title">{props.title}</h1>

        <div className="ListThread-info">
          <p className="ListThread-author">{props.author.username}</p>
          <p className="ListThread-number-of-comments">
            {props.numberOfComments} comments
          </p>
        </div>
      </Link>

      <VerticalVote
        voteScore={props.voteScore}
        voteStatus={props.voteStatus}
        setNewVoteStatus={props.setNewVoteStatus}
        loggedIn={props.loggedIn}
      />
    </div>
  );
}
