import './ThreadDetail.css';
import React from 'react';
import ThreadDetailTop from './ThreadDetailTop';

function ThreadDetail(props) {

    return (
        <div className="thread-detail">
            <ThreadDetailTop />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default ThreadDetail;