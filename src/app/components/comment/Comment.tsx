"use client"
import { Trash ,ThumbsUp } from "phosphor-react"
import { OwnComment } from "../post/Post";
import { useState } from "react";

export interface CommentProps{
  coments: OwnComment;
  deleteComment: (a:number) => void;
}
function Comment({coments, deleteComment}: CommentProps) {
  const [like, setLike] = useState<number>(0);

  const handleLike = () =>{
    setLike(like + 1);
  }
  const handleDeleteComment = () =>{
    deleteComment(coments.id);
  }
  return (
    <div className="flex flex-col text-gray-400">
       <div className="bg-gray-c2 flex gap-4 py-4 px-6">
            <div className="">
                <img src="https://github.com/torvalds.png" alt="" className="w-[60px] h-[60px] rounded-[2px] border-4 "/>
            </div>
            <div className="col-span-2 flex justify-between w-full">
                <div className="flex flex-col">
                    <p>{coments.name}</p>
                    <span>{coments.content}</span>
                </div>
                <div>
                    <Trash size={22} onClick={handleDeleteComment} className="cursor-pointer hover:text-red-500" />
                </div>
            </div>
       </div>
       <div className="px-6 flex bg-gray-c2 ">
         <div className="flex items-center gap-2 border-none ">
          <button className="border-none" onClick={handleLike}>
            <ThumbsUp className="hover:text-green-300"/> 
          </button>Aplaudir <span>{like}</span></div>
       </div>

    </div>
  )
}

export default Comment