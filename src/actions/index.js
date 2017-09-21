import { getAllCategories, getAllPosts } from "../util/readableAPI"

export const INIT_CATEGORIES = 'INIT_CATEGORIES'
export const SET_ALL_POSTS = 'SET_ALL_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST_UP = 'VOTE_POST_UP'
export const VOTE_POST_DOWN = 'VOTE_POST_DOWN'
export const DELETE_POST = 'DELETE_POST'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const VOTE_COMMENT_UP = 'VOTE_COMMENT_UP'
export const VOTE_COMMENT_DOWN = 'VOTE_COMMENT_DOWN'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const receiveAllCategories = categories => ({
  type: INIT_CATEGORIES,
  categories,
})

export const fetchAllCategories = () => dispatch => (
  getAllCategories()
  .then(data => dispatch(receiveAllCategories(data.categories)))
)

export const receiveAllPosts = posts => ({
  type: SET_ALL_POSTS,
  posts,
})

export const fetchAllPosts = () => dispatch => (
  getAllPosts()
  .then(data => dispatch(receiveAllPosts(data)))
)

export function createPost ({ id, timestamp, title, body, author, category }) {
  return {
    type: CREATE_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
  }
}

export function editPost ({ id, title, body }) {
  return {
    type: EDIT_POST,
    id,
    title,
    body,
  }
}

export function votePostUp({ id }) {
  return {
    type: VOTE_POST_UP,
    id,
  }
}

export function votePostDown({ id }) {
  return {
    type: VOTE_POST_DOWN,
    id,
  }
}

export function deletePost ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
  return {
    type: DELETE_POST,
    id,
  }
}

export function createComment ({ id, parentId, timestamp, body, author, voteScore }) {
  return {
    type: CREATE_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
  }
}

export function editComment ({ id, parentId, body, author, voteScore }) {
  return {
    type: EDIT_COMMENT,
    id,
    parentId,
    body,
    author,
    voteScore,
  }
}

export function voteCommentUp({ id }) {
  return {
    type: VOTE_COMMENT_UP,
    id,
  }
}

export function voteCommentDown({ id }) {
  return {
    type: VOTE_COMMENT_DOWN,
    id,
  }
}

export function deleteComment ({ id, parentId }) {
  return {
    type: DELETE_COMMENT,
    id,
    parentId,
  }
}
