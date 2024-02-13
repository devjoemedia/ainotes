import React from "react";
import FolderListItem from "./FolderListItem";

type Folder = {
  title: string;
  timestamp: string;
  count: number;
  uid: number;
};

const FolderList = () => {
  const folders: Folder[] = [
    { uid: 1, title: "General", timestamp: "12:00 PM", count: 8 },
  ];

  return (
    <div>
      {folders.map((folder) => (
        <FolderListItem
          key={folder.uid}
          uid={folder.uid}
          title={folder.title}
          timestamp={folder.timestamp}
          count={folder.count}
        />
      ))}
    </div>
  );
};

export default FolderList;
