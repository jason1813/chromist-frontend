import './ThreadDetail.css';
import React from 'react';
import ThreadDetailTop from '../ThreadDetailTop/ThreadDetailTop';

function ThreadDetail(props) {
  const threadDetailTopProps = {
    author: props.author,
    dateCreated: props.dateCreated,
    upvoteScore: props.upvoteScore,
    userUpvoted: props.userUpvoted,
    setVoteData: props.setVoteData,
    loggedIn: props.loggedIn,
  };

  return (
    <div className="thread-detail">
      <ThreadDetailTop {...threadDetailTopProps} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default ThreadDetail;
