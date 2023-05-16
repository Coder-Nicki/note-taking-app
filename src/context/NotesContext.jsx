
import { createContext, useContext, useReducer } from "react";

const initialNotesData = [
    {
        id: 1,
        title: "Notes",
        description: "Notes content here",
        isCompleted: false,
        dueDate: new Date().setDate(new Date().getDate()+1) 
        createdDate: Date.now()
    }
]

const notesReducer = 