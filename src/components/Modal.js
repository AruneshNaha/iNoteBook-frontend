import React, { useState, useContext } from "react";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import NoteContext from "../context/notes/NoteContext";

export const ModalComponent = (props) => {
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const { showModal, titleValue, descValue, tag } = props

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const context = useContext(NoteContext)
  const { closeModal } = context

  return (
    <div>
      <Modal show={showModal} >
        <Modal.Header closeButton>
          <h5>Hi I am modal</h5>
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
                value={titleValue}
                className="form-control"
                id="title"
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
                value={descValue}
                onChange={onChange}
                className="form-control"
                id="description"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                Tag
              </label>
              <input
                name="tag"
                type="text"
                value={tag}
                onChange={onChange}
                className="form-control"
                id="tag"
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button onClick={closeModal} className="btn btn-secondary">
            Update Note
          </button>
          <button onClick={() => {}} className="btn btn-primary">
            Close
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
