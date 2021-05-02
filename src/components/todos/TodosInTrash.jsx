// import React, { useState } from 'react'
// import { useFirestore } from 'react-redux-firebase'
// import { useSelector } from 'react-redux'

// import { createSlice } from '@reduxjs/toolkit'

// import ToDoItem from './TodoItem'
// import '../../App.css';

// const TodosInTrash = ({state}) => {
   
//     //const todos = useSelector((state) => state.firestore.data.todos)
//     // const [todosinTrash, setTodosinTrash ] = useState('')
//     // const firestore = useFirestore()
//     const { uid } = useSelector((state) => state.firebase.auth)
//     // const addTodoTrash = (todosTitle, todo, isDone) => {
//     //     firestore
//     //         .collection('users')
//     //         .doc(uid)
//     //         .collection('todos')
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