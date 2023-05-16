
import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "react-use";

const initialNotesData = [
    {
        id: 1,
        title: "Notes",
        description: "Notes content here",
        isCompleted: false,
        dueDate: new Date().setDate(new Date().getDate()+1),
        createdDate: Date.now()
    }
]

const notesReducer = (previousState, instructions) => {
    let stateEditable = [...previousState];

    switch (instructions.type){
        case "create":
            console.log("TODO: Create note and add to state");
            break;
        case "update":
            console.log("TODO: Update specific note and overwrite it");
            break;
        case "delete":
            console.log("TODO: Delete note");
            break;
        case "sortbyDueDate":
            console.log("TODO: sort by due date");
            break;
        case "sortbyCreatedAtDate":
            console.log("TODO: Sort by created date");
            break;
        case "sortById":
            console.log("TODO: Sort by ID");
            break;
        default:
            console.log("Invalid instruction type provided, it was:" + instructions.type)
            return previousState
    }
}

export const NoteDataContext = createContext(null);
export const NoteDispatchContext = createContext(null)

export function useNoteData(){
    return useContext(NoteDataContext)
}

export function useNoteDispatch(){
    return useContext(NoteDispatchContext)
}

export default function NotesProvider(props){
    const [notesData, notesDispatch] = useReducer(notesReducer, initialNotesData)

    const [persistentData, setPersistentData] = useLocalStorage("notes", initialNotesData)

        useEffect(() => {
            notesDispatch()
        }, [])

    useEffect(() => {
        console.log("Local Storage:" + persistentData);
    }, [persistentData]);

    useEffect(() => {
        setPersistentData(JSON.stringify(notesData))
    }, [notesData]);

    return(
        <NoteDataContext.Provider value={notesData}>
            <NoteDispatchContext.Provider value={notesDispatch}>
                {props.children}
            </NoteDispatchContext.Provider>
        </NoteDataContext.Provider>
    )
}