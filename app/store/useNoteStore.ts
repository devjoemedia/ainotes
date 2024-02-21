import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
// import type {} from '@redux-devtools/extension' // required for devtools typing

type Note = {
  title: string;
  folderId: number;
  timestamp?: number;
  uid?: number;
};

type Folder = {
  title: string;
  timestamp?: number;
  noteCount?: number;
  uid?: number;
};

interface NotesState {
  notes: Note[];
  folders: Folder[];
  addNote: (newNote: Note) => void;
  addFolder: (newFolder: Folder) => void;
  getFolderNotes: (folderId: number) => Note[];
}

const useNoteStore = create<NotesState>()(
  devtools(
    persist(
      (set, get) => ({
        notes: [],
        folders: [],
        addNote: (newNote) =>
          set((state) => ({
            notes: [
              ...state.notes,
              {
                uid: Date.now(),
                timestamp: Date.now(),
                ...newNote,
              },
            ],
            folders: state.folders.map((f) => {
              if (f.uid === newNote.folderId) {
                return {
                  ...f,
                  noteCount:
                    state.notes.filter((note) => note.folderId === f.uid)
                      .length + 1,
                };
              }
              return f;
            }),
          })),
        addFolder: (newFolder) =>
          set((state) => ({
            notes: state.notes,
            folders: [
              ...state.folders,
              {
                uid: Date.now(),
                timestamp: Date.now(),
                ...newFolder,
                noteCount: 0,
              },
            ],
          })),
        getFolderNotes: (folderId) =>
          get().notes.filter((n) => n.folderId == folderId),
      }),
      {
        name: "note-storage",
      }
    )
  )
);

export default useNoteStore;
