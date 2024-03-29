import './ThreadDetailTop.css';
import React from 'react';
import SideBySideVote from '../../../misc/vote/SideBySideVote/SideBySideVote';
import DateFormatter from '../../../misc/js/DateFormatter';

export default function ThreadDetailTop(props) {
  return (
    <div className="thread-detail-top">
      <div className="thread-detail-top-left-side">
        <img
          className="thread-detail-top-profile"
          src={require('../../../misc/img/profile.png')}
          alt="profile"
        />
        <div className="thread-detail-top-author-date">
          <p className="thread-detail-top-author">{props.author.username}</p>
          <p className="thread-detail-top-date">
            {DateFormatter.isoToLongDateString(props.createdAt)}
          </p>
        </div>
      </div>
      <SideBySideVote
        nonUserVoteScore={props.nonUserVoteScore}
        voteStatus={props.voteStatus}
        setNewVoteStatus={props.setNewVoteStatus}
        loggedIn={props.loggedIn}
      />
    </div>
  );
}
