import { REMOVE_TODO, LOAD_TODOS,MOVE_TODO,ADD_TODO } from '../constants/ActionTypes';
import _ from 'lodash';

 const todos = (state = [], action)=>{
    switch(action.type){
        case LOAD_TODOS:
            return[...action.todos];
            case ADD_TODO:
        return[
            ...state,{
                text:action.text,
                completed:false,
               _id: toString(state.reduce((maxId, todo)=> Math.max(todo.id,maxId),-1) +1),
                position:parseInt(action.pos,10),
                order:[1]
            }
        ];
        case REMOVE_TODO:
         return state.filter(todo=> todo._id !== action.id);
        case MOVE_TODO:
        let newState = _.map(state,(todo)=>{
            if(todo._id === action.id){
                return {
                    text:todo.text,
                    completed:todo.completed,
                    _id:action.id,
                    position:parseInt(action.pos,10),
                    order:todo.order  
                }
            }
            return todo
        })
         state = newState
    return state;
        default:
            return state;
    }
}
export default todos;