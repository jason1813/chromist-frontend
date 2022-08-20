
import './CreateThread.css';
import React, { useState } from 'react';
import { StyledSubmitButton, StyledCancelButton } from '../../misc/js/StyledComponents';
import Network from '../../network/Network';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addThread } from '../threads/threadSlice';

function CreateThread() {

    const [title, setTitle] = useState(``)
    const [description, setDescription] = useState(``)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()

        Network.postNewThread(title, description).then(data => {
            dispatch(addThread(data))
            navigate(`/threads/${data.id}`, { replace: true, state: { index: 0 } })
        }).catch(error => {
            alert(`NETWORK ERROR: Thread could not be posted`)
        })
    }

    return (
        <form className="createthread-form" onSubmit={handleSubmit}>
            <input
                type='text'
                id="title"
                name="title"
                className='createthread-title'
                placeholder='Title'
                maxLength={85}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea
                id="description"
                name="description"
                className='createthread-description'
                placeholder='Description'
                rows="8"
                maxLength={1000}
                onChange={e => setDescription(e.target.value)}
            />
            <div className='createthread-buttons'>
                <StyledCancelButton
                    type="button"  // This stops it from being a submit button
                    className='createthread-cancel'
                    onClick={() => navigate(-1)}
                >
                    CANCEL
                </StyledCancelButton>
                <StyledSubmitButton
                    disabled={!title}
                    className='createthread-post'
                    primary
                    value='POST'
                />
            </div>
        </form>
    )
}

export default CreateThread
