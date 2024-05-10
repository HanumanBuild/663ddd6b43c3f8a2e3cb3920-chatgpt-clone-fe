import React from 'react';

function SubmitButton({ handleSubmit }) {
  return (
    <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Send
    </button>
  );
}

export default SubmitButton;