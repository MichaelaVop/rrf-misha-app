// import Todos from "../components/todos/Todos"

// export const ITEM_TO_TRASH = 'ITEM_TO_TRASH'

// export const addItemToTrash = (todoItems, todoItemToTrash) => {
//     const currentTodo = todoItems.find(todo => todo.todoID === todoItemToTrash.todoID)

//     if(currentTodo.trash === false) {
//         return todoItems.map(todo =>
//             todo.todoID === todoItemToTrash.todoID ?
//             { ...todo, trash: true}
//             :
//             todo )
//     }
//     return [...todoItems, ...todoItemToTrash]
// }

// export const itemToTrash = key => ({
//     type: ITEM_TO_TRASH,
//     payload: key
// })
import React, { useState } from 'react'
import {createSlice} from '@reduxjs/toolkit'

const { uid } = useSelector((state) => state.firebase.auth)
export const todosInTrash = createSlice({
    name: 'trash',
    initialState: {
        userId: {uid},
        trash: true
    },
    reducers: {
        setTrash: (state, action) => {
            state.trash = action.payload.trash
        }
    }
})

export const { setTrash } = todosInTrash.actions

export const 

export default todosInTrash.reducer
