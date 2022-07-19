
import './Comments.css';
import { Component } from 'react';
import React from 'react';
import NetworkCall from '../../../network/NetworkCall';
import Comment from '../Comment/Comment';

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }

    componentDidMount() {
        NetworkCall.getComments(this.props.threadID).then(data => {
            this.setState({ comments: data })
        })
    }

    render() {

        const comments = this.state.comments.map((comment) =>
            <Comment key={comment.id} {...comment} />
        )

        return (
            <div className="comments">
                {comments}
            </div>
        )
    }
}

export default Comments;
