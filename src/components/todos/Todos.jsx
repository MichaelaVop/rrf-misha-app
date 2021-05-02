import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useFirestore } from 'react-redux-firebase'

//import AddTodo from './AddTodo'
import ToDoItem from './TodoItem'

import '../../App.css';
//import styled from 'styled-components'

// import { call } from 'redux-saga/effects';

const Todos = () => {
   
    const initState = useSelector((state) => state.firestore.data.todos)
    const fs = useFirestore()
    const { uid } = useSelector((state) => state.firebase.auth);
        useFirestoreConnect({
        collection: `users/${uid}/todos`,
        storeAs: "todos",
    });

    const todos = useSelector((state) => state.firestore.data.todos);
    console.log('TODOS', todos);

    // const todosRef = fs.collection(`users/${uid}/todos`)
    // const todos = todosRef.where('trash', '==', true).get()
    // if (todos.empty) {
    return(
        
        <div> 
            
            <ul className="todosUl">
                {todos && Object.values(todos).map((todo) => (
                    <li >
                    <ToDoItem
                        title={todo.title}
                        text={todo.text}
                        isDone={todo.isDone}
                        todoID={todo.todoID}
                        trash={todo.trash}
                    />
                    </li>
                ))}
                
            </ul>
        </div>
    )
                // } else {
                //     return (
                //         <div>No notes</div>
                //     )
                // }
                
}

export default Todos