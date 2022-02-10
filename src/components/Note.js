import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import NoteItem from "./NoteItem";

export default function Note() {
  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote } = context;
  const [showModal, setShowModal] = useState(false);

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  useEffect(() => {
    getAllNotes();
    //eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const updateNote = (note) => {
    setShowModal(true);
    setNote(note);
  };

  const updateNoteToBackend = (e) => {
    e.preventDefault();
    editNote(note._id, note.title, note.description, note.tag);
    closeModal();
    getAllNotes();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="row my-3">
      <h1>Your notes</h1>
      <Modal show={showModal}>
        <Modal.Header>
          <h5>Edit this note</h5>
        </Modal.Header>
        <ModalBody>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                name="title"
                type="text"
                onChange={onChange}
                value={note.title}
                className="form-control"
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
                value={note.description}
                onChange={onChange}
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
                value={note.tag}
                onChange={onChange}
                className="form-control"
                id="tag"
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button
            onClick={updateNoteToBackend}
            className="btn btn-primary"
            disabled={note.title.length < 5 || note.description.length < 5}
          >
            Update Note
          </button>
          <button onClick={closeModal} className="btn btn-danger">
            Close
          </button>
        </ModalFooter>
      </Modal>
      <div className="container mx-2">
        {notes.length === 0 && "No Notes to display"}
      </div>

      {notes.map((note) => {
        return (
          <NoteItem
            key={note._id}
            note={note}
            updateNote={updateNote}
          ></NoteItem>
        );
      })}
    </div>
  );
}
