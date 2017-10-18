import { combineReducers } from 'redux'

import {
  INIT_CATEGORIES,
  SET_POSTS,
  SET_COMMENTS,
  SET_SELECTED_POST,
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
    case SET_POSTS :
      return posts
    default :
      return state
  }
}

function comments(state = [], action) {
  const { comments } = action
  
  switch(action.type) {
    case SET_COMMENTS :
      return comments
    default :
      return state
  }
}

function selectedPost(state = {}, action) {
  const { selectedPost } = action
  
  switch(action.type) {
    case SET_SELECTED_POST :
      return selectedPost
    default :
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  comments,
  selectedPost,
})
