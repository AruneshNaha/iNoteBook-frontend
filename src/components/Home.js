import React, {useContext} from "react";
import AuthContext from "../context/authentication/AuthContext";
import { AddNote } from "./AddNote";
import Note from "./Note";

export const Home = () => {
  const context = useContext(AuthContext)
  const { authToken } = context

  return (
    <div style={{ margin: "35px 0px", marginTop: "100px" }}>
      <h1>Add a note</h1>
      <AddNote />
      <Note />
    </div>
  );
};
