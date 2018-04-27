import React from 'react'
import { connect } from 'react-redux'

function UpdateItem(props){
  let _description = null
  let _dueDate = null

  function handleFormSubmission(event){
    event.preventDefault(); 
    const { dispatch } = props
    const firstAction = {
      type: 'UPDATE_ITEM',
      id: props.item.id,
      description: _description.value,
      dueDate: _dueDate.value
    }
    dispatch(firstAction)

    const secondAction = {
      type: 'SET_ACTIVEITEM',
      id: null
    }
    dispatch(secondAction)
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
