import React from 'react'
import {
  MagnifyingGlassIcon,
  BellIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';

const TopBar = () => {
  return (
    <div className="fixed top-0 w-full h-16 border-b border-gray-300 bg-background flex items-center justify-between px-4 z-50">
      <h1 className="text-3xl font-extrabold">Unifyd</h1>
      
      <div className="flex space-x-4">
        <a href="#" aria-label="Search">
          <MagnifyingGlassIcon className="w-6 h-6 text-text-color" />
        </a>
        <a href="#" aria-label="Notifications">
          <BellIcon className="w-6 h-6 text-text-color" />
        </a>
        <a href="#" aria-label="Messages">
          <ChatBubbleLeftIcon className="w-6 h-6 text-text-color" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;