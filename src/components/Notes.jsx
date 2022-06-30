import NoteContext from '../context/notes/NoteContext'
import { useContext,useEffect } from 'react'
import NoteItem from './NoteItem'
import './index.css'
import AddNote from './AddNote'
const Notes = () => {

  const context = useContext(NoteContext)
  const { notes, getAllNotes } = context
  useEffect(() => {
    getAllNotes()
    console.log(notes)
  }, [])
  
  return (
    <>
    <AddNote/>
      <div className="my-3">

        <div id="notes">
          <article>

            {notes.map((note) => {

              return <NoteItem key={note._id} note={note} />
            })}
          </article>
        </div>
      </div>
    </>
  )
}
export default Notes