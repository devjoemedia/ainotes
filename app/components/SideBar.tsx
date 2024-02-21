"use client";
import CreateFolder from "./CreateFolder";
import Logo from "./Logo";
import FolderList from "./FolderList";
import useNoteStore from "@/store/useNoteStore";

const SideBar = () => {
  const folders = useNoteStore((state) => state.folders);

  return (
    <div>
      <div className=' sticky top-0 pt-4 bg-white'>
        <CreateFolder />
        <div className='border-b border-gray-200 py-2 flex justify-between items-center'>
          <Logo size='lg' />
          <div className='w-[25px] h-[25px] p-1 text-xs font-bold text-white rounded-md bg-slate-900 flex items-center justify-center'>
            <p>{folders.length}</p>
          </div>
        </div>
      </div>
      <FolderList />
    </div>
  );
};

export default SideBar;
