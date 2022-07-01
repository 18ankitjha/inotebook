import NoteContext from '../context/notes/NoteContext'
import { useContext, useEffect, useRef,useState } from 'react'
import NoteItem from './NoteItem'
import './index.css'
import AddNote from './AddNote'


const Notes = () => {

  const context = useContext(NoteContext)
  
  const { notes, getAllNotes,editNote } = context
  useEffect(() => {
    
    getAllNotes()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const ref = useRef(null);
  const refClose=useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  }
  const [Note, setNote] = useState({ id:"",etitle: "", edescription: "", etag:"default" })
  
  const onchange = (e) => {
    setNote({ ...Note, [e.target.name]: e.target.value })
  }
  const handleClick = (e) => {
    e.preventDefault();
    editNote(Note.id,Note.etitle,Note.edescription,Note.etag)
    refClose.current.click();
    console.log("updating")
}
  return (
    <>
      <AddNote />
      <button style={{display:'none'}} ref={ref} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">✏️</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className='my-3'>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={Note.etitle} placeholder="Enter Title" onChange={onchange} minLength={5} required />

                </div>

                <div className="form-group">
                  <label htmlFor="edescription">Description</label>
                  <input type="text" value={Note.edescription}className="form-control" id="edescription"
                    name='edescription'
                    placeholder="Enter description" onChange={onchange} minLength={5} required />
                </div>
                <div className="form-group">
                  <label htmlFor="etag">Tag</label>
                  <input type="text" value={Note.etag}className="form-control" id="etag"
                    name='etag'
                    placeholder="Enter tag" onChange={onchange} minLength={5} required />
                </div>




              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick} disabled={Note.etitle.length<5 || Note.edescription.length<5 }>Update Notes</button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">

        <div id="notes">
          <article>
            <h2 className='flex flex-start'>

            {notes.length===0 && "No notes to display"}
            </h2>
            {notes.map((note) => {
              return <NoteItem key={note._id} note={note}
                updateNote={updateNote}
              />
            })}
          </article>
        </div>
      </div>
    </>
  )
}
export default Notes