import {
  SET_CATEGORIES,
  SET_POSTS,
} from '../actions'

const initialReadableState = {
  selectedCategory: null,
  selectedPost: null,
  categories: [],
  posts: [],
  comments: [],
}

function readable(state = initialReadableState, action) {
  switch(action.type) {
    case SET_CATEGORIES :
      return {
        ...state,
        categories: action.categories
      }
    case SET_POSTS :
      return {
        ...state,
        posts: action.posts
      }
    default :
      return state
  }
}

export default readable
