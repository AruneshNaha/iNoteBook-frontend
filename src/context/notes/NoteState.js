import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    
    const notesInitial = [
        {
          "_id": "61f6b9c3b7c39f90805698bd",
          "user": "61f57bdeaf7ac225ee36d113",
          "title": "Note 2",
          "description": "My second note",
          "tag": "general",
          "date": "2022-01-30T16:14:18.980Z",
          "__v": 0
        },
        {
          "_id": "61f6b9d6b7c39f90805698bf",
          "user": "61f57bdeaf7ac225ee36d113",
          "title": "Note3",
          "description": "Brush teeth in the morning",
          "tag": "personal",
          "date": "2022-01-30T16:14:18.980Z",
          "__v": 0
        }
      ]

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState