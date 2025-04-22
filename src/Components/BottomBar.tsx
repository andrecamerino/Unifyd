import React from "react";
import {
  HomeIcon,
  UserGroupIcon,
  PlusCircleIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 border-t border-gray-300 bg-background w-[100vw] h-[8vh] max-h-[80px] grid grid-cols-5 gap-2">
      <a href="/" className="flex flex-col justify-center items-center">
        <HomeIcon className="h-8 w-8 text-text-color" />
        <p className="text-[12px]">Home</p>
      </a>
      <a href="/circle" className="flex flex-col justify-center items-center">
        <UserGroupIcon className="h-8 w-8 text-text-color" />
        <p className="text-[12px]">My Circle</p>
      </a>
        <a href="/post" className="flex flex-col justify-center items-center">
            <PlusCircleIcon className="h-8 w-8 text-text-color" />
            <p className="text-[12px]">Post</p>
        </a>
        <a href="/saved" className="flex flex-col justify-center items-center">
            <TrophyIcon className="h-8 w-8 text-text-color" />
            <p className="text-[12px]">Clubs</p>
        </a>
        <a href="/profile" className="flex flex-col justify-center items-center">
            <UserIcon className="h-8 w-8 text-text-color" />
            <p className="text-[12px]">Profile</p>
        </a>
    </div>
  );
};

export default BottomBar;
