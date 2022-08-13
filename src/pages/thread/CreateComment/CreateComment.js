
import './CreateComment.css';
import React, { useState } from 'react';
import { StyledSubmitButton } from '../../../misc/js/StyledComponents';
import Network from '../../../network/Network';

function CreateComment(props) {

    const [commentText, setCommentText] = useState(``)
    const [disableCreateComment, setDisableCreateComment] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()

        setDisableCreateComment(true)

        Network.postNewComment(commentText).then(data => {
            props.addComment(data)
            setDisableCreateComment(false)
            setCommentText('')
        }).catch(error => {
            alert(`NETWORK ERROR: Comment could not be posted`)
            setDisableCreateComment(false)
        })
    }

    return (
        <form className="createcomment-form" onSubmit={handleSubmit}>
            <textarea
                id="createcomment-text"
                name="createcomment-text"
                className='createcomment-text'
                placeholder='Leave a comment'
                rows="4"
                maxLength={2000}
                onChange={e => setCommentText(e.target.value)}
                value = {commentText}
            />
            <StyledSubmitButton
                disabled={!commentText || disableCreateComment}
                className='createcomment-post'
                primary
                value='POST COMMENT'
            />
        </form>
    )
}

export default CreateComment
