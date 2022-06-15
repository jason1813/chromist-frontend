
import './Comment.css';
import React from 'react';
import { Component } from 'react';
import SideBySideVote from '../SideBySideVote';
import Network from '../../../network/network_calls';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            replies: [],
        }
    }

    render() {

        const moreRepliesCount = this.props.replyCount - this.state.replies.length

        return (
            <div className="comment"
                style={
                    this.props.isReply ? {
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
                    <p className='comment-author'>{this.props.author}</p>
                    <p className='comment-text'>{this.props.text}</p>
                    <SideBySideVote userUpvoted={this.props.userUpvoted} upvoteScore={this.props.upvoteScore} />
                    {
                        this.state.replies.length !== 0 &&
                        <div className='replies'>
                            {
                                this.state.replies.map((reply) =>
                                    <Comment
                                        key={reply.id}
                                        author={reply.author.username}
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
                        <a className='comment-more-replies' href="#" onClick={
                            () => {
                                Network.getReplies(this.props.id, this.props.replies.length).then(data => {
                                    console.log(data)
                                    this.setState({ replies: data })
                                })
                            }
                        }>{moreRepliesCount} more replies</a>
                    }
                </div>
            </div>
        )
    }
}

export default Comment;
