import { combineReducers } from 'redux'

import {
  INIT_CATEGORIES,
  SET_ALL_POSTS,
} from '../actions'

function categories(state = [], action) {
  const { categories } = action
  
  switch(action.type) {
    case INIT_CATEGORIES :
      return categories
    default :
      return state
  }
}

function posts(state = [], action) {
  const { posts } = action
  
  switch(action.type) {
    case SET_ALL_POSTS :
      return posts
    default :
      return state
  }
}

export default combineReducers({
  categories,
  posts,
})
