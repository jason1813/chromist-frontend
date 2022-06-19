
import './Thread.css';
import React from 'react';
import ThreadDetail from '../ThreadDetail/ThreadDetail';
import Comments from '../Comments/Comments';

function Thread(props) {

    return (
        <div className="thread">
            <ThreadDetail title='Is the Holy Trinity Biblical?' description="Is the Trinity a biblical concept?Come to think of it, I have never seen it mentioned in the Bible. Jesus speaks multiple times of how the he does the will of the Father in heaven and there are multiple times Jesus prays to God as well.Yes Jesus is our savior, but if he was God he would not need to pray to anyone.There is one God: Deuteronomy 6:4; 1 Corinthians 8:4; Galatians 3:20; 1 Timothy 2:5.I am not underestimating Jesus here. But why would we teach this if it's not in the Bible?" />
            <Comments threadID={435634264} />
        </div>
    )
}

export default Thread;
