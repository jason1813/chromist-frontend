import { Component, useState } from 'react';
import Network from '../../../network/Network';
import NetworkCall from '../../../network/NetworkCall';
import CreateReply from '../CreateReply/CreateReply';
import SideBySideVote from '../SideBySideVote/SideBySideVote';
import Comment from './Comment';

function CommentContent(props) {
  const [showCreateReply, setShowCreateReply] = useState(false);
  const [replies, setReplies] = useState([]);
  const [replyCount, setReplyCount] = useState(props.replyCount);
  const [voteStatus, setVoteStatus] = useState(props.voteStatus);
  const [voteScore, setVoteScore] = useState(props.voteScore);

  const moreRepliesCount = replyCount - replies.length;

  return (
    <div className="comment-content">
      <p className="comment-text">{props.text}</p>
      <div className="comment-vote-reply">
        <SideBySideVote
          voteStatus={voteStatus}
          voteScore={voteScore}
          setVoteData={(voteStatus, voteScore) => {
            setVoteStatus(voteStatus);
            setVoteScore(voteScore);

            Network.voteOnThread(props.id, voteStatus)
              .then((data) => {})
              .catch((error) => {});
          }}
          loggedIn={props.loggedIn}
        />
        {props.loggedIn && (
          <a
            className="comment-reply-link"
            href="/#"
            onClick={(e) => {
              setShowCreateReply(true);
              e.preventDefault();
            }}
          >
            reply
          </a>
        )}
      </div>
      {showCreateReply && (
        <CreateReply
          cancelAction={() => setShowCreateReply(false)}
          id={props.id}
          addReply={(data) => {
            setReplies([data, ...replies]);
            setReplyCount(replyCount + 1);
            setShowCreateReply(false);
          }}
        />
      )}
      {replies.length !== 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              author={reply.author.username}
              text={reply.text}
              voteStatus={reply.voteStatus}
              voteScore={reply.voteScore}
              replyCount={reply.replyCount}
              dateCreated={reply.dateCreated}
              replies={[]}
              isReply={true}
              loggedIn={props.loggedIn}
            />
          ))}
        </div>
      )}
      {moreRepliesCount > 0 && (
        <a
          className="comment-more-replies"
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            NetworkCall.getReplies(props.id, replies.length).then((data) => {
              setReplies([...replies, ...data]);
            });
          }}
        >
          {moreRepliesCount} more replies
        </a>
      )}
    </div>
  );
}

export default CommentContent;
