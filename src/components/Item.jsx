import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import c from './../constants'
import * as actions from './../actions'

function Item(props){

  function handleRemoveItem(){
    const { dispatch } = props
    dispatch(actions.removeItem(props.item.id))
    dispatch(actions.increment())
  }

  function handleUpdateItem(){
    const { dispatch } = props
    dispatch(actions.setActiveItem(props.item.id))
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
