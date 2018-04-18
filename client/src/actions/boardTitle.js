import { addError } from './error';
import { apiCall } from '../services/api';
import {CREATE_BOARD_TITLE, UPDATE_BOARD_TITLE,GET_BOARD_TITLES} from '../constants/ActionTypes';

export const getBoardTitles = (boardTitles)=>({type:GET_BOARD_TITLES,boardTitles})
export const createBoardTitle = (text,bpos,) => ({ type:CREATE_BOARD_TITLE, text, bpos })
export const updateBoardTitle = (text,_id,) => ({ type:UPDATE_BOARD_TITLE, text, _id })


export const getBoardTitleCall=()=>(dispatch,getState)=>{
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return apiCall('get', `api/users/${id}/board`)
    .then((res)=>{dispatch(getBoardTitles(res))}).catch(err=>dispatch(addError(err.message)))
}
export const createBoardTitleCall = (text,position,) => (dispatch,getState)=>{
    dispatch(createBoardTitle(text,position))
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return apiCall('post', `api/users/${id}/board`,{text,position})
    .then((b)=>dispatch(getBoardTitleCall())).catch(err=>dispatch(addError(err.message)))
}

export const updateBoardTitleCall = (text,_id)=>(dispatch,getState)=>{
    dispatch(updateBoardTitle(text,_id));
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return apiCall('put', `api/users/${id}/board/${_id}`,{text})
    .then(()=>{}).catch((err)=>dispatch(addError(err.message)))
}