import React from 'react';
import PropTypes from 'prop-types';

import Message from 'src/components/Message';

// je récupère la prop fakeMessages depuis mon container Messages.js
const Messages = ({ fakeMessages }) => (
  <ul className="messages">
    {fakeMessages.map((message) => (
      <Message
        key={message.id}
        userName={message.userName}
        messageText={message.messageText}
      />
    ))}
  </ul>
);

Messages.propTypes = {
  fakeMessages: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      messageText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Messages;
