import { combineReducers } from 'redux'

import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from '../actions'

function posts(state, action) {
  const { id, timestamp, title, body, author, category, voteScore, deleted } = action

  switch(action.type) {
    case CREATE_POST :
      return {

      }
    case EDIT_POST :
      return {
        
      }
    case DELETE_POST :
      return {

      }
    default :
      return state
  }
}

function comments(state, action) {
  const { id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted } = action

  switch(action.type) {
    case CREATE_COMMENT :
      return {

      }
    case EDIT_COMMENT :
      return {

      }
    case DELETE_COMMENT :
      return {

      }
    default :
      return state
  }
}

export default combineReducers({
  posts,
  comments,
})
