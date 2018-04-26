import React from 'react'
import NewItem from './NewItem'
import { connect } from 'react-redux'
import Item from './Item'

function ToDoList(props){
  return(
    <div>
      {Object.values(props.toDoList).map(item =>
        <Item item={item} key={item.id} />
      )}
      <NewItem />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    toDoList: state
  }
}

export default connect(mapStateToProps)(ToDoList);
