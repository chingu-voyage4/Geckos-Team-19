import { apiCall } from '../services/api';
import { addError } from './error';
import { REMOVE_TODO, LOAD_TODOS, MOVE_TODO ,ADD_TODO,DRAG_END,MOVE_POS} from '../constants/ActionTypes';

export const addTodo = (text,pos,index) => ({ type: ADD_TODO, text, pos,index })
export const moveTodo = (id,pos,index,hoverIndex,hoverId) => ({ type: MOVE_TODO, id, pos,index,hoverIndex,hoverId})
export const deleteTodo = id => ({ type: REMOVE_TODO, id })
export const dragEnd = id =>({type:DRAG_END,id})
export const movePos = (id,pos,index)=>({type:MOVE_POS,id,pos})

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

export const postNewTodo = (text,position,index) => (dispatch,getState)=>{
    let { currentUser} = getState();
    const id = currentUser.user.id;
    return apiCall('post', `/api/users/${id}/todos`, {text,position,index})
    .then((res)=>{console.log(res)
            dispatch(fetchTodos())}).catch(err=>dispatch(addError(err.message)));
}

export const updateTodo = (todo_id,position,index)=>(dispatch,getState)=>{
    // moveTodo(todo_id,position)
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return apiCall('put',`/api/users/${id}/todos/${todo_id}`,{position,index})
    .then(()=>{}).catch(err=>dispatch(addError(err.message)))
}
export const updateMoveTodo = (dragId,position,dragIndex,hoverIndex,hoverId)=>(dispatch,getState)=>{
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return apiCall('put',`/api/users/${id}/todos`,{dragId,position,dragIndex,hoverIndex,hoverId})
    .then(e=>{}).catch(err=>dispatch(addError(err.message)))
}