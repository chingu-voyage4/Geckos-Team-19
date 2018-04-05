
import * as types from '../constants/ActionTypes'

export const addTodo = (text,pos,order) => ({ type: types.ADD_TODO, text, pos, order })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const moveTodo = (id,pos) => ({ type: types.MOVE_TODO, id, pos})