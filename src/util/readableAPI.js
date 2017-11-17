export function getAllCategories() {
  const url = `http://localhost:3001/categories`
  const requestInit = {
    method: 'GET',
    headers: { 'Authorization': 'i-said-so' }
  }
  console.log('fetching all categories from url', url);

  return fetch(url, requestInit)
    .then(res => res.json())
}

export function getPosts(category) {
  const url = category === '' ?
    `http://localhost:3001/posts` :
    `http://localhost:3001/${category}/posts`
  const requestInit = {
    method: 'GET',
    headers: { 'Authorization': 'i-said-so' }
  }
  console.log('fetching all posts from url', url);
  
  return fetch(url, requestInit)
    .then(res => res.json())
}

export function getSpecificEntry(id, type) {
  const url = type === 'comment' ?
    `http://localhost:3001/comments/${id}`:
    `http://localhost:3001/posts/${id}`
  const requestInit = {
    method: 'GET',
    headers: { 'Authorization': 'i-said-so' }
  }
  console.log(`fetching ${type} ${id} from url`, url);
  
  return fetch(url, requestInit)
  .then(res => res.json())
}

export function getPostComments(postId) {
  const url = `http://localhost:3001/posts/${postId}/comments`
  const requestInit = {
    method: 'GET',
    headers: { 'Authorization': 'i-said-so' }
  }
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
    headers: { 'Authorization': 'i-said-so' },
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
    headers: {
      'Authorization': 'i-said-so',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newEntry)
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
    headers: {
      'Authorization': 'i-said-so',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(entry)
  }
  console.log(`editing ${type} ${id} at url`, url);
  
  return fetch(url, requestInit)
  .then(res => res.json())
}

export function deleteEntry(id, type) {
  const url = type === 'comment' ?
    `http://localhost:3001/comments/${id}` :
    `http://localhost:3001/posts/${id}`
  const requestInit = {
    method: 'DELETE',
    headers: { 'Authorization': 'i-said-so' }
  }
  console.log(`deleting ${type} ${id} at url`, url);
  
  return fetch(url, requestInit)
  .then(res => res.json())
}