import React from 'react';
import { HiOutlineChatAlt2 } from 'react-icons/hi';

const MessengerIcon = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-blue-500 p-4 text-white rounded-full cursor-pointer">
      <HiOutlineChatAlt2 size={24} onClick={onClick} />
    </div>
  );
};

export default MessengerIcon;