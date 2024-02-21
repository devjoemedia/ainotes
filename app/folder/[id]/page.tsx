"use client";
import React from "react";
import NoteCard from "@/components/NoteCard";
import Link from "next/link";
import Logo from "@/components/Logo";
import useNoteStore from "@/store/useNoteStore";
import { useParams } from "next/navigation";

const Page = () => {
  const getFolderNotes = useNoteStore((state) => state.getFolderNotes);
  const params = useParams<{ id: string }>();

  const notes = getFolderNotes(parseInt(params.id));

  return (
    <div className='px-10 h-full'>
      {notes.length > 0 && (
        <div className='flex justify-end items-center mb-2 '>
          <Link href={`/folder/${params.id}/note/create`}>
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
              noteId={note.uid as number}
              folderId={note.folderId}
              timestamp={note.timestamp as number}
              title={note.title}
            />
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center h-[70%]'>
          <div className='flex flex-col items-center justify-center space-y-3'>
            <Logo size='lg' />

            <h2 className='text-lg text-slate-500'>This folder is empty</h2>
            <div className='flex space-x-4'>
              <Link href={`/folder/${params.id}/note/create`}>
                <button className='text-slate-900 hover:bg-slate-200 transition-all ease-in animate-pulse cursor-pointer px-5 py-1 rounded bg-slate-100 '>
                  + Create
                </button>
              </Link>
              <Link href={`/folder/${params.id}/note/create`}>
                <button className='text-slate-900 hover:bg-slate-200 transition-all ease-in animate-pulse cursor-pointer px-5 py-1 rounded bg-slate-100 '>
                  + Edit my content
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
