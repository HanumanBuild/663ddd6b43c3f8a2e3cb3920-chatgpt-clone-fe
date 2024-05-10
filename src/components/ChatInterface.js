import React from 'react';
import './ChatInterface.css';

function ChatInterface({ messages }) {
  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.isBot ? 'message-bot' : 'message-user'}`}>{msg.text}</div>
      ))}
    </div>
  );
}

export default ChatInterface;