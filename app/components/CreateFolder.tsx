"use client";
import useNoteStore from "@/store/useNoteStore";
import React, { useState } from "react";

const CreateFolder = () => {
  const [text, setText] = useState<string>("");
  const addFolder = useNoteStore((state) => state.addFolder);

  const handleCreateFolder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text || text.length < 3) return alert("add more than 3 characters");
    addFolder({ title: text });
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleCreateFolder}>
        <div className='flex justify-between items-center mt-3'>
          <input
            type='text'
            placeholder='Add new folder'
            value={text}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setText(event.target.value)
            }
            className='block focus:outline-none text-gray-900 bg-white border-2 border-slate-100 rounded-md h-[40px] py-1 px-5 w-full '
          />
          <div className='flex  space-x-1'>
            <button
              type='submit'
              className='text-white cursor-pointer w-[40px] h-[40px]  rounded-md bg-slate-900 flex items-center justify-center'
            >
              +
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateFolder;
