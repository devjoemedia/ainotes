import Link from "next/link";

type FolderProps = {
  title: string;
  timestamp: string;
  count: number;
  uid: number;
};

const FolderListItem = ({ title, timestamp, count, uid }: FolderProps) => {
  return (
    <Link href={`/folder/${uid}`}>
      <div className='flex justify-between items-center border-b  py-2 px-2'>
        <div className='flex text-primary-text items-center'>
          <p className='text-xs m-0 p-0 text-slate-500 font-semibold'>
            {title}
          </p>
        </div>

        <div className='space-y-1 flex flex-col items-end'>
          <p className='text-slate-500 text-[11px] text-right'>{timestamp}</p>
          <div className='w-[15px] h-[15px] p-1 text-xs font-bold text-white rounded-md bg-slate-900 flex items-center justify-center'>
            <p>{count}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FolderListItem;
