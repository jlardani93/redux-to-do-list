import * as types from './../constants/ActionTypes'

export const addItem = (description, dueDate, id, creationTime, timeActive) => {
  return {
    type: types.ADD_ITEM,
    description,
    dueDate,
    id,
    creationTime,
    timeActive
  }
}

export const removeItem = (id) => {
  return {
    type: types.REMOVE_ITEM,
    id
  }
}

export const updateTimes = (id) => {
  return {
    type: types.UPDATE_TIMES,
    id
  }
}

export const setActiveItem = (id) => {
  return {
    type: types.SET_ACTIVEITEM,
    id
  }
}

export const updateItem = (id, description, dueDate) => {
  return {
    type: types.UPDATE_ITEM,
    id,
    description,
    dueDate
  }
}
