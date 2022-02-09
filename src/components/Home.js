import React from "react";
import { AddNote } from "./AddNote";
import Note from "./Note";

export const Home = () => {
  
  return (
    <div>
      <h1>Add a note</h1>
      <AddNote/>
        <Note/>
      </div>
  );
};
