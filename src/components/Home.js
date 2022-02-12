import React, { useContext } from "react";
import AuthContext from "../context/authentication/AuthContext";
import { AddNote } from "./AddNote";
import { Login } from "./login";
import Note from "./Note";

export const Home = () => {
  const context = useContext(AuthContext);
  const { authToken } = context;

  return (
    <>
      <div className="container">
        {authToken ? (
          <div style={{ margin: "35px 0px", marginTop: "50px" }}>
            <div className="container">
              <h1>Add a note</h1>
              <AddNote />
              <Note />
            </div>
          </div>
        ) : (
          <div className="container">
            <Login />
          </div>
        )}
      </div>
    </>
  );
};
