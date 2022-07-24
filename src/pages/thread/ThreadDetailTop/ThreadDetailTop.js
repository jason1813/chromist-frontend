import './ThreadDetailTop.css';
import React from 'react';
import SideBySideVote from '../SideBySideVote/SideBySideVote';
import DateFormatter from '../../../misc/js/DateFormatter';

function ThreadDetailTop(props) {

    return (
        <div className="thread-detail-top">
            <div className='thread-detail-top-left-side'>
                <img
                    className='thread-detail-top-profile'
                    src={require('../../../misc/img/profile.png')}
                    alt="profile"
                />
                <div className='thread-detail-top-author-date'>
                    <p className='thread-detail-top-author'>{props.author.username}</p>
                    <p className='thread-detail-top-date'>{DateFormatter.isoToLongDateString(props.dateCreated)}</p>
                </div>
            </div>
            <SideBySideVote upvoteScore={props.upvoteScore} userUpvoted={props.userUpvoted} />
        </div>
    )
}

export default ThreadDetailTop;
