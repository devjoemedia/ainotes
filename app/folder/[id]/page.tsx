import React from "react";
import NoteCard from "@/components/NoteCard";
import Link from "next/link";
import Logo from "@/components/Logo";

type Note = {
  title: string;
  timestamp: string;
  folderId: number;
  uid: number;
};
const Page = () => {
  const notes: Note[] = [
    // {
    //   uid: 1,
    //   title:
    //     "Do it smarter, not harder! Login in to track you spending with a well crafted analytics!",
    //   timestamp: "12:34 PM",
    //   folderId: 1,
    // },
  ];

  return (
    <div className='px-10 h-full'>
      {notes.length > 0 && (
        <div className='flex justify-end items-center mb-2 '>
          <Link href='/folder/1/note/create'>
            <button className='text-white cursor-pointer px-5 py-1 rounded bg-slate-900 '>
              New Note +
            </button>
          </Link>
        </div>
      )}

      {notes.length > 0 ? (
        <div className='grid grid-cols-3 gap-5'>
          {notes.map((note) => (
            <NoteCard
              key={note.uid}
              noteId={note.uid}
              folderId={note.folderId}
              timestamp={"2:12 am"}
              title='Do it smarter, not harder! Login in to track you spending with a well crafted analytics!'
            />
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center h-[70%]'>
          <div className='flex flex-col items-center justify-center space-y-3'>
            <Logo size='lg' />

            <h2 className='text-lg text-slate-500'>This folder is empty</h2>
            <Link href='/folder/1/note/create'>
              <button className='text-slate-900 hover:bg-slate-200 transition-all ease-in animate-pulse cursor-pointer px-5 py-1 rounded bg-slate-100 '>
                + Create
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
