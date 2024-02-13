"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useChat } from "ai/react";

interface Message {
  id: number;
  text: string;
}

const CreateNote = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to the bottom when messages change or component mounts
    if (chatContainerRef.current)
      chatContainerRef.current.scrollTop =
        chatContainerRef?.current?.scrollHeight;
  }, [messages]);

  return (
    <div className='  w-[80%] h-screen mx-auto'>
      <div className='h-full flex flex-col justify-between'>
        <div
          className='h-full overflow-y-scroll scroll-smooth space-y-3 mb-4 text-[14px]'
          ref={chatContainerRef}
        >
          <div className=' flex text-secondary-text p-1'>
            <div className='flex  space-x-1'>
              <button className='text-white cursor-pointer w-[45px] h-[45px]  rounded-full bg-slate-900 flex items-center justify-center'>
                -&gt;
              </button>
            </div>
            <div className=''>
              <p className=' text-secondary-text  text-gray-900  p-2 rounded-xl rounded-bl-none'>
                Do it smarter, not harder! Login in to track you spending with a
                well crafted analytics!
              </p>
              <p className='text-slate-500 text-[11px] ml-2'>12:04 am</p>
            </div>
          </div>

          {messages.map((message, index) => (
            <div key={index} className={` flex text-secondary-text p-1`}>
              <div className='flex space-x-1'>
                <button className='text-white cursor-pointer w-[45px] h-[45px]  rounded-full bg-slate-900 flex items-center justify-center'>
                  AI
                </button>
              </div>
              <div>
                <p className={`  text-gray-900 p-2 rounded-xl `}>
                  {message.content}
                </p>
                <p className='text-slate-500 text-[11px] ml-2'>12: 00 AM</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className='h-[80x] mb-10 bg-slate-100  w-full rounded space-x-3 justify-between flex items-center '>
            <input
              type='text'
              placeholder='Type here...'
              value={input}
              onChange={handleInputChange}
              className='w-full text-gray-900 block focus:outline-none bg-slate-100 rounded-md py-3  px-2 lg:pl-6 '
            />
            <div className='flex items-center space-x-1'>
              <button
                className='text-white cursor-pointer w-[45px] h-[45px]  rounded-md bg-slate-900 flex items-center justify-center'
                type='submit'
              >
                -&gt;
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
