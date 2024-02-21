import Image from "next/image";
import Link from "next/link";

type NoteCardProps = {
  folderId: number;
  noteId: number;
  title: string;
  timestamp: number;
};

const NoteCard = ({ folderId, noteId, timestamp, title }: NoteCardProps) => {
  return (
    <Link href={`/folder/${folderId}/note/${noteId}`}>
      <div className='bg-slate-50 group max-w-[320px] shadow-sm h-[160px] rounded-md space-y-5 border border-gray-100 p-3 '>
        <h1 className='text-[18px] text-slate-500 group-hover:text-gray-800 '>
          {title}
        </h1>
        <p className='text-slate-500 text-[11px]'>{timestamp}</p>
      </div>
    </Link>
  );
};

export default NoteCard;
