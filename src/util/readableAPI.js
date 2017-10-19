const requestHeaders = new Headers({ 'Authorization': 'i-said-so' })

export function getAllCategories() {
  const url = `http://localhost:3001/categories`
  const requestInit = { method: 'GET', headers: requestHeaders }
  console.log('fetching all categories from url', url);

  return fetch(url, requestInit)
    .then(res => res.json())
}

export function getPosts(category) {
  const url = category === '' ? `http://localhost:3001/posts` : `http://localhost:3001/${category}/posts`
  const requestInit = { method: 'GET', headers: requestHeaders }
  console.log('fetching all posts from url', url);
  
  return fetch(url, requestInit)
    .then(res => res.json())
}

export function getSpecificEntry(id, type) {
  const url = type === 'comment' ?
    `http://localhost:3001/comments/${id}`:
    `http://localhost:3001/posts/${id}`
  const requestInit = { method: 'GET', headers: requestHeaders }
  console.log(`fetching ${type} ${id} from url`, url);
  
  return fetch(url, requestInit)
  .then(res => res.json())
}

export function getPostComments(postId) {
  const url = `http://localhost:3001/posts/${postId}/comments`
  const requestInit = { method: 'GET', headers: requestHeaders }
  console.log(`fetching post ${postId} comments from url`, url);
  
  return fetch(url, requestInit)
  .then(res => res.json())
}

export function vote(id, voteDirection, voteType) {
  const url = voteType === 'comment' ?
    `http://localhost:3001/comments/${id}`:
    `http://localhost:3001/posts/${id}`
  const requestInit = {
    method: 'POST',
    headers: requestHeaders,
    body: voteDirection
  }
  console.log(`posting a ${voteDirection} for ${id} to url`, url);
  
  return fetch(url, requestInit)
  .then(res => res.json())
}

export function addNewEntry(newEntry, type) {
  const url = type === 'comment' ?
    `http://localhost:3001/comments` :
    `http://localhost:3001/posts`
  const requestInit = {
    method: 'POST',
    headers: requestHeaders,
    body: newEntry.stringify()
  }
  console.log(`posting a new ${type} to url`, url);
  
  return fetch(url, requestInit)
  .then(res => res.json())
}

export function editEntry(id, entry, type) {
  const url = type === 'comment' ?
    `http://localhost:3001/comments/${id}` :
    `http://localhost:3001/posts/${id}`
  const requestInit = {
    method: 'PUT',
    headers: requestHeaders,
    body: entry.stringify()
  }
  console.log(`editing ${type} ${id} at url`, url);
  
  return fetch(url, requestInit)
  .then(res => res.json())
}

export function deleteEntry(id, type) {
  const url = type === 'comment' ?
    `http://localhost:3001/comments/${id}` :
    `http://localhost:3001/posts/${id}`
  const requestInit = { method: 'DELETE', headers: requestHeaders }
  console.log(`deleting ${type} ${id} at url`, url);
  
  return fetch(url, requestInit)
  .then(res => res.json())
}