import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function NoteItem(props) {
  const context = useContext(NoteContext)
  const {deleteNote} = context
  const { note } = props;
  const onClick = (e) => {
    e.preventDefault()
    deleteNote(note._id)
  }

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div className="d-flex justify-content-end">
              <i className="fas fa-trash-alt mx-2" onClick={onClick}></i>
              <i className="fas fa-edit mx-2"></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
