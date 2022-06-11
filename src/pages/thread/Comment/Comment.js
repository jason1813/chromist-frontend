
import './Comment.css';
import React from 'react';
import SideBySideVote from '../SideBySideVote';

function Comment(props) {
    return (
        <div className="comment">
            <img
                className='comment-profile'
                src={require('../../../misc/img/profile.png')}
                alt="profile"
            />
            <div className='comment-content'>
                <p className='comment-author'>blabbermania78435</p>
                <p className='comment-text'>Lorem ipsum dolor sit amet, alii rebum postea eam ex. Et mei laoreet officiis, summo sensibus id mei.</p>
                <SideBySideVote userUpvoted="neutral" upvoteScore="432" />
            </div>
        </div>
    )
}

export default Comment;
