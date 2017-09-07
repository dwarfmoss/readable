const requestHeaders = new Headers({ 'Authorization': 'i-said-so' })
export let requestInit = { headers: requestHeaders }

export function getCategories() {
  requestInit.method = 'GET'

  return fetch(`localhost:5001/categories`, requestInit)
    .then(res => res.json())
    .then(({ hits }) => hits.map(({ category }) => category))
}
