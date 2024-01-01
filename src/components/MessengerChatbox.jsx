import React from 'react';
import ChatBot from 'react-simple-chatbot';

const MessengerChatbox = ({ isOpen, onClose }) => {
  const steps = [
    {
      id: '0',
      message: 'Hello! How can I help you?',
      trigger: '1',
    },
    {
      id: '1',
      user: true,
      trigger: '2',
    },
    {
      id: '2',
      message: 'We will contact you after few days.',
      trigger: '1',
    },
  ];

  return (
    <div className={`fixed bottom-20 right-4 p-4 ${isOpen ? 'block' : 'hidden'}`}>
      <ChatBot
        steps={steps}
        opened={isOpen}
        toggleFloating={() => {}}
        handleEnd={() => onClose()}
      />
    </div>
  );
};

export default MessengerChatbox;
