import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

export const AddNote = () => {
  const context = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "" });
  const { addNotes } = context;
  const handleClick = (e) => {
    e.preventDefault();
    addNotes(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              name="title"
              type="text"
              onChange={onChange}
              className="form-control"
              value={note.title}
              id="title"
              minLength={5}
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              name="description"
              type="text"
              onChange={onChange}
              value={note.description}
              className="form-control"
              id="description"
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              name="tag"
              type="text"
              onChange={onChange}
              value={note.tag}
              className="form-control"
              id="tag"
            />
          </div>

          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};
