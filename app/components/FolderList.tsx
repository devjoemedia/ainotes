"use client";
import React from "react";
import FolderListItem from "./FolderListItem";
import useNoteStore from "@/store/useNoteStore";
import SwipeToDelete from "react-swipe-to-delete-ios";

const FolderList = () => {
  const folders = useNoteStore((state) => state.folders);

  const handleDelete = () => {};
  return (
    <div>
      {/* <SwipeToDelete
        onDelete={handleDelete} // required
        // optional
        height={50} // default
        transitionDuration={250} // default
        deleteWidth={75} // default
        deleteThreshold={75} // default
        showDeleteAction={true} //default
        deleteColor="rgba(252, 58, 48, 1.00)" // default
        deleteText="Delete" // default
        // deleteComponent={<DeleteComponent/>} // not default
        disabled={false} // default
        id="swiper-1" // not default
        className="my-swiper" // not default
        rtl={false} // default
        onDeleteConfirm={(onSuccess, onCancel) => {
          // not default - default is null
          if (window.confirm("Do you really want to delete this item ?")) {
            onSuccess();
          } else {
            onCancel();
          }
        }}
      >
        {folders.map((folder) => (
          <FolderListItem
            key={folder.uid}
            uid={folder.uid as number}
            title={folder.title}
            timestamp={folder.timestamp as number}
            noteCount={folder.noteCount}
          />
        ))}
      </SwipeToDelete> */}

      {folders.map((folder) => (
        <FolderListItem
          key={folder.uid}
          uid={folder.uid as number}
          title={folder.title}
          timestamp={folder.timestamp as number}
          noteCount={folder.noteCount}
        />
      ))}
      {!folders.length && (
        <p className='text-[14px] py-3 text-center text-slate-500'>
          you don&rsquo;t have a folder, create new folders and start adding
          notes
        </p>
      )}
    </div>
  );
};

export default FolderList;
