import toDoListReducer from './../../src/reducers/to-do-list-reducer';

describe('toDoListReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(toDoListReducer({}, {type: null})).toEqual({});
  })

  let action;
  const sampleItemData = {
    description: "Attend Epicodus",
    dueDate: "June 1",
    id: 0
  }

  test('Should successfully add new item data to toDoList', () => {
    const { description, dueDate, id } = sampleItemData;
    action = {
      type: 'ADD_ITEM',
      description: description,
      dueDate: dueDate,
      id: id
    };
    expect(toDoListReducer({}, action)).toEqual({
      [id] : {
        description: description,
        dueDate: dueDate,
        id: id
      }
    })
  })

  test('Should successfully remove item from toDoList by Id', () => {

    action = {
      type: 'REMOVE_ITEM',
      id: 'testId'
    }

    expect(toDoListReducer({
      testId: {
        description: 'test description',
        dueDate: 'test dueDate',
        id: 'testId'
      }
    }, action)).toEqual({})
  })
})
