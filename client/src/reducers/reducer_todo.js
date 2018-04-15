import { REMOVE_TODO, LOAD_TODOS,MOVE_TODO,ADD_TODO,DRAG_END,MOVE_POS } from '../constants/ActionTypes';
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
                index:action.index,
                opacity:1
            }
        ];
        case REMOVE_TODO:
         return state.filter(todo=> todo._id !== action.id);
        case MOVE_TODO:
        let hoverTodo = state.filter(todo=>todo._id === action.hoverId)[0]
        let dragTodo = state.filter(todo=>todo._id === action.id)[0]
          dragTodo = {...dragTodo,index:action.hoverIndex,position:parseInt(action.pos,10),opacity:0}
          hoverTodo = {...hoverTodo,index:action.index,position:parseInt(action.pos,10),opacity:1}
         
          let moveState = state.map(todo=>{ 
              if(todo._id === action.hoverId){
                   return dragTodo 
                }else if(todo._id === action.id ){
                    return hoverTodo
                }
                return todo
                })  
         state = moveState
    return state;
     case DRAG_END:
      return state.map(todo=>{
          if(todo._id === action.id){
              return {...todo,opacity:1}
          }
          return todo
      })
      case MOVE_POS:
        return state.map(todo=>{
            if(todo._id === action.id){
                return {...todo,position:parseInt(action.pos,10)}
            }
            return todo
        })
        default:
            return state;
    }
}

export default todos;