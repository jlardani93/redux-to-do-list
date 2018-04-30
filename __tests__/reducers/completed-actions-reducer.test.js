import completedActionsReducer from './../../src/reducers/completed-actions-reducer'

describe('completedActionsReducer', () => {
  test('should return default state if no action type is recognized', () => {
    expect(completedActionsReducer({}, {type: null})).toEqual({});
  })

  test('counter should increment with each task completed', () => {
    expect(completedActionsReducer({tasksCompleted: 0}, {type: 'INCREMENT'}))
    .toEqual({tasksCompleted: 1}); 
  })
})
