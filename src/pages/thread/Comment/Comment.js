import './Comment.css';
import React, { useState } from 'react';
import DateFormatter from '../../../misc/js/DateFormatter';
import CommentContent from './CommentContent';

export default function Comment(props) {
  const [expandContent, setExpandContent] = useState(true);

  return (
    <div
      className="comment"
      style={
        props.isReply
          ? {
              marginTop: '6px',
              marginLeft: '-5px',
            }
          : {
              padding: '5px',
            }
      }
    >
      <div
        className="comment-link"
        onClick={() => {
          setExpandContent(!expandContent);
        }}
      >
        <img
          className="comment-profile"
          src={require('../../../misc/img/profile.png')}
          alt="profile"
        />
        <hr className="comment-line" />
      </div>
      <div>
        <div className="comment-author-date">
          <p className="comment-author">{props.author.username}</p>
          <p className="comment-date">{DateFormatter.timeSince(new Date(props.createdAt))}</p>
        </div>
        {expandContent && <CommentContent {...props} />}
      </div>
    </div>
  );
}
