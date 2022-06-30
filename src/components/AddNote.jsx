import { useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'

const AddNote = () => {
    const context = useContext(NoteContext)
    const { addNote } = context

    const [Note, setNote] = useState({ title: "", description: "", tag:"default" })
    const handleClick = (e) => {
        e.preventDefault();
        addNote(Note.title,Note.description,Note.tag)
    }
    const onchange = (e) => {
        setNote({...Note,[e.target.name]:e.target.value})
    }
    return (
        <div className='container my-3' >
            <h2>Add a Note</h2>
            <form className='my-3'>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" placeholder="Enter Title" onChange={onchange} />

                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description"
                        name='description'
                        placeholder="Enter description" onChange={onchange} />
                </div>
                <div className="form-group">
                    <label htmlFor="tag">Description</label>
                    <input type="text" className="form-control" id="tag"
                        name='tag'
                        placeholder="Enter tag" onChange={onchange} />
                </div>

                

                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
            <h2>Your Notes</h2>
        </div>
    )
}
export default AddNote