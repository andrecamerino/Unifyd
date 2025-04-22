import React from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

const ReplyButton = ({ replyAmount }: { replyAmount: number }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <ChatBubbleLeftIcon className="w-auto h-4 text-text-color" />
      <div className="justify-start text-text-Color text-[9.33px] font-normal  leading-none">
        {replyAmount > 0 ? `${replyAmount} Replys` : "Reply"}
      </div>
    </div>
  );
};

export default ReplyButton;
