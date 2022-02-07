import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import { AddNote } from "./AddNote";
import NoteItem from "./NoteItem";

export default function Note() {
  const context = useContext(noteContext);
  const { notes, getAllNotes } = context;
  useEffect(() => {
    getAllNotes()
  }, []);
  
  
  return (
    <div className="row my-3">
      <h1>Your notes</h1>
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note}></NoteItem>;
      })}
    </div>
  );
}
