
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
                <p className='comment-author'>{props.author}</p>
                <p className='comment-text'>{props.text}</p>
                <SideBySideVote userUpvoted={props.userUpvoted} upvoteScore={props.upvoteScore} />
            </div>
        </div>
    )
}

export default Comment;
