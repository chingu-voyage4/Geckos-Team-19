import { ADD_ERROR, REMOVE_ERROR } from '../constants/ActionTypes';

export const addError = error => ({
    type:ADD_ERROR,
    error
})


export const removeError = error => ({
    type: REMOVE_ERROR,
    error
})