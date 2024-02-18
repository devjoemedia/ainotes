import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
// import type {} from '@redux-devtools/extension' // required for devtools typing

interface NotesState {
  notes: [];
  addNote: (newNote: any) => void;
}

const useNoteStore = create<NotesState>()(
  devtools(
    persist(
      (set) => ({
        notes: [],
        addNote: (newNote) => set((state) => ({ notes: [] })),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
