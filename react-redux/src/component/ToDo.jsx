import { useDispatch, useSelector } from "react-redux"
import ToDoSearchBox from "./ToDoSearchBox";
import { deleteToDo, markAsDone } from "../features/todo/todoSlice";

export default function ToDo(){
    let todos=useSelector((state)=> state.todos);
    let dispatch=useDispatch();

    let handleDeleteBtn=(id)=>{
        dispatch(deleteToDo(id));
    }

    let handleMarkAsDone=(id)=>{
        dispatch(markAsDone(id));
    }

    return (
        <>
        <ToDoSearchBox></ToDoSearchBox>
        <hr />
        <h2>ToDo List</h2>
        <ul>
            {todos.map((todo)=><li key={todo.id} style={todo.isDone ? {textDecoration:"line-through"}:{}}>{todo.task}
            <button onClick={()=>handleDeleteBtn(todo.id)}>Delete</button> &nbsp; <button onClick={()=>handleMarkAsDone(todo.id)}>Mark as Done</button>
            </li>)}
        </ul>
        </>
    )
}