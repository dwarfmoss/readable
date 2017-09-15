import { combineReducers } from 'redux'

import {
  INIT_CATEGORIES,
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

function categories(state = [], action) {
  const { categories } = action
  
  switch(action.type) {
    case INIT_CATEGORIES  :
      return categories
    default :
      return state
  }
}

export default combineReducers({
  categories,
})
