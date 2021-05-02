import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

import '../../App.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';



const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const ToDoItem = ({ isDone, title, text, trash, todoID }) => {
    const [isTodoItemDone, setTodoItemDone] = useState(isDone)
    const [isTodoInTrash, setTodoInTrash] = useState(trash)
    const firestore = useFirestore()
    const {uid} = useSelector(state => state.firebase.auth)

    const handleChange = (e) => {
        if (e.currentTarget.type === 'checkbox') {
            setTodoItemDone(!isTodoItemDone)
            firestore.collection('users').doc(uid).collection('todos').doc(todoID).update({
                isDone: !isTodoItemDone
            
            })
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log('click', ToDoItem)
        if (e.currentTarget.type === 'submit') {
            setTodoInTrash (!isTodoInTrash)
            firestore.collection('users').doc(uid).collection('todos').doc(todoID).update({
                trash: !isTodoInTrash
            })
        }
        
        //console.log('click', isTodoInTrash, e.currentTarget.type)
    }

   

    // if (!isTodoInTrash) {
    return (
       
        <div className="todoItem" style={{
            textDecoration: isTodoItemDone && "line-through",
            opacity: isTodoItemDone ? 0.5 : 1,
            
        }}>
           <div>
            <h3>{title}</h3>
            <p>{text} </p> 
            </div>
            <div>
                {/* <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={handleChange}
                    checked={isTodoItemDone}
                >Done</input> */}
                <FormControlLabel
                    control={<GreenCheckbox checked={isTodoItemDone} onChange={handleChange} name="checkedG" />}
                    label="Done"
                />
                  <Button onClick={handleClick}
                    variant="contained"
                    color="secondary"
                    type='submit'
                    checked={isTodoInTrash}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
                {/* <FormControlLabel
                    type={isTodoInTrash} control={<Checkbox icon={<DeleteIcon />} onClick={handleClick} />}
                    
                /> */}
                {/* <span type="delete" name='' id='' onClick={handleClick} checked={isTodoInTrash}>
                    <DeleteIcon />
                </span> */}
            </div>
        </div>  
        
       
    )
    // } else return (
    //     <div className="trashItem"></div>
    // )

}

export default ToDoItem

