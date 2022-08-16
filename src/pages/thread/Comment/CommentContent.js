import { Component, useState } from "react";
import NetworkCall from "../../../network/NetworkCall";
import CreateReply from "../CreateReply/CreateReply";
import SideBySideVote from "../SideBySideVote/SideBySideVote";
import Comment from "./Comment";


function CommentContent(props) {

    const [showCreateReply, setShowCreateReply] = useState(false)
    const [replies, setReplies] = useState([])
    const [replyCount, setReplyCount] = useState(props.replyCount)

    const moreRepliesCount = replyCount - replies.length

    return (
        <div className='comment-content'>
            <p className='comment-text'>{props.text}</p>
            <div className='comment-vote-reply'>
                <SideBySideVote
                    userUpvoted={props.userUpvoted}
                    upvoteScore={props.upvoteScore}
                    setVoteData={props.setVoteData}
                />
                <a
                    className='comment-reply-link'
                    href="/#"
                    onClick={(e) => {
                        setShowCreateReply(true)
                        e.preventDefault()
                    }}
                >reply
                </a>
            </div>
            {showCreateReply &&
                <CreateReply 
                    cancelAction={() => setShowCreateReply(false)}
                    id={props.id}
                    addReply={
                        (data) => {
                            setReplies([data, ...replies])
                            setReplyCount(replyCount + 1)
                            setShowCreateReply(false)
                        }
                    }
                />
            }
            {
                replies.length !== 0 &&
                <div className='replies'>
                    {
                        replies.map((reply) =>
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
                        e.preventDefault()
                        NetworkCall.getReplies(props.id, replies.length).then(data => {
                            setReplies([...replies, ...data])
                        })
                    }
                }>{moreRepliesCount} more replies</a>
            }
        </div>
    )
}

export default CommentContent
