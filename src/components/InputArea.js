import React from 'react';

function InputArea({ userInput, setUserInput, handleSubmit }) {
  return (
    <input
      type="text"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      className="w-full p-2 border-2 border-gray-300 rounded-lg"
      placeholder="Type your message here..."
    />
  );
}

export default InputArea;