import Moment from 'moment'

export default (state = {}, action) => {
  const { description, dueDate, id, creationTime, timeActive } = action;
  let newState;
  switch (action.type) {

    //CREATES A NEW TO-DO-LIST ITEM

    case 'ADD_ITEM':
      newState = Object.assign({}, state, {
        [id]: {
          description: description,
          dueDate: dueDate,
          id: id,
          creationTime: creationTime,
          timeActive: creationTime.from(new Moment(), true)
        }
      })
      return newState;

    //REMOVES A TO-DO-LIST ITEM FROM THE STATE

    case 'REMOVE_ITEM':
      newState = Object.assign({}, state);
      delete newState[id];
      return newState;

    //UPDATES THE TIME THE TO-DO-LIST ITEM HAS EXISTED

    case 'UPDATE_TIMES':
      const newItem = Object.assign({}, state[id]);
      newItem.timeActive = newItem.creationTime.from(new Moment(), true);
      newState = Object.assign({}, state, {[id]: newItem});
      return newState;

    //RETURNS COPY OF STATE IF PASSED ACTION TYPE IS NOT FOUND
    
    default:
      return state;
  }
}
