import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

import '../../App.css';
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete';

// const AddTodoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;  
//   border-style: none;
//   border-radius: 6px;
//   box-shadow: 2px 2px 4px 2px rgba(201,199,199,0.8);
//   padding-top: 10px;
//   padding-bottom: 10px;
// `


const DeleteTodo = ({state, ...actions}) => {
  const [presentToDoItem, setPresentToDoItem] = useState('')
  
  const firestore = useFirestore()
  const { uid } = useSelector((state) => state.firebase.auth)
  
  const handleChangeDelete = ({ currentTarget: { name, value } }) => {
    if (name === 'addTodosTitle') {  
      setPresentToDoTitle(value)
      console.log('title handle', value)
    }
  }

  const handleChange = ({ currentTarget: { name, value } }) => {
    if (name === 'addTodo') {
      setPresentToDo(value)
      console.log('text handle', value)
    }
  }

  const addNewTodo = (todosTitle, todo) => {
    firestore
      .collection('users')
      .doc(uid)
      .collection('todos')
      .add({
        title: todosTitle,
        text: todo,
        isDone: false,
        trash: false,
      })
      .then((docRef) => {
        docRef.update({
          todoID: docRef.id,
        })
      })
    setPresentToDo('')
  }
  
  return (
    <AddTodoContainer>
     
        <input
          action=''
          type='text'
          placeholder='Title'
          name='addTodosTitle'
          value={presentToDoTitle}
          onChange={handleChangeTitle}
          className="form-items"
        /> 
        <input
          action=''
          type='text'
          placeholder='... go to the point'
          name='addTodo'
          value={presentToDo}
          onChange={handleChange}
          className="form-items"
        />
        
        <button className="form-button"
          onClick={(event) => {
            event.preventDefault();
            addNewTodo(presentToDo, presentToDoTitle);
            console.log('return', addNewTodo)
          }}
        >
          <DeleteIcon />
        </button>
      
    </AddTodoContainer>
  )
}

export default DeleteTodo