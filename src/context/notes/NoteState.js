
import NoteContext from "./NoteContext"
import { useState } from "react";
const NoteState = (props) => {
  const host="http://localhost:5000";
  // const notesInitial = []
  const [notes, setNotes] = useState([])

  // get all notes 
  const getAllNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjhhOGNjNjAzMzMwNTcwYTAzNDhjOCIsImlhdCI6MTY1NjMxNTM0N30.Pp6h3dt9EHr2WeSXMeuAci1XRHexZWIncCqPcMlcCuM"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }


  //add note
  const addNote = async (title, description, tag) => {
    //to do api call
    
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST', 

      headers: {
        'Content-Type': 'application/json',
        'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjhhOGNjNjAzMzMwNTcwYTAzNDhjOCIsImlhdCI6MTY1NjMxNTM0N30.Pp6h3dt9EHr2WeSXMeuAci1XRHexZWIncCqPcMlcCuM"
       
      },
      body: JSON.stringify({title,description,tag}) 
    });
    const json=await response.json();
    console.log("adding a note",json)
    const note = {
      "_id": "62bbknfdlkg4f88cljn02239uegg643b4a324",
      "title": title,
      "description": description,
      "tag": tag,
      "user": "62b8a8cc603330570a0348c8",
      "date": "2022-06-28T18:59:20.161Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }


  //delete note
  const deleteNote =async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjhhOGNjNjAzMzMwNTcwYTAzNDhjOCIsImlhdCI6MTY1NjMxNTM0N30.Pp6h3dt9EHr2WeSXMeuAci1XRHexZWIncCqPcMlcCuM"
      }
    });
    const json=await response.json();
    console.log(json);
    let newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //edit note
  const editNote = async (id, title, description, tag) => {
    //api call
    const url=host+'/api/notes/updatenote/'+id;
    const response = await fetch(url, {
      method: 'PUT', 

      headers: {
        'Content-Type': 'application/json',
        'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjhhOGNjNjAzMzMwNTcwYTAzNDhjOCIsImlhdCI6MTY1NjMxNTM0N30.Pp6h3dt9EHr2WeSXMeuAci1XRHexZWIncCqPcMlcCuM"
       
      },
      body: JSON.stringify(title,description,tag) 
    });
    const json=response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index]
      if (element._id === id) {
        element.title = title
        element.description = description
        element.tag = tag

      }

    }
  }

  return (
    < NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getAllNotes }}>
      {props.children}
    </ NoteContext.Provider>
  )
}
export default NoteState