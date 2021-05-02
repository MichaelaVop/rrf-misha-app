import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

import '../../App.css';
import styled from 'styled-components'

const AddTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  border-style: none;
  border-radius: 6px;
  box-shadow: 2px 2px 4px 2px rgba(201,199,199,0.8);
  padding-top: 10px;
  padding-bottom: 10px;
`


const AddTodo = ({state, ...actions}) => {
  const [presentToDoTitle, setPresentToDoTitle] = useState('')
  const [presentToDoText, setPresentToDoText] = useState('')
  const [presentToDo, setPresentToDo] = useState('')
  const firestore = useFirestore()
  const { uid } = useSelector((state) => state.firebase.auth)
  
  const handleChangeTitle = ({ currentTarget: { name, value } }) => {
    if (name === 'addTodosTitle') {  
      setPresentToDoTitle(value)
      console.log('title handle', value)
    }
  }

  const handleChangeText = ({ currentTarget: { name, value } }) => {
    if (name === 'addTodoText') {
      setPresentToDoText(value)
      console.log('text handle', value)
    }
  }

  const addNewTodo = () => {
    firestore
      .collection('users')
      .doc(uid)
      .collection('todos')
      .add({
        title: presentToDoTitle,
        text: presentToDoText,
        isDone: false,
        trash: false,
      })
      .then((docRef) => {
        docRef.update(
            {
                todoID: docRef.id
            }
        );
      });

     setPresentToDo('');
     setPresentToDoTitle('');
     setPresentToDoText('');
     console.log('present', setPresentToDo)
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
          name='addTodoText'
          value={presentToDoText}
          onChange={handleChangeText}
          className="form-items"
        />

        <button className="form-button"
          onClick={(event) => {
            event.preventDefault();
            addNewTodo(presentToDo);
            console.log('return', addNewTodo)
          }}
        >
          Add Todo
        </button>    
    </AddTodoContainer>
  )
}
console.log(AddTodo)
export default AddTodo