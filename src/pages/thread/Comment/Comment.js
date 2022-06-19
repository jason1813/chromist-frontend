
import './Comment.css';
import React from 'react';
import { Component } from 'react';
import SideBySideVote from '../SideBySideVote/SideBySideVote';
import Network from '../../../network/network_calls';
import timeSince from '../../../misc/js/TimeSince';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            replies: [],
            expandContent: true
        }
    }

    render() {

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
                <div className='comment-link'
                    onClick={() => {
                        this.setState({ expandContent: !this.state.expandContent })
                    }}
                >
                    <img
                        className='comment-profile'
                        src={require('../../../misc/img/profile.png')}
                        alt="profile"
                    />
                    <hr className='comment-line' />
                </div>
                <div>
                    <div className='comment-author-date'>
                        <p className='comment-author'>{this.props.author.username}</p>
                        <p className='comment-date'>{timeSince(new Date(this.props.dateCreated))}</p>
                    </div>
                    {
                        this.state.expandContent &&
                        <this.CommentContent
                            id={this.props.id}
                            author={this.props.author}
                            text={this.props.text}
                            userUpvoted={this.props.userUpvoted}
                            upvoteScore={this.props.upvoteScore}
                            replies={this.state.replies}
                            replyCount={this.props.replyCount}
                            callback={(replies) => {
                                this.setState({ replies: replies })
                            }}
                        />
                    }
                </div>
            </div>
        )
    }

    CommentContent(props) {

        const moreRepliesCount = props.replyCount - props.replies.length

        return (
            <div className='comment-content'>
                <p className='comment-text'>{props.text}</p>
                <SideBySideVote userUpvoted={props.userUpvoted} upvoteScore={props.upvoteScore} />
                {
                    props.replies.length !== 0 &&
                    <div className='replies'>
                        {
                            props.replies.map((reply) =>
                                <Comment
                                    key={reply.id}
                                    author={reply.author.username}
                                    text={reply.text}
                                    userUpvoted={reply.userUpvoted}
                                    upvoteScore={reply.upvoteScore}
                                    replyCount={reply.replyCount}
                                    dateCreated={reply.dateCreated}
                                    replies={[]}
                                    isReply={true}
                                />
                            )
                        }
                    </div>
                }
                {
                    moreRepliesCount > 0 &&
                    <a className='comment-more-replies' href="/#" onClick={
                        (e) => {
                            Network.getReplies(props.id, props.replies.length).then(data => {
                                props.callback(data)
                            })
                            e.preventDefault()
                        }
                    }>{moreRepliesCount} more replies</a>
                }
            </div>
        )
    }
}

export default Comment;
