import { useEffect, useState } from "react";
import { useNoteData } from "../context/NotesContext";


export default function NoteDisplay(props){

    const {id} = props;
    let [localNote, setLocalNote] = useState({});

    const globalNotesData = useNoteData();

    useEffect(() => {
        // On start, find the note in globalNotesData
        // that has an ID matching props.id
        setLocalNote(globalNotesData.find(globalSpecificNote => globalSpecificNote.id === id));
    }, [globalNotesData, id])

    return(
        <div>
                    <h4>{localNote.title}</h4>
                    <p>{localNote.description}</p>
                    <p>{localNote.isCompleted ? "COMPLETE" : "NOT YET DONE"}</p>
                    <input type="checkbox" disabled="disabled" onChange={null} readOnly={true} value={localNote.isCompleted} />
                    <h5>Due Date: {new Date(localNote.dueDate).toLocaleDateString()}</h5>
                    {/* <input type="date" readOnly value={note.dueDate} /> */}
                    <h5>Created At: {new Date(localNote.createdAtDate).toLocaleDateString()}</h5>
                    {/* <input type="datetime-local" readOnly value={note.createdAtDate} /> */}
        </div>
    )
}