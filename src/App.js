import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import InputArea from './components/InputArea';
import SubmitButton from './components/SubmitButton';

function App() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSubmit = () => {
    const newMessage = { text: userInput, isBot: false };
    setMessages([...messages, newMessage]);
    setUserInput('');
  };

  return (
    <div className="App">
      <ChatInterface messages={messages} />
      <InputArea userInput={userInput} setUserInput={setUserInput} handleSubmit={handleSubmit} />
      <SubmitButton handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;