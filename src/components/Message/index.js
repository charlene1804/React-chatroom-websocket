import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ userName, messageText }) => (
  <li className="message">
    <p className="userName">{userName}</p>
    <p className="messageText">{messageText}</p>
  </li>
);

Message.propTypes = {
  userName: PropTypes.string.isRequired,
  messageText: PropTypes.string.isRequired,
};

export default Message;
