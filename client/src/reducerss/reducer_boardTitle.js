import { CREATE_BOARD_TITLE, UPDATE_BOARD_TITLE,GET_BOARD_TITLES } from './../constants/ActionTypes';



const BoardTitle = (state = [], action)=>{
    switch(action.type){
        case GET_BOARD_TITLES:
        return [...action.boardTitles]
        case CREATE_BOARD_TITLE:
        return [...state,
                 {text:action.text,
                  _id:state.reduce((maxId, board)=> Math.max(board.id,maxId),-1) +1,
                 boardPosition:parseInt(action.bpos,10)}
                    ]
        case UPDATE_BOARD_TITLE:
        return state.map(btitle=>{
            if(action.id === btitle._id){
                return{...btitle,text:action.text}
            }
            return btitle;
        })
        default:
        return state;            
    };
    
}

export default BoardTitle