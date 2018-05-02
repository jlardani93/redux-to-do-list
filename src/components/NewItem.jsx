import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import Moment from 'moment'
import c from './../constants'
import * as actions from './../actions'

function NewItem(props){
  console.log(props)
  let {_description, _dueDate} = [null, null]

  function handleFormSubmission(event){
    event.preventDefault()
    const { dispatch } = props
    dispatch(actions.addItem(_description.value, _dueDate.value, v4(), new Moment()));
    [_description.value, _dueDate.value] = ['','']
  }

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <div className="formGroup">
          <label>Description: </label>
          <input
            type="text"
            id="description"
            ref={(element) => {_description = element}}></input>
        </div>
        <div className="formGroup">
          <label>Due Date: </label>
          <input
            type="text"
            id="description"
            ref={(element) => {_dueDate = element}}></input>
        </div>
        <button type="submit">Create New Item</button>
      </form>
    </div>
  )
}

NewItem = connect()(NewItem)
export default NewItem
