import './Comments.css';
import { useEffect, useState } from 'react';
import React from 'react';
import NetworkCall from '../../../network/NetworkCall';
import Comment from '../Comment/Comment';
import CreateComment from '../CreateComment/CreateComment';

export default function Comments(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    NetworkCall.getComments(props.threadID).then((data) => {
      setComments(data);
    });
  }, []);

  const commentComponents = comments.map((comment) => (
    <Comment key={comment.id} {...comment} loggedIn={props.loggedIn} />
  ));

  return (
    <div className="comments">
      {props.loggedIn && (
        <CreateComment
          addComment={(data) => {
            setComments([data, ...comments]);
          }}
        />
      )}

      {commentComponents}
    </div>
  );
}
