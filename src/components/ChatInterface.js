import React from 'react';

function ChatInterface({ messages }) {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow">
      {messages.map((msg, index) => (
        <div key={index} className={`p-2 ${msg.isBot ? 'text-right' : 'text-left'}`}>{msg.text}</div>
      ))}
    </div>
  );
}

export default ChatInterface;