"use client";

import { useState } from "react";
import { client } from "../lib/client";

interface BlogDetailFormProps {
    filteredBlogData: blogResponse[]; 
  }

export default function BlogDetailForm({ filteredBlogData }: BlogDetailFormProps) {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [addingComment, setAddingComment] = useState(false);

    

    const handleSubmit = () => { 
    if( comment) {
        setAddingComment(true);
        client
        .patch(filteredBlogData[0]._id)
        .setIfMissing({ comments : []})
        .insert('after', 'comments[-1]', [{
            user,
            email,
            comment,
        }])
        .commit()
          .then(() => {
            setComment('');
            setUser('');
            setEmail('');
            setAddingComment(false);
          })
    }
      };

  return (
    <form className="flex flex-col font-kumb items-start justify-center w-full gap-4">
    <div className="flex flex-col min-[748px]:flex-row w-full items-center justify-center gap-4">
        <input
            type="text"
            placeholder="Your name* (required)"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className=" text-[#525252] bg-[#faf7f4]  min-[748px]:w-1/2 w-full py-4 px-5 rounded-lg font-kumb text-[14px] leading-[26px] bg-" />
        <input
            type="text"
            placeholder="Your email* (required)"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" text-[#525252] bg-[#faf7f4]  min-[748px]:w-1/2 w-full py-4 px-5 rounded-lg font-kumb text-[14px] leading-[26px] bg-" />
    </div>
    <textarea
        placeholder="Your comment*"
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className=" text-[#525252] bg-[#faf7f4] py-4 px-5 w-full rounded-lg font-kumb text-[14px] leading-[26px] h-[174px] " 
    />
    <button
        type="button"
        value="Post Comment"
        onClick={handleSubmit}
        className=" uppercase bg-primary papa text-white px-6 rounded-lg py-3" 
    >
        {addingComment ? 'Posting comment...' : 'Post Comment'}
    </button>
</form>
  )
}
