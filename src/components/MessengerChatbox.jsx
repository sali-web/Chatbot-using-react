import React, { useState } from 'react';
import { TwilioChatbox } from 'react-twilio';

const MessengerChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggleChatbox} className="fixed bottom-4 right-4 bg-blue-500 p-4 text-white rounded-full">
        Open Chat
      </button>

      {isOpen && (
        <TwilioChatbox
          accountSid="your-twilio-account-sid"
          authToken="your-twilio-auth-token"
          serviceSid="your-twilio-service-sid"
          channel="your-twilio-channel"
          phoneNumber="your-twilio-phone-number"
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default MessengerChatbox;
