
import './CreateThread.css';
import React, { useState } from 'react';
import { StyledButton, StyledSubmitButton, StyledCancelButton } from '../../misc/js/StyledComponents';
import Network from '../../network/Network';

function CreateThread(props) {

    const [title, setTitle] = useState(``)
    const [description, setDescription] = useState(``)

    const handleSubmit = event => {
        event.preventDefault()
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
                <StyledCancelButton className='createthread-cancel'>
                    Cancel
                </StyledCancelButton>
                <StyledSubmitButton
                    disabled={!title}
                    className='createthread-post'
                    primary
                    value='Post'
                />
            </div>
        </form>
    )
}

export default CreateThread
