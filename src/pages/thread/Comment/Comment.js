import './Comment.css';
import React from 'react';
import { Component } from 'react';
import DateFormatter from '../../../misc/js/DateFormatter';
import CommentContent from './CommentContent';

export default class Comment extends Component {
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
          {this.state.expandContent && <CommentContent {...this.props} />}
        </div>
      </div>
    );
  }
}
