import completedActionsReducer from './completed-actions-reducer'
import toDoListReducer from './to-do-list-reducer'
import lyricChangeReducer from './lyricChangeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  completedActions: completedActionsReducer,
  toDoList: toDoListReducer,
  songs: lyricChangeReducer
})

export default rootReducer
