import {
  getAllCategories,
  getPosts,
  getSpecificEntry,
  getPostComments,
  vote,
  addNewEntry,
  editEntry,
  deleteEntry,
} from "../util/readableAPI"

export const INIT_CATEGORIES = 'INIT_CATEGORIES'
export const SET_POSTS = 'SET_POSTS'
export const SET_COMMENTS = 'GET_POST_COMMENTS'
export const SET_SELECTED_POST = 'SET_SELECTED_POST'
export const CREATE_POST = 'CREATE_POST'
export const CREATE_COMMENT = 'CREATE_COMMENT'

export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST_UP = 'VOTE_POST_UP'
export const VOTE_POST_DOWN = 'VOTE_POST_DOWN'
export const DELETE_POST = 'DELETE_POST'
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


export const receiveCreateCommentResponse = (res, newComment) => ({
  type: CREATE_POST,
  newComment,
})

export const createComment = (newComment, type) => dispatch => (
  addNewEntry(newComment, type)
  .then(data => dispatch(receiveCreateCommentResponse(data, newComment)))
)
