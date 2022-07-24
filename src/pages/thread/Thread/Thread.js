
import './Thread.css';
import React from 'react';
import ThreadDetail from '../ThreadDetail/ThreadDetail';
import Comments from '../Comments/Comments';
import { useLocation, useParams } from 'react-router-dom';


function Thread() {

    const { id } = useParams()
    const location = useLocation()

    return (
        <div className="thread">
            <ThreadDetail {...location.state} />
            <Comments threadID={id} />
        </div>
    )
}

export default Thread;
