import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000/";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  const getAllNotes = async () => {
    const response = await fetch(`${host}api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmNTdiZGVhZjdhYzIyNWVlMzZkMTEzIn0sImlhdCI6MTY0MzU1Nzk1NH0.ySj_Vrudp2bz9_GfSQswCSuVjH5CVjRyCWfoofk4Usk",
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  const addNotes = async (title, description, tag) => {
    const response = await fetch(`${host}api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmNTdiZGVhZjdhYzIyNWVlMzZkMTEzIn0sImlhdCI6MTY0MzU1Nzk1NH0.ySj_Vrudp2bz9_GfSQswCSuVjH5CVjRyCWfoofk4Usk",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    console.log(note);
    setNotes(notes.concat(note));
  };

  //TODO:Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmNTdiZGVhZjdhYzIyNWVlMzZkMTEzIn0sImlhdCI6MTY0MzU1Nzk1NH0.ySj_Vrudp2bz9_GfSQswCSuVjH5CVjRyCWfoofk4Usk",
      },
    });
    const json = response.json();

    console.log("Delete Note with id " + json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //TODO:Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmNTdiZGVhZjdhYzIyNWVlMzZkMTEzIn0sImlhdCI6MTY0MzU1Nzk1NH0.ySj_Vrudp2bz9_GfSQswCSuVjH5CVjRyCWfoofk4Usk",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //logic behind updating a note
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        notes[index].title = title;
        notes[index].description = description;
        notes[index].tag = tag;
        break;
      }
    }
    setNotes(notes);
  };

  //TODO:Read note
  const readNote = () => {};

  return (
    <NoteContext.Provider
      value={{ notes, addNotes, deleteNote, editNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
