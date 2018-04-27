import toDoListReducer from './../../src/reducers/to-do-list-reducer';
import Moment from 'moment'

describe('toDoListReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(toDoListReducer({}, {type: null})).toEqual({});
  })

  let action;
  const sampleItemData = {
    description: "Attend Epicodus",
    dueDate: "June 1",
    id: 0,
    creationTime: new Moment()
  }

  test('Should successfully add new item data to toDoList', () => {
    const { description, dueDate, id, creationTime } = sampleItemData;
    action = {
      type: 'ADD_ITEM',
      description: description,
      dueDate: dueDate,
      id: id,
      creationTime: creationTime
    };
    expect(toDoListReducer({}, action)).toEqual({
      toDoList: {
        [id] : {
          description: description,
          dueDate: dueDate,
          id: id,
          creationTime: creationTime,
          timeActive: 'a few seconds'
        }
      }
    })
  })

  test('Should successfully remove item from toDoList by Id', () => {

    action = {
      type: 'REMOVE_ITEM',
      id: 'testId'
    }

    expect(toDoListReducer({
      toDoList: {
        testId: {
          description: 'test description',
          dueDate: 'test dueDate',
          id: 'testId'
        }
      }
    }, action)).toEqual({toDoList: {}})
  })

  test('Should successfully set active toDoList Item', () => {

    action = {
      type: 'SET_ACTIVEITEM',
      id: 'testId'
    }

    expect(toDoListReducer({
      activeItem: null
    }, action)).toEqual({activeItem: 'testId'})
  })

  test('Should update item', () => {

    const { description, dueDate, id, creationTime } = sampleItemData;

    action = {
      type: 'UPDATE_ITEM',
      description: 'new description',
      dueDate: 'new dueDate',
      id: id
    }

    expect(toDoListReducer({
      toDoList: {
        [id] : {
          description: description,
          dueDate: dueDate,
          id: id,
          creationTime: creationTime,
          timeActive: 'a few seconds'
        }
      }
    }, action)).toEqual({
      toDoList: {
        [id] : {
          description: 'new description',
          dueDate: 'new dueDate',
          id: id,
          creationTime: creationTime,
          timeActive: 'a few seconds'
        }
      }
    })
  })
})
