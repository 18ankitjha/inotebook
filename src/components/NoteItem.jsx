import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'

const NoteItem = (props) => {
    const context = useContext(NoteContext)
    const {deleteNote}=context
    const { note } = props;
    return (
        <figure>

                <h1>{note.title}</h1>
                <figcaption>
                    <p>{note.description}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ut iste natus similique eveniet ea nulla laborum doloribus odio, aspernatur officia aliquam incidunt hic libero ad eligendi veniam voluptates recusandae.
                    </p>
                </figcaption>
                <div>

                <a className="btn btn-dark my-2 " >
                    <i className="fa-solid fa-pen"></i>
                </a>
                <a className="btn btn-dark my-2" onClick={()=>{deleteNote(note._id)}}>
                   <i className="fa-solid fa-trash"></i>
                </a>
                </div>
            </figure>
        
    )
}
export default NoteItem