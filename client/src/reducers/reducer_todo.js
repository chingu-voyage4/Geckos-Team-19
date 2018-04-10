import { REMOVE_TODO, LOAD_TODO } from '../constants/ActionTypes';

 const messages = (state = [], action)=>{
    switch(action.type){
        case LOAD_TODO:
            return[...action.todo];
        case REMOVE_TODO:
         return state.filter(todo=> todo._id !== action.id)
        default:
            return state;
    }
}
export default messages;