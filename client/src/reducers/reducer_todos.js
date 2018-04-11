// import { ADD_TODO, MOVE_TODO , DELETE_TODO} from '../constants/ActionTypes';
// import _ from 'lodash';

// const intitalState = [
//     {
//         text: 'Use Redux',
//         completed:false,
//         id:0,
//         pos:0,
//         order:[0]

//     },
//        { text:"newTodo",
//          completed:true,
//          id:1,
//          pos:1,
//          order:[0]    
//     }
//     ,
//        { text:"react",
//          completed:true,
//          id:2,
//          pos:2,
//          order:[0]    
//     }

// ]
// export default function todos(state=intitalState, action){
//     switch(action.type){
//         case ADD_TODO:
//         return[
//             ...state,{
//                 text:action.text,
//                 completed:false,
//                 id: state.reduce((maxId, todo)=> Math.max(todo.id,maxId),-1) +1,
//                 pos:parseInt(action.pos,10),
//                 order:[1]
//             }
//         ];
//         case MOVE_TODO:
//             let newState = _.map(state,(todo)=>{
//                 if(todo.id === action.id){
//                     return {
//                         text:todo.text,
//                         completed:todo.completed,
//                         id:todo.id,
//                         pos:parseInt(action.pos,10),
//                         order:todo.order  
//                     }
//                 }
//                 return todo
//             })
//              state = newState
//         return state
//         case DELETE_TODO:
//             let newstate = _.filter(state,(todo)=>{
//                return todo.id!== parseInt(action.id,10)
//             })
//             state = newstate
//             return state
//         default:
//         return state
//     }
// }