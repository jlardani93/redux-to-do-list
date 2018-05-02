import c from './../constants'

export default (state = {
  tasksCompleted: 0
}, action) => {
  switch (action.type) {
  case c.INCREMENT:
    let newState = Object.assign({}, state, {tasksCompleted: state.tasksCompleted + 1})
    return newState
  default:
    return state
  }
}
