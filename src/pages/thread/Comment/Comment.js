
import './Comment.css';
import React from 'react';
import SideBySideVote from '../SideBySideVote';

function Comment(props) {

    console.log(props.replies)

    return (
        <div className="comment"
            style={
                props.isReply ? {
                    marginTop: '6px',
                    marginLeft: '-5px'
                } : {
                    padding: '5px'
                }
            }
        >
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

                {props.replies !== undefined && props.replies.length !== 0 &&
                    <div className='replies'>
                        {
                            props.replies.map((reply) =>
                                <Comment
                                    author={reply.author}
                                    text={reply.text}
                                    userUpvoted={reply.userUpvoted}
                                    upvoteScore={reply.upvoteScore}
                                    isReply={true}
                                />
                            )
                        }
                    </div>
                }

            </div>
        </div>
    )
}

export default Comment;
