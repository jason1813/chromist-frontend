import './ThreadDetail.css';
import React from 'react';
import ThreadDetailTop from '../ThreadDetailTop/ThreadDetailTop';

export default function ThreadDetail(props) {
  const threadDetailTopProps = {
    author: props.author,
    createdAt: props.createdAt,
    nonUserVoteScore: props.voteScore,
    voteStatus: props.voteStatus,
    setNewVoteStatus: props.setNewVoteStatus,
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
