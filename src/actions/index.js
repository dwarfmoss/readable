import {
  getAllCategories,
  getPosts,
  getSpecificEntry,
  getPostComments,
  addNewEntry,
} from "../util/readableAPI"

export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_POSTS = 'SET_POSTS'
export const SET_COMMENTS = 'GET_POST_COMMENTS'
export const SET_SELECTED_POST = 'SET_SELECTED_POST'
export const CREATE_POST = 'CREATE_POST'

export const receiveAllCategories = categories => ({
  type: SET_CATEGORIES,
  categories,
})

export const fetchAllCategories = () => dispatch => (
  getAllCategories()
  .then(data => dispatch(receiveAllCategories(data.categories)))
)


export const receivePosts = posts => ({
  type: SET_POSTS,
  posts,
})

export const fetchPosts = category => dispatch => (
  getPosts(category)
  .then(data => dispatch(receivePosts(data)))
)


export const receiveSelectedEntry = selectedPost => ({
  type: SET_SELECTED_POST,
  selectedPost,
})

export const fetchSelectedEntry = (id, type) => dispatch => (
  getSpecificEntry(id, type)
  .then(data => dispatch(receiveSelectedEntry(data)))
)


export const receivePostComments = comments => ({
  type: SET_COMMENTS,
  comments,
})

export const fetchPostComments = postId => dispatch => (
  getPostComments(postId)
  .then(data => dispatch(receivePostComments(data)))
)


export const receiveCreatePostResponse = (res, newPost) => ({
  type: CREATE_POST,
  newPost,
})

export const createPost = (newPost, type) => dispatch => (
  addNewEntry(newPost, type)
  .then(data => dispatch(receiveCreatePostResponse(data, newPost)))
)
