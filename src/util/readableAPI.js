const requestHeaders = new Headers({ 'Authorization': 'i-said-so' })

export function getAllCategories() {
  const url = `http://localhost:3001/categories`
  const requestInit = { method: 'GET', headers: requestHeaders }
  console.log('fetching from url', url);

  return fetch(url, requestInit)
    .then(res => res.json())
}

export function getAllPosts() {
  const url = `http://localhost:3001/posts`
  const requestInit = { method: 'GET', headers: requestHeaders }
  console.log('fetching from url', url);
  
  return fetch(url, requestInit)
    .then(res => res.json())
}