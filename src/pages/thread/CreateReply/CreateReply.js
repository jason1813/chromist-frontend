import './CreateReply.css';
import React, { useState } from 'react';
import { StyledCancelButton, StyledSubmitButton } from '../../../misc/js/StyledComponents';
import Network from '../../../network/Network';

export default function CreateReply(props) {
  const [replyText, setReplyText] = useState('');
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setDisableSubmitButton(true);

    Network.postNewReply(props.id, replyText)
      .then((data) => {
        props.addReply(data);
      })
      .catch((error) => {
        alert('NETWORK ERROR: Reply could not be posted');
        setDisableSubmitButton(false);
      });
  };

  return (
    <form className="createreply-form" onSubmit={handleSubmit}>
      <textarea
        id="createreply-text"
        name="createreply-text"
        className="createreply-text"
        placeholder="Leave a reply"
        rows="4"
        maxLength={6000}
        onChange={(e) => setReplyText(e.target.value)}
        value={replyText}
      />
      <div className="createreply-buttons">
        <StyledCancelButton
          type="button" // This stops it from being a submit button
          className="createreply-cancel"
          onClick={props.cancelAction}
        >
          CANCEL
        </StyledCancelButton>
        <StyledSubmitButton
          disabled={!replyText || disableSubmitButton}
          className="createreply-post"
          primary
          value="POST REPLY"
        />
      </div>
    </form>
  );
}
