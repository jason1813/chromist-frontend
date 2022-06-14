
import './Comment.css';
import React from 'react';
import SideBySideVote from '../SideBySideVote';

function Comment(props) {

    console.log(props.replies)
    const moreRepliesCount = props.replyCount - props.replies.length

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

                {props.replies.length !== 0 &&
                    <div className='replies'>
                        {
                            props.replies.map((reply) =>
                                <Comment
                                    key={reply.id}
                                    author={reply.author}
                                    text={reply.text}
                                    userUpvoted={reply.userUpvoted}
                                    upvoteScore={reply.upvoteScore}
                                    isReply={true}
                                    replyCount={reply.replyCount}
                                    replies={[]}
                                />
                            )
                        }
                    </div>
                }

                {
                    moreRepliesCount > 0 &&
                    <a className='comment-more-replies' href="https://www.w3schools.com/">{moreRepliesCount} more replies</a>
                }
            </div>
        </div>
    )
}

export default Comment;
