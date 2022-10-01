import './Comments.css';
import { useEffect, useState } from 'react';
import React from 'react';
import Comment from '../Comment/Comment';
import CreateComment from '../CreateComment/CreateComment';
import Network from '../../../network/Network';

export default function Comments(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Network.getComments(props.threadID).then((data) => {
      setComments(data);
    });
  }, [props.threadID]);

  const commentComponents = comments.map((comment) => (
    <Comment key={comment.id} {...comment} loggedIn={props.loggedIn} />
  ));

  if (!comments.length) {
    return;
  }

  return (
    <div className="comments">
      {props.loggedIn && (
        <CreateComment
          addComment={(data) => {
            setComments([data, ...comments]);
          }}
          threadID={props.threadID}
          threadIndex={props.threadIndex}
        />
      )}

      {commentComponents}
    </div>
  );
}
