import React from "react";
import { HeartIcon } from '@heroicons/react/24/outline'; // or /solid

const LoveButton = ({ meToos }: { meToos: number }) => {
  return (
    <div className="flex justify-center items-center gap-2">
        <HeartIcon className="h-5 w-5 text-text-color" />
      <div className="flex flex-row justify-start text-text-color text-[10px] whitespace-nowrap">
        {meToos > 0 ? `${meToos} Likes` : "Like"}
      </div>
    </div>
  );
};

export default LoveButton;
