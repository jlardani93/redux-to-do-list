import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function Item(props){

  function handleRemoveItem(){
    const { dispatch } = props
    const firstAction = {
      type: 'REMOVE_ITEM',
      id: props.item.id
    };
    const secondAction = {
      type: 'INCREMENT'
    };
    dispatch(firstAction);
    dispatch(secondAction);
  }

  function handleUpdateItem(){
    const { dispatch } = props
    const action = {
      type: 'SET_ACTIVEITEM',
      id: props.item.id
    }
    dispatch(action)
  }

  return(
    <div>
      <h2>{props.item.description}</h2>
      <hr/>
      <h4>{props.item.dueDate}</h4>
      <h4>{props.item.timeActive}</h4>
      <button onClick={handleRemoveItem}>Remove Item</button>
      <button onClick={handleUpdateItem}>Update Item</button>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
}

export default connect()(Item)
