import './Comment.css';
import React from 'react';
import { Component } from 'react';
import SideBySideVote from '../SideBySideVote/SideBySideVote';
import NetworkCall from '../../../network/NetworkCall';
import DateFormatter from '../../../misc/js/DateFormatter';
import Network from '../../../network/Network';
import CreateReply from '../CreateReply/CreateReply';
import CommentContent from './CommentContent';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandContent: true,
    };
  }

  render() {
    return (
      <div
        className="comment"
        style={
          this.props.isReply
            ? {
                marginTop: '6px',
                marginLeft: '-5px',
              }
            : {
                padding: '5px',
              }
        }
      >
        <div
          className="comment-link"
          onClick={() => {
            this.setState({ expandContent: !this.state.expandContent });
          }}
        >
          <img
            className="comment-profile"
            src={require('../../../misc/img/profile.png')}
            alt="profile"
          />
          <hr className="comment-line" />
        </div>
        <div>
          <div className="comment-author-date">
            <p className="comment-author">{this.props.author.username}</p>
            <p className="comment-date">
              {DateFormatter.timeSince(new Date(this.props.dateCreated))}
            </p>
          </div>
          {this.state.expandContent && (
            <CommentContent
              id={this.props.id}
              author={this.props.author}
              text={this.props.text}
              voteStatus={this.props.voteStatus}
              voteScore={this.props.voteScore}
              loggedIn={this.props.loggedIn}
              replyCount={this.props.replyCount}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Comment;
