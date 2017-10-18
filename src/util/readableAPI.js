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

export function getSelectedPost(postId) {
  const url = `http://localhost:3001/posts/${postId}`
  const requestInit = { method: 'GET', headers: requestHeaders }
  console.log(`fetching post ${postId} from url`, url);
  
  return fetch(url, requestInit)
  .then(res => res.json())
}

export function postPost(newPost) {
  const url = `http://localhost:3001/posts`
  const requestInit = {
    method: 'PUT',
    headers: requestHeaders,
    body: newPost.stringify()
  }
  console.log('posting a new Post to url', url);
  
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