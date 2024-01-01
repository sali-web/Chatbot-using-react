import React, { useState } from 'react';
import MessengerIcon from './components/MessengerIcon';
import MessengerChatbox from './components/MessengerChatbox';

function App() {
  const [chatboxOpen, setChatboxOpen] = useState(false);

  const handleToggleChatbox = () => {
    setChatboxOpen(!chatboxOpen);
  };

  return (
    <div className="App">
      <h1>Your Resort System</h1>
      <p>Welcome to our resort system. How can we assist you today?</p>

      <MessengerIcon onClick={handleToggleChatbox} />
      <MessengerChatbox isOpen={chatboxOpen} onClose={() => setChatboxOpen(false)} />
    </div>
  );
}

export default App;

