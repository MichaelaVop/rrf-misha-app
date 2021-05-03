import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

import { createSlice } from '@reduxjs/toolkit'

import ToDoItem from './TodoItem'
import '../../App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'

// class TodosInTrash {
//     constructor (title, text, isDone, trash) {
//         this.title = title
//         this.text = text
//         this.isDone = isDone
//         this.trash = trash
//     }
//     toString () {
//         return this.title + ' ' + this.text + ' ' + this.isDone + ' ' + this.trash
//     }
// }

const TodosInTrash = ({todoID }) => {
    const db = useFirestore()
    const { uid } = useSelector((state) => state.firebase.auth)
    

    const todosTrash = db.collection('users').doc(uid).collection('todos').doc(todoID).where('trash', '==', true)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data())
            })
        })
        .catch((error) => {
            console.log('error', error)
        })
        return todosTrash

}

export default TodosInTrash


//collection('users').doc(uid).collection('todos').doc(todoID)
// const TodosInTrash = () => {

// const { uid } = useSelector((state) => state.firestore.data.todos)
// const firestore = useFirestore()

// async function getDocument(firestore) {
//     const todosInTrash = firestore.collection('users').doc(uid).collection('todos').doc(todoID)
//     const list = await todosInTrash.get()
//     if (!list.exists) {
//         console.log('no todos in trash')
//     } else {
//         console.log('todos in trash', list.data())
//     }
// }

// return getDocument(db)
// }

// export default TodosInTrash


// const TodosInTrash = ({state}) => {
   
//     // const todos = useSelector((state) => state.firestore.data.todos)
//     // const [todosinTrash, setTodosinTrash ] = useState('')
//     // const firestore = useFirestore()
//     // const { uid } = useSelector((state) => state.firebase.auth)
//     // const addTodoTrash = (todosTitle, todo, isDone) => {
//     //     firestore
//     //         .collection('users')
//     //         .doc(uid)
//     //         .collection('trash')
//     //         .add({
//     //         title: todosTitle,
//     //         text: todo,
//     //         isDone: isDone,
//     //         trash: true,
//     //         })
//     //         .then((docRef) => {
//     //         docRef.update({
//     //             todoID: docRef.id,
//     //         })
//     //     })
//     //     setTodosinTrash('')
//     // }

//     const todosInTrash = 

//     if (!todosinTrash) {
//         return(
//             <div> 
//                 <ul className="todosUl">
//                     {addTodoTrash && Object.values(todosinTrash).map((todo) => (
//                         <li >
//                         <ToDoItem
//                             title={todo.title}
//                             text={todo.text}
//                             isDone={todo.isDone}
//                             todoID={todo.todoID}
//                             trash={todo.trash}
//                         />
//                         </li>
//                     ))}
                    
//                 </ul>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <h3>Your trash is empty</h3>
//             </div>
//         )
//     }
    
                
// }

// export default TodosInTrash