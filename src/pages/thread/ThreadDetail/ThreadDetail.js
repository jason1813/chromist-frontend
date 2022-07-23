import './ThreadDetail.css';
import React from 'react';
import ThreadDetailTop from '../ThreadDetailTop/ThreadDetailTop';
import Comments from '../Comments/Comments';

function ThreadDetail(props) {

    const threadDetailTopProps = {
        author: props.author,
        dateCreated: props.dateCreated,
        upvoteScore: props.upvoteScore,
        userUpvoted: props.userUpvoted
    }

    return (
        <div className="thread-detail">
            <ThreadDetailTop {...threadDetailTopProps} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default ThreadDetail;