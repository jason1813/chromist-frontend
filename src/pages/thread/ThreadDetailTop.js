import './ThreadDetailTop.css';
import { Component } from 'react';
import React from 'react';
import SideBySideVote from './SideBySideVote';

class ThreadDetailTop extends Component {

    render() {
        return (
            <div className="thread-detail-top">
                <div className='thread-detail-top-left-side'>
                    <img
                        className='thread-detail-top-profile'
                        src={require('../../misc/img/profile.png')}
                        alt="profile"
                    />
                    <div className='thread-detail-top-author-date'>
                        <p className='thread-detail-top-author'>bibleman6543</p>
                        <p className='thread-detail-top-date'>May 15, 2022 at 12:22pm</p>
                    </div>
                </div>
                <SideBySideVote upvoteScore='3.5k' userUpvoted='up' />
            </div>
        )
    }
}

export default ThreadDetailTop;
