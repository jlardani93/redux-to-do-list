import React from 'react'
import { connect } from 'react-redux'
import c from './../constants'
import * as actions from './../actions'

function UpdateItem(props){
  let _description = null
  let _dueDate = null

  function handleFormSubmission(event){
    event.preventDefault()
    const { dispatch } = props
    dispatch(actions.updateItem(props.item.id, _description.value, _dueDate.value))
    dispatch(actions.setActiveItem(null))
  }

  return(
    <div>
      <form onSubmit={handleFormSubmission}>
        <div className="formGroup">
          <label>Description: </label>
          <input
            type="text"
            id="description"
            defaultValue={props.item.description}
            ref={(element) => {_description = element}}></input>
        </div>
        <div className="formGroup">
          <label>Due Date: </label>
          <input
            type="text"
            id="description"
            defaultValue={props.item.description}
            ref={(element) => {_dueDate = element}}></input>
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
  )
}

export default connect()(UpdateItem)
