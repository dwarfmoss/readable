import { combineReducers } from 'redux'

import {
  CREATE_POST,
  EDIT_POST,
  VOTE_POST_UP,
  VOTE_POST_DOWN,
  DELETE_POST,
  CREATE_COMMENT,
  EDIT_COMMENT,
  VOTE_COMMENT_UP,
  VOTE_COMMENT_DOWN,
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
    case VOTE_POST_UP :
      return {

      }
    case VOTE_POST_DOWN :
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
    case VOTE_COMMENT_UP :
      return {

      }
    case VOTE_COMMENT_DOWN :
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
