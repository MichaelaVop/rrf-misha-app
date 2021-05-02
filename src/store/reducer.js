import { ITEM_TO_TRASH, addItemToTrash } from './action'

const INIT_STATE = {
    todos: [],
    trash: false,
    isDone: false
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case ADD_TODO: {
            const { todo } = action.payload
            return {
                ...state,
                todos: [...state.todo]
            }
        }
        case ITEM_TO_TRASH:
            return {
                ...state,
                todos: addItemToTrash(state.todos, action.payload)
            }
        
        default:
            return state 
    }
}

export default reducer