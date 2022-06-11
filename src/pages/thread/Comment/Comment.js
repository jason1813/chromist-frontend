
import './Comment.css';
import React from 'react';
import SideBySideVote from '../SideBySideVote';

function Comment(props) {

    console.log(props.replies)

    return (
        <div className="comment">
            <a href='blah' className='comment-link'>
                <img
                    className='comment-profile'
                    src={require('../../../misc/img/profile.png')}
                    alt="profile"
                />
                <hr className='comment-line' />
            </a>
            <div className='comment-content'>
                <p className='comment-author'>{props.author}</p>
                <p className='comment-text'>{props.text}</p>
                <SideBySideVote userUpvoted={props.userUpvoted} upvoteScore={props.upvoteScore} />
                {props.replies != undefined && props.replies.length != 0 &&
                    <div className='replies'>
                        <Comment
                            author={props.replies[0].author}
                            text={props.replies[0].text}
                            userUpvoted={props.replies[0].userUpvoted}
                            upvoteScore={props.replies[0].upvoteScore}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default Comment;
