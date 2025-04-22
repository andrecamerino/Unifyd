import React from "react";
import Image from "next/image";
import ReplyButton from "./ReplyButton";
import MeTooButton from "./MeTooButton";
import ShareButton from "./ShareButton";
import calculateTimeSince from "@/utils/calculateTimeSince";
import { Post } from "@/types/postTypes";

type Props = {
  post: Post;
};

const ClassPost = ({ post }: Props) => {
  return (
    <div className="w-full h-auto mb-8 border-b-1 border-b-[#b8b8b847] pb-6">
      <div className="flex gap-4 w-full">
        <div className="flex-shrink-0">
          {post.imagePath ? (
            <Image
              className="rounded-full"
              src={post.imagePath || ""}
              alt={post.imagePath || ""}
              width={50}
              height={50}
            />
          ) : (
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="25" fill="#e0e0e0" />
            </svg>
          )}
        </div>

        <div className="flex-grow flex flex-col">
          <div className="flex justify-between items-center gap-1">
            <p className="justify-start text-xs font-bold whitespace-nowrap">
              {post.course} {post.courseNumber}  <span className="text-secondary-text text-xs font-medium">@{post.username} • {" "}
              {calculateTimeSince({ dateTime: post.createdAt })}</span>
            </p>
          </div>
          <div className="text-base font-bold text-text-Color">
            {post.title}
          </div>
          <div className="text-xs font-normal text-text-Color">
            {post.content}
          </div>

          <div className="flex gap-4 mt-4">
            <ReplyButton replyAmount={post.commentIds.length}/>
            <MeTooButton meToos={post.meToos}/>
            <ShareButton shareAmount={post.shares} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassPost;
