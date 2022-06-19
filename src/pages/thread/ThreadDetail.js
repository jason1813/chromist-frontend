import './ThreadDetail.css';
import React from 'react';
import ThreadDetailTop from './ThreadDetailTop';
import Comments from './Comments/Comments';

function ThreadDetail(props) {

    return (
        <div className="thread-detail">
            <ThreadDetailTop />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Comments threadID={435634264} />
        </div>
    )
}

export default ThreadDetail;