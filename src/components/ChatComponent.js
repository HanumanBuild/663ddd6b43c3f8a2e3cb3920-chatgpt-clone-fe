// START EDIT
import React, { useState } from 'react';
import api from '../services/apiService';

function ChatComponent() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    try {
      const response = await api.post('/chat', { message });
      setChatHistory([...chatHistory, { message: response.data.message, from: 'bot' }]);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        {chatHistory.map((chat, index) => (
          <p key={index}>{chat.from}: {chat.message}</p>
        ))}
      </div>
    </div>
  );
}

export default ChatComponent;
// END EDIT