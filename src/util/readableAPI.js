const requestHeaders = new Headers({ 'Authorization': 'i-said-so' })

export function getAllCategories() {
  const url = `http://localhost:3001/categories`
  const requestInit = { method: 'GET', headers: requestHeaders }
  console.log('fetching from url', url);

  return fetch(url, requestInit)
    .then(res => res.json())
}

export function getPosts(category) {
  const url = category === '' ? `http://localhost:3001/posts` : `http://localhost:3001/${category}/posts`
  const requestInit = { method: 'GET', headers: requestHeaders }
  console.log('fetching from url', url);
  
  return fetch(url, requestInit)
    .then(res => res.json())
}

export function postPost(newPost) {
  const url = `http://localhost:3001/posts`
  const requestInit = {
    method: 'POST',
    headers: requestHeaders,
    body: newPost.stringify()
  }
  console.log('posting to url', url);
  
  return fetch(url, requestInit)
  .then(res => res.json())
}