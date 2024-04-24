import { useState } from "react"
import { addToDo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function ToDoSearchBox(){
    let [state, setState]=useState("");
    const dispatch=useDispatch();

    let handleOnChange = (event) =>{
        setState(event.target.value);
    }

    let handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(addToDo(state));
        setState("");
    }
    return (
        <>
        <form action="/" onSubmit={handleSubmit}>
            <input type="text" name="task" onChange={handleOnChange} value={state}/>
            <button>Add a Task</button>
        </form>
        </>
    )
}