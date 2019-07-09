export const queryType = {
  tag: 'tag',
  category: 'category'
}

export const queryAdjustment = location => {
  const { search } = location
  let allowed = false
  let query, type

  // Check search is not null or not empty
  if (search || search.trim()) {
    // Get search params from url. eg: site.com/blog `?tag=palette&tag=colors`
    const params = new URLSearchParams(search)

    // Get first key in search params. eg from sample above `tag`
    type = params.keys().next().value

    // Only allow query from queryType
    for (let key in queryType) {
      if (type === queryType[key]) {
        allowed = true
        break
      }
    }

    // Get value of search params given type. eg from sample above `palette`
    query = params.get(type)
  }

  return [allowed, query, type]
}

export function edgesToCategories (edges) {
  return edges
    .map(e => e.node.frontmatter.category)
    .filter((v, i, e) => e.indexOf(v) === i)
}

export function edgesToTags (edges) {
  return edges
    .map(e => e.node.frontmatter.tags)
    .filter((v, i, e) => e.indexOf(v) === i)
}

export function updatedObj (old, upd) {
  return { ...old, ...upd }
}

export function hashCode (str) {
  var hash = 0
  if (str.length === 0) return hash
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}

// Check array is contains value with ignoring case (includesIgnoreCase)
export const inic = (arr, val) => {
  const regex = new RegExp(arr.join('|'), 'i')
  return regex.test(val)
}

// Check for equality with ignoring case (equalIgnoreCase)
export const eqic = (a, b) => a.toUpperCase() === b.toUpperCase()
