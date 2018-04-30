import completedActionsReducer from './completed-actions-reducer'
import toDoListReducer from './to-do-list-reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  completedActions: completedActionsReducer,
  toDoList: toDoListReducer
})

export default rootReducer;
