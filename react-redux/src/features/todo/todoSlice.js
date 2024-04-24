//reducer

import { createSlice, isDraft, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:"123", task:"Eat", isDone:false}]
}

export const todoSlice=createSlice(
    {
        name:'todo',
        initialState,
        reducers:{
            addToDo:(state, action)=>{
                let newTodo={
                    id:nanoid(),
                    task:action.payload,
                    isDone:false
                }
                state.todos.push(newTodo);
            },
            deleteToDo:(state, action)=>{
                state.todos=state.todos.filter((todo)=> todo.id!==action.payload);
            },
            markAsDone:(state, action)=>{
                state.todos=state.todos.map((todo)=> {
                    if(todo.id===action.payload){
                        todo.isDone=true;
                    }
                })
            },
        }

    }
)

export const {addToDo, deleteToDo, markAsDone} =todoSlice.actions;
export default todoSlice.reducer;