import React from 'react'
import NewItem from './NewItem'
import { connect } from 'react-redux'
import Item from './Item'
import UpdateItem from './UpdateItem'

function ToDoList(props){
  return(
    <div>

      {/*LIST OUT TO-DO-LIST ITEMS IF THERE ARE ANY POSTED*/}

      {(props.toDoList)
        ? Object.values(props.toDoList).map(item =>
          <Item item={item} key={item.id} />
        )
        : <span>There are currently no items in your toDoList</span>}

      {/*SHOW FORM TO UPDATE ACTIVEITEM IF ONE HAS BEEN SELECTED*/}

      {(props.activeItem)
        ? <UpdateItem item={props.toDoList[props.activeItem]} />
        :  <span></span>}
      <NewItem />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    toDoList: state.toDoList.toDoList,
    activeItem: state.toDoList.activeItem
  }
}

export default connect(mapStateToProps)(ToDoList)
