export const CREATE_POST = 'CREATE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function createPost ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
  return {
    type: CREATE_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted,
  }
}

export function editPost ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
  return {
    type: EDIT_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted,
  }
}

export function deletePost ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
  return {
    type: DELETE_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted,
  }
}

export function createComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: CREATE_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  }
}

export function editComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: EDIT_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  }
}

export function deleteComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: DELETE_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  }
}
