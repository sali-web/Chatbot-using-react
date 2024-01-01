import React, { useState } from 'react';

const MessengerChatbox = ({ isOpen, onClose }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setChatMessages([...chatMessages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      // You can handle sending the user's message to Twilio or another backend service here
    }
  };

  return (
    <div className={`fixed bottom-0 right-0 p-4 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-4 h-64 overflow-y-auto border rounded-md">
        <div className="mb-2">
          {/* Display chat messages */}
          {chatMessages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={inputMessage}
            onChange={handleInputChange}
            className="flex-grow border rounded-md p-2 mr-2"
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessengerChatbox;