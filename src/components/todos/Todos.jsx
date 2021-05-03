import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'


//import AddTodo from './AddTodo'
import ToDoItem from './TodoItem'

import '../../App.css';


const Todos = () => {
   
    const { uid } = useSelector((state) => state.firebase.auth);
    useFirestoreConnect({
        collection: `users/${uid}/todos`,
        storeAs: "todos",
    });

    const todos = useSelector((state) => state.firestore.data.todos);
    console.log('TODOS', todos);

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
    

        // const mapStateToProps (state, ownProps) => {
        //     const {todoToBeListed} = state

        //     const {todID} = ownProps
        //     const todos = getT
        // }
   
                
}

export default Todos