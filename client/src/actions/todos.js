import { apiCall } from '../services/api';
import { addError } from './error';
import { REMOVE_TODO, LOAD_TODOS, MOVE_TODO,DELETE_TODO ,ADD_TODO} from '../constants/ActionTypes';

export const addTodo = (text,pos,order) => ({ type: ADD_TODO, text, pos, order })
export const moveTodo = (id,pos) => ({ type: MOVE_TODO, id, pos})
export const deleteTodo = id => ({ type: REMOVE_TODO, id })

export const loadTodos = todos => ({
    type:LOAD_TODOS,
    todos
});

export const remove = id =>({
    type:REMOVE_TODO,
    id
})

export const removeTodo = (user_id, todo_id)=>{
 return dispatch => {
     return apiCall('delete', `/api/users/${user_id}/todos/${todo_id}`)
     .then(()=>{})
     .catch(err => addError(err.message))
 }
}

export const fetchTodos = () => (dispatch,getState)=> {
    let { currentUser} = getState();
    const id = currentUser.user.id;
        return apiCall("get", `/api/user/${id}/todos`)
        .then(function(res){
            dispatch(loadTodos(res));
        })
            .catch(function(err){addError(err.message);
        });
    
}

export const postNewTodo = (text,position) => (dispatch,getState)=>{
    let { currentUser} = getState();
    const id = currentUser.user.id;
    return apiCall('post', `/api/users/${id}/todos`, {text,position})
    .then((res)=>{dispatch(fetchTodos())}).catch(err=>dispatch(addError(err.message)));
}

export const updateTodo = (todo_id,position)=>(dispatch,getState)=>{
    moveTodo(todo_id,position)
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return apiCall('put',`/api/users/${id}/todos/${todo_id}`,{position})
    .then(()=>{}).catch(err=>dispatch(addError(err.message)))
}