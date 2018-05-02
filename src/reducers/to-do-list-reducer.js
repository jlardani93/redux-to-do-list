import Moment from 'moment'
import c from './../constants'

export default (state = {}, action) => {
  const { description, dueDate, id, creationTime, timeActive } = action
  let newState
  let updatedItem
  let newToDoList
  switch (action.type) {

  //CREATES A NEW TO-DO-LIST ITEM

  case c.ADD_ITEM:
    newState = Object.assign({}, state)
    newToDoList = Object.assign({}, state.toDoList)
    let newItem =  {
      description: description,
      dueDate: dueDate,
      id: id,
      creationTime: creationTime,
      timeActive: creationTime.from(new Moment(), true)
    }
    newToDoList[id] = newItem
    newState['toDoList'] = newToDoList
    return newState

    //REMOVES A TO-DO-LIST ITEM FROM THE STATE

  case c.REMOVE_ITEM:
    newState = Object.assign({}, state)
    newToDoList = Object.assign({}, state.toDoList)
    delete newToDoList[id]
    newState.toDoList = newToDoList
    return newState

    //UPDATES THE TIME THE TO-DO-LIST ITEM HAS EXISTED

  case c.UPDATE_TIMES:
    updatedItem = Object.assign({}, state.toDoList[id])
    updatedItem.timeActive = updatedItem.creationTime.from(new Moment(), true)
    newState = Object.assign({}, state)
    newState.toDoList[id] = updatedItem
    return newState

    //SETS THE ACTIVEITEM TO THE SELECTED ITEM

  case c.SET_ACTIVEITEM:
    newState = Object.assign({}, state, {activeItem: id})
    return newState

    //UPDATE DESCRIPTION AND DUE DATE OF SELECTED ITEM

  case c.UPDATE_ITEM:
    newState = Object.assign({}, state)
    updatedItem = Object.assign({}, state.toDoList[id])
    updatedItem.description = description
    updatedItem.dueDate = dueDate
    newState.toDoList[id] = updatedItem
    return newState

    //RETURNS COPY OF STATE IF PASSED ACTION TYPE IS NOT FOUND

  default:
    return state
  }
}
