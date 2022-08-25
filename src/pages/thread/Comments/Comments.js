import "./Comments.css";
import { Component } from "react";
import React from "react";
import NetworkCall from "../../../network/NetworkCall";
import Comment from "../Comment/Comment";
import CreateComment from "../CreateComment/CreateComment";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    NetworkCall.getComments(this.props.threadID).then((data) => {
      this.setState({ comments: data });
    });
  }

  render() {
    const comments = this.state.comments.map((comment) => (
      <Comment key={comment.id} {...comment} loggedIn={this.props.loggedIn} />
    ));

    return (
      <div className="comments">
        {this.props.loggedIn && (
          <CreateComment
            addComment={(data) => {
              this.setState({ comments: [data, ...this.state.comments] });
            }}
          />
        )}

        {comments}
      </div>
    );
  }
}

export default Comments;
