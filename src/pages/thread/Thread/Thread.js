
import './Thread.css';
import React from 'react';
import ThreadDetail from '../ThreadDetail/ThreadDetail';
import Comments from '../Comments/Comments';
import { Component } from 'react';
import { useLocation, useParams } from 'react-router-dom';


function Thread() {

    const { id } = useParams()
    const location = useLocation()
    const { title, description } = location.state;

    return (
        <div className="thread">
            <ThreadDetail title={title} description={description} />
            <Comments threadID={id} />
        </div>
    )
}

export default Thread;
